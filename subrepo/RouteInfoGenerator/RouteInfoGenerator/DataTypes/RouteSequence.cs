using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    public class RouteSequence
    {
        public int SequenceID { get; private set; }
        public Dictionary<int, int> SequencePairing { get; private set; }

        public RouteSequence(int seqID)
        {
            SequenceID = seqID;
            SequencePairing = new Dictionary<int, int>();
        }

        public void AddSequencePairing(int sequence, int stopID)
        {
            SequencePairing[sequence] = stopID;
        }

        public List<int> FinalizeAndGenerateStopSequence()
        {
            List<int> sortedStops = new List<int>(SequencePairing.Count);
            // First initialize the result list
            for (int i = 0; i < SequencePairing.Count; i++)
            {
                sortedStops.Add(0);
            }
            // Then do a direct adding.
            foreach (int key in SequencePairing.Keys)
            {
                sortedStops[key - 1] = SequencePairing[key];
            }
            return sortedStops;
        }

        public string GenerateStopSequenceString()
        {
            List<int> sortedStops = FinalizeAndGenerateStopSequence();
            return string.Join(",", sortedStops.ToArray());
        }
    }
}
