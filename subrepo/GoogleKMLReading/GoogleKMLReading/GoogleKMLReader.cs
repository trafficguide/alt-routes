using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace GoogleKMLReading
{
    public class GoogleKMLReader
    {
        public XmlDocument KmlDocument { get; private set; }

        public GoogleKMLReader(string fileName)
        {
            KmlDocument = new XmlDocument();
            KmlDocument.Load(fileName);
            //XmlNodeList folders = KmlDocument.SelectNodes("kml/Document/Folder");
            XmlNodeList folders = KmlDocument.GetElementsByTagName("Folder");
            Console.WriteLine("Obtained count " + folders.Count);
            foreach (XmlNode folderNode in folders)
            {
                Console.WriteLine("Name: " + folderNode["name"].InnerText);

                var nsmgr = new XmlNamespaceManager(KmlDocument.NameTable);
                nsmgr.AddNamespace("a", "http://www.opengis.net/kml/2.2");

                XmlNodeList placemarks = folderNode.SelectNodes("a:Placemark", nsmgr);

                Console.WriteLine(folderNode.ChildNodes.Count + ", " + placemarks.Count);
                foreach (XmlNode placemarkNode in placemarks)
                {
                    Console.WriteLine("Placemark name: " + placemarkNode["name"].InnerText);
                    XmlNode polygonNode = placemarkNode["Polygon"];
                    if (polygonNode != null)
                    {
                        // This ensures we really are dealing with a polygon.
                        XmlNode coordinatesNode = polygonNode["outerBoundaryIs"]["LinearRing"]["coordinates"];
                        Console.WriteLine("Boundary points are: " + coordinatesNode.InnerText);
                    }
                }
            }
            Console.WriteLine(folders.ToString());
        }
    }
}
