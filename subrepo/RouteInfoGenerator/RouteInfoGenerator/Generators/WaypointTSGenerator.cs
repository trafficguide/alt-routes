using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.Generators
{
    class WaypointTSGenerator
    {
        public static void GenerateTypeScriptWaypoints(List<GeoPolygon> polygons, string location)
        {
            Console.WriteLine("Generating waypoint TypeScript file...");
            List<string> results = new List<string>();
            foreach (GeoPolygon polygon in polygons)
            {
                string polygonGenerated = polygon.ExportAsTypeScriptWaypoint();
                if (!polygonGenerated.Contains("MTR"))
                {
                    // MTR ones are pretty much static, and so does not require further generation.
                    results.Add(polygon.ExportAsTypeScriptWaypoint());
                }
            }
            File.AppendAllLines(location, results);
            Console.WriteLine("Waypoint TypeScript file generated.");
        }
    }
}
