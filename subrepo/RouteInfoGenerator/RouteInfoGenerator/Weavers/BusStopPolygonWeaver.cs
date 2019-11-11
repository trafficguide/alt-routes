using RouteInfoGenerator.DataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.Weavers
{
    public class BusStopPolygonWeaver
    {
        public static void WeavePolygonsIntoBusStops(List<BusStop> busStops, List<GeoPolygon> polygons)
        {
            Console.WriteLine("Weaving geo-polygons into bus stops...");
            int orphanBusStops = 0;
            foreach (BusStop busStop in busStops)
            {
                bool assignmentSuccessful = false;

                foreach (GeoPolygon polygon in polygons)
                {
                    if (polygon.PointIsInSector(busStop.Position_GPS))
                    {
                        //Console.WriteLine("Assigning bus stop to " + polygon.DisplayedName);
                        assignmentSuccessful = true;
                        busStop.PolygonOf = polygon;
                        break;
                    }
                }

                if (!assignmentSuccessful)
                {
                    orphanBusStops++;
                }
            }

            if (orphanBusStops > 0)
            {
                Console.WriteLine("[Warning] There are " + orphanBusStops + " orphan bus stops not belonging to any geo-polygon.");
            }
            Console.WriteLine("Weaving complete.");
        }
    }
}
