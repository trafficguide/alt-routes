using GeoConvertLib;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace BusStopProcesser
{
    class Program
    {
        static XmlDocument rawBusData;

        static void Main(string[] args)
        {
            LoadAndProcessXML();
            VerifyXML();
            ExportXML();

            Console.WriteLine("All done.");
            Console.ReadKey();
        }

        static void LoadAndProcessXML()
        {
            Console.WriteLine("File name?");
            //string filename = Console.ReadLine();
            string filename = @"C:\Users\Vincent Wong\Desktop\ProcessingAnalysis\BUSSTOP.xml";
            Console.WriteLine(filename);
            rawBusData = new XmlDocument();
            rawBusData.Load(filename);

            // Also load schema
            Console.WriteLine("Schema?");
            //string schemaLoc = Console.ReadLine();
            /*
            var nsmgr = new XmlNamespaceManager(KmlDocument.NameTable);
            nsmgr.
            */

            // Begin read
            XmlNodeList stops = rawBusData.GetElementsByTagName("STOP");
            Console.WriteLine("Loaded " + stops.Count + " stops.");
            List<BusStop> loadedBusStops = new List<BusStop>();
            List<GCS_HK1980> rawPositions = new List<GCS_HK1980>();
            StringBuilder builder = new StringBuilder();
            foreach (XmlNode stopNode in stops)
            {
                double northing = double.Parse(stopNode["Y"].InnerText);
                double easting = double.Parse(stopNode["X"].InnerText);
                
                GCS_HK1980 gridPosition = new GCS_HK1980(northing, easting);
                BusStop stop = new BusStop(stopNode["STOP_ID"].InnerText, gridPosition);
                loadedBusStops.Add(stop);
                rawPositions.Add(gridPosition);
                /*
                builder.AppendLine("Reading node #" + );
                builder.AppendLine("It is located at (X, Y) = (" + stopNode["X"].InnerText + ", " + stopNode["Y"].InnerText + ")");
                */
            }

            // All bus stop loaded.
            // We will make use of the GeoConverter Dialer and convert everything to its WCS84 form.

            List<GCS_WCS84> convertedPoints = ConversionCoordinator.ConvertToWCS84_Sync(rawPositions, 100);
            // Each entry in the result should correspond to an entry in the input.
            for (int i = 0; i < convertedPoints.Count; i++)
            {
                loadedBusStops[i].Position_GPS = convertedPoints[i];
            }

            // Should be complete.
            // Now write it back.
            for (int i = 0; i < stops.Count; i++)
            {
                XmlNode stopNode = stops[i];

                // Directly write to node

                // Latitude part
                XmlText latitudeField = rawBusData.CreateTextNode(loadedBusStops[i].Position_GPS.Latitude.ToString());
                XmlElement latitudeTag = rawBusData.CreateElement(string.Empty, "LATITUDE", string.Empty);
                latitudeTag.AppendChild(latitudeField);
                stopNode.AppendChild(latitudeTag);

                // Longitude part
                XmlText longitudeField = rawBusData.CreateTextNode(loadedBusStops[i].Position_GPS.Longitude.ToString());
                XmlElement longitudeTag = rawBusData.CreateElement(string.Empty, "LONGITUDE", string.Empty);
                longitudeTag.AppendChild(longitudeField);
                stopNode.AppendChild(longitudeTag);
            }

            // All data read.
            // Let's export the XML.
            string exportFileName = Path.GetDirectoryName(filename) + @"\" + Path.GetFileNameWithoutExtension(filename) + "_Processed.xml";
            rawBusData.Save(exportFileName);
        }

        static void VerifyXML()
        {

        }

        static void ExportXML()
        {

        }
    }
}
