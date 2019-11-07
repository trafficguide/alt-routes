using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.Generators
{
    class BusRouteTSGenerator
    {
        public static List<TS_BusRouteEntry> GenerateTypeScriptBusRouteObjects(List<BusRoute> busRoutes)
        {
            Console.WriteLine("Generating TypeScript bus route objects in memory...");
            List<TS_BusRouteEntry> tsEntries = new List<TS_BusRouteEntry>();
            foreach (BusRoute route in busRoutes)
            {
                foreach (int sequenceKey in route.RouteSequences.Keys)
                {
                    tsEntries.Add(new TS_BusRouteEntry(route, sequenceKey));
                }
            }
            Console.WriteLine("A total of " + tsEntries.Count + " TypeScript bus route objects has been generated.");
            return tsEntries;
        }

        public static void ExportTSEntriesToFile(List<TS_BusRouteEntry> entries, string location)
        {
            Console.WriteLine("Exporting TypeScript memory objects to " + location + " ...");
            List<string> typescriptLines = new List<string>();
            foreach (TS_BusRouteEntry entry in entries)
            {
                typescriptLines.Add(entry.ExportAsTypeScript());
            }
            File.AppendAllLines(location, typescriptLines.AsEnumerable());
            Console.WriteLine("Export complete.");
        }
    }
}
