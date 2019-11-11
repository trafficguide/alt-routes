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
    public class KmlPolygonExtractor
    {
        private string sourcePath;
        private XmlDocument sourceKML;
        public List<GeoPolygon> Results { get; private set; }

        public KmlPolygonExtractor(GeneratorConfig config)
        {
            sourcePath = config.FileLoc_PolygonKML;
            sourceKML = new XmlDocument();
        }

        public void TryLoad()
        {
            try
            {
                sourceKML.Load(sourcePath);
            }
            catch (Exception x)
            {
                throw x;
            }
        }

        public void LoadPolygons()
        {
            Results = new List<GeoPolygon>();
            Console.WriteLine("Loading polygons...");

            XmlNodeList folders = sourceKML.GetElementsByTagName("Folder");
            Console.WriteLine("Detected " + folders.Count + " possible geo-polygon groups. Extracting geo-polygons...");

            // Set up result list.
            List<GeoPolygon> extractedPolygons = new List<GeoPolygon>();

            // Set up namespace managers
            var namespaceMgr = new XmlNamespaceManager(sourceKML.NameTable);
            namespaceMgr.AddNamespace("a", "http://www.opengis.net/kml/2.2");
            foreach (XmlNode folderNode in folders)
            {
                Console.WriteLine("Processing polygons under the group " + folderNode["name"].InnerText);

                XmlNodeList placemarks = folderNode.SelectNodes("a:Placemark", namespaceMgr);
                foreach (XmlNode placemarkNode in placemarks)
                {
                    // Check if it is really a polygon.
                    XmlNode polygonNode = placemarkNode["Polygon"];
                    if (polygonNode != null)
                    {
                        // This ensures we really are dealing with a polygon.
                        string polygonName = placemarkNode["name"].InnerText;
                        string polygonChineseName = "";
                        if (placemarkNode["description"] != null)
                        {
                            polygonChineseName = placemarkNode["description"].InnerText;
                        }
                        else
                        {
                            Console.WriteLine("[Warning] Geo-polygon " + polygonName + " has no description/Chinese name.");
                        }
                        GeoPolygon polygon = new GeoPolygon(polygonName, polygonChineseName);
                        XmlNode coordinatesNode = polygonNode["outerBoundaryIs"]["LinearRing"]["coordinates"];

                        // They are stored rather strangely: longitude, latitude, height (unused)
                        List<GCS_WCS84> boundaryPoints = new List<GCS_WCS84>();
                        string[] rawPoints = coordinatesNode.InnerText.Split('\n');
                        foreach (string rawPoint in rawPoints)
                        {
                            // Further split it
                            string[] rawCoords = rawPoint.Trim().Split(',');
                            if (rawCoords.Length == 1)
                            {
                                // probably the first one, skipping it
                                continue;
                            }
                            double latitude = double.Parse(rawCoords[1]);
                            double longitude = double.Parse(rawCoords[0]);
                            GCS_WCS84 coordinates = new GCS_WCS84(latitude, longitude);
                            boundaryPoints.Add(coordinates);
                        }
                        polygon.SetBoundary(boundaryPoints);

                        extractedPolygons.Add(polygon);
                    }
                }
            }

            // Results.
            Results = extractedPolygons;
            Console.WriteLine("Successfully extracted " + extractedPolygons.Count + " geo-polygons.");
        }
    }
}
