using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusLineGen
{
    class BusRoute
    {
        public string RouteID { get; private set; }
        public Dictionary<int, RouteSequence> RouteSequences { get; private set; }

        public int NextSequenceID => RouteSequences.Count + 1;

        public BusRoute(string routeID)
        {
            RouteID = routeID;
            RouteSequences = new Dictionary<int, RouteSequence>();
        }

        public void AddRouteInfo(int routeSeq, int stopSeq, int stopID)
        {
            // Add or find sequence
            if (!RouteSequences.ContainsKey(routeSeq))
            {
                RouteSequences[routeSeq] = new RouteSequence(routeSeq);
            }
            RouteSequence sequence = RouteSequences[routeSeq];

            sequence.AddSequencePairing(stopSeq, stopID);
        }
    }
}
