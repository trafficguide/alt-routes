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
        public static InfoGenerator Instance { get; private set; }

        public InfoGenerator(GeneratorConfig config)
        {
            this.config = config;
            PreloadAndVerify();
            Instance = this;
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
            routeStopExtractor.LoadAllRouteStops();
            Console.WriteLine(">>> Bus Route Details XML Extractor <<<");
            routeDetailsExtractor.LoadRouteDetails();

            // All extracted and loaded.
            Console.WriteLine("[Info] All data sources loaded.");
            //Console.WriteLine(loadedBusRoutes.Count);

            // First, exclude some bus lines
            ExcludeBannedBusLines();
            ExcludeBranchedBusRoutes();

            // Now, we can manipulate the data programmatically.
            Console.WriteLine("[Info] Beginning to weave information...");
            BusStopPolygonWeaver.WeavePolygonsIntoBusStops(loadedBusStops, loadedPolygons);
            BusStopRouteStopWeaver.WeaveRouteStopIntoBusStop(this);
            Console.WriteLine("[Info] All weaving complete.");

            // Generating the stuff!!!
            Console.WriteLine("[Info] Beginning to generate codes.");
            List<TS_BusRouteEntry> typeScriptBusRoutes = BusRouteTSGenerator.GenerateTypeScriptBusRouteObjects();

            // Generating waypoints
            WaypointTSGenerator.GenerateTypeScriptWaypoints(loadedPolygons, config.ExportLoc_Waypoints);

            // Checking the bus routes
            Console.WriteLine("[Info] Verifying results...");
            List<XmlBusRoute> listMessyCompanyCodeRoutes = new List<XmlBusRoute>();
            foreach (TS_BusRouteEntry entry in typeScriptBusRoutes)
            {
                if (entry.ExportAsTypeScript().Contains("+"))
                {
                    listMessyCompanyCodeRoutes.Add(entry.BusRoute);
                }
            }
            for (int i = typeScriptBusRoutes.Count - 1; i >= 0; i--)
            {
                if (listMessyCompanyCodeRoutes.Contains(typeScriptBusRoutes[i].BusRoute))
                {
                    typeScriptBusRoutes.RemoveAt(i);
                }
            }
            if (listMessyCompanyCodeRoutes.Count > 0)
            {
                Console.WriteLine("[Warning] The following bus routes are problematic; right now, they are excluded.");
                foreach (XmlBusRoute route in listMessyCompanyCodeRoutes)
                {
                    Console.WriteLine(route.Route.InternalUID + ": messy company code.");
                }
            }

            BusRouteTSGenerator.ExportTSEntriesToFile(typeScriptBusRoutes, config.ExportLoc_BusRoutes);
        }

        private void ExcludeBannedBusLines()
        {
            Console.WriteLine("[Info] Excluding cross-border and LRT-feeder bus routes since they are out of scope.");
            int excludedBusRoutes = 0;
            List<XmlBusRoute> listAllRoutes = RouteStopExtractor.LoadedBusRoutes;
            List<XmlBusRoute> listToBeRemoved = new List<XmlBusRoute>();
            foreach (XmlBusRoute xmlRoute in listAllRoutes)
            {
                BusRoute route = xmlRoute.Route;
                if (route.CompanyCode == "XB" || route.CompanyCode == "LRTFeeder")
                {
                    listToBeRemoved.Add(xmlRoute);
                }
            }
            excludedBusRoutes = listToBeRemoved.Count;
            foreach (XmlBusRoute xmlRoute in listToBeRemoved)
            {
                listAllRoutes.Remove(xmlRoute);
            }
            Console.WriteLine("[Info] Excluded " + excludedBusRoutes + " unfit bus routes.");
        }

        private void ExcludeBranchedBusRoutes()
        {
            Console.WriteLine("Eliminating branched bus routes...");

            List<XmlBusRoute> listLoadedRoutes = RouteStopExtractor.LoadedBusRoutes;
            List<XmlBusRoute> listAcceptedRoutes = new List<XmlBusRoute>();
            List<XmlBusRoute> listWTF = new List<XmlBusRoute>();

            //Console.WriteLine(listLoadedRoutes.Count);
            for (int i = 0; i < listLoadedRoutes.Count; i++)
            {
                // Check if contains
                XmlBusRoute xmlRoute = listLoadedRoutes[i];
                //Console.Write(route.RouteName);
                bool routeIsAlreadyContained = false;
                foreach (XmlBusRoute acceptedRoute in listAcceptedRoutes)
                {
                    if (xmlRoute.Route.InternalUID == acceptedRoute.Route.InternalUID)
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
                List<XmlBusRoute> matchingRoutes = new List<XmlBusRoute>();
                for (int j = i; j < listLoadedRoutes.Count; j++)
                {
                    XmlBusRoute tempRoute = listLoadedRoutes[j];
                    if (tempRoute.Route.InternalUID == xmlRoute.Route.InternalUID)
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
                    XmlBusRoute mainRoute = null;
                    foreach (XmlBusRoute potentialMain in matchingRoutes)
                    {
                        if (potentialMain.Route.ServiceMode == "R")
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
            // Re-generate the list.

            RouteStopExtractor.LoadedBusRoutes = listAcceptedRoutes;
            //Console.WriteLine(loadedRoutes.Count);
            Console.WriteLine("Trimmed number of bus routes to " + RouteStopExtractor.LoadedBusRoutes.Count + ".");

            if (listWTF.Count > 0)
            {
                Console.WriteLine("[Warning] Elimination of branched bus routes has eliminated all routes for the following bus lines:");
                foreach (XmlBusRoute wtf in listWTF)
                {
                    Console.WriteLine(wtf.Route.InternalUID);
                }
            }
        }
    }
}
