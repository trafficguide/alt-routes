using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator.Extractors
{
    public class BusRouteDetailsExtractor
    {
        private GeneratorConfig configObj;
        private XmlDocument sourceXML;
        private string[] knownCrossHarbourLines;
        private string[] knownCommuterLines;
        private string[] knownNightLines;

        public BusRouteDetailsExtractor(GeneratorConfig config)
        {
            configObj = config;
            sourceXML = new XmlDocument();
        }

        public void TryLoad()
        {
            try
            {
                sourceXML.Load(configObj.FileLoc_RouteDetailsXML);
            }
            catch (Exception x)
            {
                throw x;
            }
        }

        public void TryLoad_CrossHarbour()
        {
            knownCrossHarbourLines = File.ReadAllLines(configObj.FileLoc_CrossHarbourList);
        }

        public void TryLoad_Commuter()
        {
            knownCommuterLines = File.ReadAllLines(configObj.FileLoc_CommuterList);
        }

        public void TryLoad_Night()
        {
            knownNightLines = File.ReadAllLines(configObj.FileLoc_NightList);
        }

        public void LoadRouteDetails()
        {
            // Begin read
            Console.WriteLine("Parameter: " + knownCrossHarbourLines.Length + " cross-harbour routes.");

            /*
            foreach (string xhr in knownCrossHarbourLines)
            {
                Console.WriteLine(xhr);
            }
            */

            List<XmlBusRoute> listLoadedRoutes = RouteStopExtractor.LoadedBusRoutes;

            XmlNodeList routes = sourceXML.GetElementsByTagName("ROUTE");
            Console.WriteLine("Identified and loaded " + routes.Count + " bus routes.");
            /*
            if (loadedRoutes.Values.Count != routes.Count)
            {
                Console.WriteLine("[Warning] Number of bus routes as reflected in Bus Route Details Component and Route-Stop Component does not match.");
            }
            */
            
            foreach (XmlNode routeDataNode in routes)
            {
                // Extract data
                string routeID = routeDataNode["ROUTE_ID"].InnerText;
                string routeName = routeDataNode["ROUTE_NAMEC"].InnerText;
                string fromName = routeDataNode["LOC_START_NAMEC"].InnerText;
                string toName = routeDataNode["LOC_END_NAMEC"].InnerText;
                string companyCode = routeDataNode["COMPANY_CODE"].InnerText;
                string serviceMode = routeDataNode["SERVICE_MODE"].InnerText;

                // Associate to previously-loaded stops
                // Find it
                foreach (XmlBusRoute busRoute in listLoadedRoutes)
                {
                    BusRoute route = busRoute.Route;
                    if (route.RouteID == routeID)
                    {
                        route.InputMoreDetails(routeName, fromName, toName);
                        route.InputCompanyCode(companyCode);
                        route.ServiceMode = serviceMode;

                        // Check cross harbour
                        foreach (string crossHarbourRoute in knownCrossHarbourLines)
                        {
                            if (crossHarbourRoute == routeName)
                            {
                                //Console.WriteLine(routeID + " is a known cross-harbour line.");
                                route.MarkCrossHarbour();
                                break;
                            }
                        }

                        // Check commuter
                        foreach (string commuterRoute in knownCommuterLines)
                        {
                            if (route.InternalUID == commuterRoute)
                            {
                                route.MarkCommuter();
                            }
                        }

                        // Check night
                        foreach (string nightRoute in knownNightLines)
                        {
                            if (route.InternalUID == nightRoute)
                            {
                                route.MarkNightOnly();
                            }
                        }
                    }
                }

                /*
                BusRoute route = loadedRoutes[routeID];
                if (route != null)
                {
                    route.InputMoreDetails(routeName, fromName, toName);
                    route.InputCompanyCode(companyCode);
                    route.ServiceMode = serviceMode;

                    
                }
                else
                {
                    Console.WriteLine("[Warning] Route ID not loaded during Route-Stop Extraction: #" + routeID);
                }
                */
            }

            // All route-stop info loaded.

            // Determine the "actual routes"
            

            /*
            // Let's print the line details!
            foreach (BusRoute route in loadedRoutes.Values)
            {
                Console.WriteLine(route.ToString());
            }
            */
        }
    }
}
