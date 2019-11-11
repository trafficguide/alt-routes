using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.Weavers
{
    public class BusStopRouteStopWeaver
    {
        public static void WeaveRouteStopIntoBusStop(InfoGenerator generator)
        {
            Console.WriteLine("Extracting bus stop names from Route-Stop Component...");
            Dictionary<int, string> stopNameMapping = generator.routeStopExtractor.PrepareStopNames();
            Console.WriteLine("Extraction complete.");
            Console.WriteLine("Assigning stop names to bus stops...");
            foreach (BusStop busStop in generator.busStopExtractor.LoadedBusStops)
            {
                int stopID = int.Parse(busStop.StopID);
                if (stopNameMapping.ContainsKey(stopID))
                {
                    busStop.StopName = stopNameMapping[stopID];
                }
            }
            Console.WriteLine("Assignment complete.");
        }
    }
}
