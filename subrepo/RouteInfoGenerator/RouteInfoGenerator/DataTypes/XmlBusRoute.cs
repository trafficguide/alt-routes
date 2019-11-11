using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    public class XmlBusRoute
    {
        public BusRoute Route { get; private set; }
        public int RouteSeq { get; private set; }

        public XmlBusRoute(BusRoute route, int sequence)
        {
            Route = route;
            RouteSeq = sequence;
        }

        public RouteSequence GetRouteSequence()
        {
            if (Route == null)
            {
                return null;
            }
            if (Route.RouteSequences.ContainsKey(RouteSeq))
            {
                return Route.RouteSequences[RouteSeq];
            }
            return null;
        }

        public BusStop GetBestIntersectionWith(XmlBusRoute other)
        {
            int intersection = -1;
            foreach (int stopIDThere in other.GetRouteSequence().SequencePairing.Values)
            {
                if (GetRouteSequence().SequencePairing.Values.Contains(stopIDThere))
                {
                    intersection = stopIDThere;
                    break;
                }
            }
            if (intersection == -1)
            {
                return null;
            }

            foreach (BusStop stop in InfoGenerator.Instance.busStopExtractor.LoadedBusStops)
            {
                if (stop.StopID == intersection.ToString())
                {
                    return stop;
                }
            }

            return null;
        }
    }
}
