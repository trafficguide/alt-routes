using GeoConvertLib;
using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator.Extractors
{
    public class BusStopExtractor
    {
        private string sourcePath;
        private XmlDocument sourceXML;
        public List<BusStop> LoadedBusStops { get; private set; }

        public BusStopExtractor(GeneratorConfig config)
        {
            sourcePath = config.FileLoc_BusStopXML;
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

        public void LoadBusStops()
        {
            LoadedBusStops = new List<BusStop>();

            // Begin read
            XmlNodeList stops = sourceXML.GetElementsByTagName("STOP");
            Console.WriteLine("Loaded " + stops.Count + " stops.");
            List<BusStop> loadedBusStops = new List<BusStop>();
            List<GCS_HK1980> rawPositions = new List<GCS_HK1980>();
            StringBuilder builder = new StringBuilder();
            Console.WriteLine("Extracting coordinates of bus stops...");
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
            Console.WriteLine("Extraction of coordinates completed.");

            // All bus stop loaded.
            // We will make use of the GeoConverter Dialer and convert everything to its WCS84 form.

            Console.WriteLine("Dialing to HK Geodetic API for converting the coordinates to GPS coordinates...");
            Console.WriteLine("Note: This operation requires Internet connection.");
            List<GCS_WCS84> convertedPoints = ConversionCoordinator.ConvertToWCS84_Sync(rawPositions, 100);
            // Each entry in the result should correspond to an entry in the input.
            for (int i = 0; i < convertedPoints.Count; i++)
            {
                loadedBusStops[i].Position_GPS = convertedPoints[i];
            }
            Console.WriteLine("Dialing and conversion complete.");

            LoadedBusStops = loadedBusStops;

            // We are skipping the export part for now.

            /*
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
            */
        }

        public BusStop GetBusStopWithID(int id)
        {
            foreach (BusStop stop in LoadedBusStops)
            {
                if (stop.StopID == id.ToString())
                {
                    return stop;
                }
            }

            return null;
        }
    }
}
