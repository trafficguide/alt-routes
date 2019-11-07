using RouteInfoGenerator.DataTypes;
using RouteInfoGenerator.Extractors;
using RouteInfoGenerator.Generators;
using RouteInfoGenerator.Weavers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator
{
    public class InfoGenerator
    {
        GeneratorConfig config;
        KmlPolygonExtractor polygonExtractor;
        internal BusStopExtractor busStopExtractor;
        internal RouteStopExtractor routeStopExtractor;
        BusRouteDetailsExtractor routeDetailsExtractor;
        public bool IsValid { get; private set; } = false;

        public InfoGenerator(GeneratorConfig config)
        {
            this.config = config;
            PreloadAndVerify();
        }

        private void PreloadAndVerify()
        {
            IsValid = true;
            Console.WriteLine("Performing pre-checks...");

            polygonExtractor = new KmlPolygonExtractor(config);
            try
            {
                polygonExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("KML File Component pre-check failed: " + x.Message);
            }

            busStopExtractor = new BusStopExtractor(config);
            try
            {
                busStopExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Bus Stop Component pre-check failed: " + x.Message);
            }

            routeStopExtractor = new RouteStopExtractor(config);
            try
            {
                routeStopExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Route-stop Component pre-check failed: " + x.Message);
            }

            routeDetailsExtractor = new BusRouteDetailsExtractor(config);
            try
            {
                routeDetailsExtractor.TryLoad();
                routeDetailsExtractor.TryLoad_CrossHarbour();
                routeDetailsExtractor.TryLoad_Commuter();
                routeDetailsExtractor.TryLoad_Night();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Bus Route Details Component pre-check failed: " + x.Message);
            }

            try
            {
                File.Create(config.ExportLoc_Waypoints);
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Waypoint Export Component pre-check failed: " + x.Message);
            }

            try
            {
                File.Create(config.ExportLoc_BusRoutes);
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Bus Route Export Component pre-check failed: " + x.Message);
            }
        }

        public void GenerateFiles()
        {
            if (!IsValid)
            {
                return;
            }

            // Prepare variables
            Dictionary<string, BusRoute> loadedBusRoutes = new Dictionary<string, BusRoute>();
            List<GeoPolygon> loadedPolygons;
            List<BusStop> loadedBusStops;

            // BEGIN
            Console.WriteLine("[Info] File generation begun.");

            // Loading the xml files.
            Console.WriteLine("[Info] Loading data sources...");
            Console.WriteLine(">>> KML Geo-Polygon Extractor <<<");
            polygonExtractor.LoadPolygons();
            loadedPolygons = polygonExtractor.Results;
            Console.WriteLine(">>> Bus Stop XML Extractor <<<");
            busStopExtractor.LoadBusStops();
            loadedBusStops = busStopExtractor.LoadedBusStops;
            Console.WriteLine(">>> Route-stop XML Extractor <<<");
            loadedBusRoutes = routeStopExtractor.LoadRouteStops();
            Console.WriteLine(">>> Bus Route Details XML Extractor <<<");
            routeDetailsExtractor.LoadRouteDetails(ref loadedBusRoutes);

            // All extracted and loaded.
            Console.WriteLine("[Info] All data sources loaded.");
            Console.WriteLine(loadedBusRoutes.Count);

            // First, exclude some bus lines
            ExcludeBannedBusLines(loadedBusRoutes);
            ExcludeBranchedBusRoutes(ref loadedBusRoutes);

            // Now, we can manipulate the data programmatically.
            Console.WriteLine("[Info] Beginning to weave information...");
            BusStopPolygonWeaver.WeavePolygonsIntoBusStops(loadedBusStops, loadedPolygons);
            BusStopRouteStopWeaver.WeaveRouteStopIntoBusStop(this);
            Console.WriteLine("[Info] All weaving complete.");

            // Generating the stuff!!!
            Console.WriteLine("[Info] Beginning to generate codes.");
            List<TS_BusRouteEntry> typeScriptBusRoutes = BusRouteTSGenerator.GenerateTypeScriptBusRouteObjects(loadedBusRoutes.Values.ToList());

            // Generating waypoints
            WaypointTSGenerator.GenerateTypeScriptWaypoints(loadedPolygons, config.ExportLoc_Waypoints);

            // Checking the bus routes
            Console.WriteLine("[Info] Verifying results...");
            List<BusRoute> listMessyCompanyCodeRoutes = new List<BusRoute>();
            foreach (TS_BusRouteEntry entry in typeScriptBusRoutes)
            {
                if (entry.ExportAsTypeScript().Contains("+"))
                {
                    if (!listMessyCompanyCodeRoutes.Contains(entry.Route))
                    {
                        //typeScriptBusRoutes.Remove(entry);
                        listMessyCompanyCodeRoutes.Add(entry.Route);
                    }
                }
            }
            for (int i = typeScriptBusRoutes.Count - 1; i >= 0; i--)
            {
                if (listMessyCompanyCodeRoutes.Contains(typeScriptBusRoutes[i].Route))
                {
                    typeScriptBusRoutes.RemoveAt(i);
                }
            }
            if (listMessyCompanyCodeRoutes.Count > 0)
            {
                Console.WriteLine("[Warning] The following bus routes are problematic; right now, they are excluded.");
                foreach (BusRoute route in listMessyCompanyCodeRoutes)
                {
                    Console.WriteLine(route.RouteName + ": messy company code.");
                }
            }

            BusRouteTSGenerator.ExportTSEntriesToFile(typeScriptBusRoutes, config.ExportLoc_BusRoutes);
        }

        private void ExcludeBannedBusLines(Dictionary<string, BusRoute> loadedBusRoutes)
        {
            Console.WriteLine("[Info] Excluding cross-border and LRT-feeder bus routes since they are out of scope.");
            int excludedBusRoutes = 0;
            List<string> listToBeRemoved = new List<string>();
            foreach (string key in loadedBusRoutes.Keys)
            {
                BusRoute route = loadedBusRoutes[key];
                if (route.CompanyCode == "XB" || route.CompanyCode == "LRTFeeder")
                {
                    listToBeRemoved.Add(key);
                }
            }
            excludedBusRoutes = listToBeRemoved.Count;
            foreach (string key in listToBeRemoved)
            {
                loadedBusRoutes.Remove(key);
            }
            Console.WriteLine("[Info] Excluded " + excludedBusRoutes + " unfit bus routes.");
        }

        private void ExcludeBranchedBusRoutes(ref Dictionary<string, BusRoute> loadedRoutes)
        {
            Console.WriteLine("Eliminating branched bus routes...");

            List<BusRoute> listAcceptedRoutes = new List<BusRoute>();
            List<BusRoute> listLoadedRoutes = loadedRoutes.Values.ToList();
            List<BusRoute> listWTF = new List<BusRoute>();
            //Console.WriteLine(listLoadedRoutes.Count);
            for (int i = 0; i < listLoadedRoutes.Count; i++)
            {
                // Check if contains
                BusRoute route = listLoadedRoutes[i];
                //Console.Write(route.RouteName);
                bool routeIsAlreadyContained = false;
                foreach (BusRoute acceptedRoute in listAcceptedRoutes)
                {
                    if (route.RouteName == acceptedRoute.RouteName && route.CompanyCode == acceptedRoute.CompanyCode)
                    {
                        routeIsAlreadyContained = true;
                        break;
                    }
                }
                if (routeIsAlreadyContained)
                {
                    //Console.WriteLine(" excluded");
                    continue;
                }

                //Console.Write(" finding matches ");

                // New route. Find all routes matching it.
                List<BusRoute> matchingRoutes = new List<BusRoute>();
                for (int j = i; j < listLoadedRoutes.Count; j++)
                {
                    BusRoute tempRoute = listLoadedRoutes[j];
                    if (tempRoute.RouteName == route.RouteName && tempRoute.CompanyCode == route.CompanyCode)
                    {
                        //Console.Write(tempRoute.RouteName + " ");
                        matchingRoutes.Add(tempRoute);
                    }
                }

                // Now check the routes:
                if (matchingRoutes.Count == 1)
                {
                    // Singleton. Always valid.
                    //Console.WriteLine(" Singleton");
                    listAcceptedRoutes.Add(matchingRoutes[0]);
                }
                else
                {
                    // Multiple. I assume it is like 1 "R" leading several "T"
                    BusRoute mainRoute = null;
                    foreach (BusRoute potentialMain in matchingRoutes)
                    {
                        if (potentialMain.ServiceMode == "R")
                        {
                            mainRoute = potentialMain;
                            break;
                        }
                    }
                    if (mainRoute != null)
                    {
                        //Console.WriteLine(" Leader");
                        listAcceptedRoutes.Add(mainRoute);
                    }
                    else
                    {
                        //Console.WriteLine(" WTF?");
                        // WTF?
                        // This should be impossible.
                        listWTF.Add(matchingRoutes[0]);
                    }
                }
            }

            // We now have a list of accepted routes.
            // Re-generate the dictionary.

            loadedRoutes = new Dictionary<string, BusRoute>();
            foreach (BusRoute acceptedRoute in listAcceptedRoutes)
            {
                loadedRoutes[acceptedRoute.RouteID] = acceptedRoute;
            }
            //Console.WriteLine(loadedRoutes.Count);
            Console.WriteLine("Trimmed number of bus routes to " + loadedRoutes.Count + ".");

            if (listWTF.Count > 0)
            {
                Console.WriteLine("[Warning] Elimination of branched bus routes has eliminated all routes for the following bus lines:");
                foreach (BusRoute wtf in listWTF)
                {
                    Console.WriteLine(wtf.RouteName + " by " + wtf.CompanyCode);
                }
            }
        }
    }
}
