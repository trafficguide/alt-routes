using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator.Generators
{
    class RouteStopExtractor
    {
        private string sourcePath;
        private XmlDocument sourceXML;

        public RouteStopExtractor(GeneratorConfig config)
        {
            sourcePath = config.FileLoc_RouteStopXML;
            sourceXML = new XmlDocument();
        }

        public void TryLoad()
        {
            try
            {
                sourceXML.Load(sourcePath);
            }
            catch (Exception x)
            {
                throw x;
            }
        }

        public void LoadRouteStops()
        {
            // Begin read
            XmlNodeList routeStops = sourceXML.GetElementsByTagName("RSTOP");
            Console.WriteLine("Loaded " + routeStops.Count + " route-stop entries.");

            // Prepare lists
            Dictionary<string, BusRoute> loadedBusRoutes = new Dictionary<string, BusRoute>();
            foreach (XmlNode routeStopPairing in routeStops)
            {
                // Extract data
                string routeID = routeStopPairing["ROUTE_ID"].InnerText;
                int routeSequence = int.Parse(routeStopPairing["ROUTE_SEQ"].InnerText);
                int stopSequence = int.Parse(routeStopPairing["STOP_SEQ"].InnerText);
                int stopID = int.Parse(routeStopPairing["STOP_ID"].InnerText);

                // Construct objects
                if (!loadedBusRoutes.ContainsKey(routeID))
                {
                    loadedBusRoutes[routeID] = new BusRoute(routeID);
                }
                BusRoute loadedRoute = loadedBusRoutes[routeID];

                // Enter items
                loadedRoute.AddRouteInfo(routeSequence, stopSequence, stopID);
            }

            // All route-stop info loaded.
            Console.WriteLine("Identified " + loadedBusRoutes.Count + " bus routes.");

            // We will call the simplifier on each of the bus routes.

            // We will skip the export part for now.
            /*

            // Write up a new XML file for this.
            XmlDocument exportDoc = new XmlDocument();

            // First add in a root node
            XmlElement rootNode = exportDoc.CreateElement("BusRoutes");
            exportDoc.AppendChild(rootNode);

            // Then prepare the XML declaration
            XmlDeclaration xmlDeclaration = exportDoc.CreateXmlDeclaration("1.0", "UTF-8", null);
            XmlElement root = exportDoc.DocumentElement;
            exportDoc.InsertBefore(xmlDeclaration, root);

            // Now write everything we have onto the XML file.
            foreach (string key in loadedBusRoutes.Keys)
            {
                BusRoute route = loadedBusRoutes[key];

                // First generate a new node
                XmlElement routeNode = exportDoc.CreateElement("BusRoute");

                // Route ID part as an Attribute
                routeNode.SetAttribute("RouteID", route.RouteID);
                XmlText routeIdField = exportDoc.CreateTextNode(route.RouteID);

                // For each route sequence, generate a node
                // But first, sort the Keys list
                List<int> sortedKeys = route.RouteSequences.Keys.ToList();
                sortedKeys.Sort();
                foreach (int key1 in sortedKeys)
                {
                    RouteSequence sequence = route.RouteSequences[key1];

                    // Directly generate a "StopSequence SequenceID=''" node
                    XmlElement stopSeqNode = exportDoc.CreateElement("StopSequence");

                    // Mark sequence ID attribute
                    stopSeqNode.SetAttribute("SequenceID", sequence.SequenceID.ToString());

                    // Paste the route sequence info here.
                    XmlText stopSeqField = exportDoc.CreateTextNode(sequence.GenerateStopSequenceString());
                    stopSeqNode.AppendChild(stopSeqField);

                    // All route-sequence info complete.
                    routeNode.AppendChild(stopSeqNode);
                }

                // All route info added
                rootNode.AppendChild(routeNode);
            }
            
            for (int i = 0; i < loadedBusRoutes.Count; i++)
            {
                XmlNode stopNode = stops[i];

                // Directly write to node

                // Latitude part
                XmlText latitudeField = rawRouteStopPairings.CreateTextNode(loadedBusRoutes[i].Position_GPS.Latitude.ToString());
                XmlElement latitudeTag = rawRouteStopPairings.CreateElement(string.Empty, "LATITUDE", string.Empty);
                latitudeTag.AppendChild(latitudeField);
                stopNode.AppendChild(latitudeTag);

                // Longitude part
                XmlText longitudeField = rawRouteStopPairings.CreateTextNode(loadedBusRoutes[i].Position_GPS.Longitude.ToString());
                XmlElement longitudeTag = rawRouteStopPairings.CreateElement(string.Empty, "LONGITUDE", string.Empty);
                longitudeTag.AppendChild(longitudeField);
                stopNode.AppendChild(longitudeTag);
            }
            

            // All data read.
            // Let's export the XML.
            string exportFileName = Path.GetDirectoryName(filename) + @"\" + Path.GetFileNameWithoutExtension(filename) + "_Processed.xml";
            exportDoc.Save(exportFileName);
            */
        }
    }
}
