using RouteInfoGenerator.DataTypes;
using RouteInfoGenerator.Extractors;
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
        public static List<TS_BusRouteEntry> GenerateTypeScriptBusRouteObjects()
        {
            Console.WriteLine("Generating TypeScript bus route objects in memory...");
            List<XmlBusRoute> loadedBusRoutes = RouteStopExtractor.LoadedBusRoutes;
            List<TS_BusRouteEntry> tsEntries = new List<TS_BusRouteEntry>();
            foreach (XmlBusRoute route in loadedBusRoutes)
            {
                tsEntries.Add(new TS_BusRouteEntry(route));
            }
            Console.WriteLine("A total of " + tsEntries.Count + " TypeScript bus route objects has been generated.");
            return tsEntries;
        }

        public static void ExportTSEntriesToFile(List<TS_BusRouteEntry> entries, string location)
        {
            Console.WriteLine("Exporting TypeScript memory objects to " + location + " ...");
            List<string> typescriptLines = new List<string>();
            List<string> listIdentifiers = new List<string>();
            foreach (TS_BusRouteEntry entry in entries)
            {
                typescriptLines.Add(entry.ExportAsTypeScript());
                listIdentifiers.Add(entry.GenerateRouteIdentifier());
            }
            //File.AppendAllLines(location, typescriptLines.AsEnumerable());

            // Prepare the array.
            string arrayDefinitionHead = "const AllBusRoutes_test = [";
            string arrayDefinitionTail = "];";
            string arrayContent = string.Join(", ", listIdentifiers);
            string arrayDef = arrayDefinitionHead + arrayContent + arrayDefinitionTail;

            // Prepare to print to file.
            string typeScriptFile = string.Join("\n", typescriptLines);
            typeScriptFile += "\n" + arrayDef;
            File.AppendAllText(location, typeScriptFile);

            Console.WriteLine("Export complete.");
        }
    }
}
