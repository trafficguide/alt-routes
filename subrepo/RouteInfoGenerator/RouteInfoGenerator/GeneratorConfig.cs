using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator
{
    public class GeneratorConfig
    {
        public XmlDocument ConfigDoc { get; private set; }
        public string FileLoc_PolygonKML { get; private set; }
        public string FileLoc_BusStopXML { get; private set; }
        public string FileLoc_RouteStopXML { get; private set; }
        public string FileLoc_RouteDetailsXML { get; private set; }
        public string FileLoc_CrossHarbourList { get; private set; }
        public string FileLoc_CommuterList { get; private set; }
        public string FileLoc_NightList { get; private set; }

        public string ExportLoc_BusRoutes { get; private set; }
        public string ExportLoc_Waypoints { get; private set; }

        public GeneratorConfig()
        {
            Console.WriteLine("Loading generator configuration...");
            LoadConfigFile();
            Console.WriteLine("Configuration loaded.");
        }

        private void LoadConfigFile()
        {
            ConfigDoc = new XmlDocument();

            try
            {
                ConfigDoc.Load("config.xml");
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("Configuration file not found. This may happen because this is the first launch.");
                Console.WriteLine("Generating the configuration file instead.");
                InitializeConfigFile();
            }

            FileLoc_PolygonKML = ConfigDoc.DocumentElement["PolygonKmlFileLocation"].InnerText;

            if (ConfigDoc.DocumentElement["BusStopXmlFileLocation"] == null)
            {
                // The Bus Stop XML raw file
                XmlElement busXmlFileElement = ConfigDoc.CreateElement("BusStopXmlFileLocation");
                XmlText busXmlFileField = ConfigDoc.CreateTextNode(string.Empty);
                busXmlFileElement.AppendChild(busXmlFileField);
                ConfigDoc.DocumentElement.AppendChild(busXmlFileElement);
                ConfigDoc.Save("config.xml");
            }

            FileLoc_BusStopXML = ConfigDoc.DocumentElement["BusStopXmlFileLocation"].InnerText;

            if (ConfigDoc.DocumentElement["RouteStopXmlFileLocation"] == null)
            {
                GenerateRouteStopXmlNode();
                ConfigDoc.Save("config.xml");
            }

            FileLoc_RouteStopXML = ConfigDoc.DocumentElement["RouteStopXmlFileLocation"].InnerText;

            if (ConfigDoc.DocumentElement["BusRouteDetailsXmlFileLocation"] == null)
            {
                GenerateBusRouteDetailsXmlNode();
                ConfigDoc.Save("config.xml");
            }

            FileLoc_RouteDetailsXML = ConfigDoc.DocumentElement["BusRouteDetailsXmlFileLocation"].InnerText;
            FileLoc_CrossHarbourList = ReadAndGenerateConfigTextNode("CrossHarbourLineSource");
            FileLoc_CommuterList = ReadAndGenerateConfigTextNode("CommuterLineSource");
            FileLoc_NightList = ReadAndGenerateConfigTextNode("NightLineSource");

            ExportLoc_BusRoutes = ReadAndGenerateConfigTextNode("BusRouteExportLocation");
            ExportLoc_Waypoints = ReadAndGenerateConfigTextNode("WaypointsExportLocation");

            ConfigDoc.Save("config.xml");
        }

        private void InitializeConfigFile()
        {
            // First add in the root node
            XmlElement rootNode = ConfigDoc.CreateElement("Configuration");
            ConfigDoc.AppendChild(rootNode);

            // Then prepare the XML declaration
            XmlDeclaration xmlDeclaration = ConfigDoc.CreateXmlDeclaration("1.0", "UTF-8", null);
            ConfigDoc.InsertBefore(xmlDeclaration, rootNode);

            // Now, the Polygon KML polygon file location
            XmlElement kmlFileElement = ConfigDoc.CreateElement("PolygonKmlFileLocation");
            XmlText kmlFileField = ConfigDoc.CreateTextNode(string.Empty);
            kmlFileElement.AppendChild(kmlFileField);
            rootNode.AppendChild(kmlFileElement);

            // The Bus Stop XML raw file
            XmlElement busXmlFileElement = ConfigDoc.CreateElement("BusStopXmlFileLocation");
            XmlText busXmlFileField = ConfigDoc.CreateTextNode(string.Empty);
            busXmlFileElement.AppendChild(busXmlFileField);
            rootNode.AppendChild(busXmlFileElement);

            // The Route-Stop XML raw file
            GenerateRouteStopXmlNode();

            // The bus route details XML raw file
            GenerateBusRouteDetailsXmlNode();

            // Everything should be ready.
            // Save the config first.
            ConfigDoc.Save("config.xml");
        }

        private void GenerateRouteStopXmlNode()
        {
            XmlElement routeStopXmlFileElement = ConfigDoc.CreateElement("RouteStopXmlFileLocation");
            XmlText textField = ConfigDoc.CreateTextNode(string.Empty);
            routeStopXmlFileElement.AppendChild(textField);
            ConfigDoc.DocumentElement.AppendChild(routeStopXmlFileElement);
        }

        private void GenerateBusRouteDetailsXmlNode()
        {
            XmlElement xmlELement = ConfigDoc.CreateElement("BusRouteDetailsXmlFileLocation");
            XmlText textField = ConfigDoc.CreateTextNode(string.Empty);
            xmlELement.AppendChild(textField);
            ConfigDoc.DocumentElement.AppendChild(xmlELement);
        }

        private string ReadAndGenerateConfigTextNode(string nodeName)
        {
            if (ConfigDoc.DocumentElement[nodeName] == null)
            {
                XmlElement xmlELement = ConfigDoc.CreateElement(nodeName);
                XmlText textField = ConfigDoc.CreateTextNode(string.Empty);
                xmlELement.AppendChild(textField);
                ConfigDoc.DocumentElement.AppendChild(xmlELement);
            }

            return ConfigDoc.DocumentElement[nodeName].InnerText;
        }
    }
}
