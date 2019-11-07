using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    public class BusRoute
    {
        public string RouteID { get; private set; }
        public string RouteName { get; private set; }
        public string NameOfFirstStop { get; private set; }
        public string NameOfLastStop { get; private set; }
        // The First -> Last stop always applies to RouteSequence = 1
        // For RouteSequence = 2, you simply have to invert the vector to become Last -> First
        public Dictionary<int, RouteSequence> RouteSequences { get; private set; }
        public string ServiceMode { get; internal set; }

        public string CompanyCode { get; private set; }
        public bool IsCircular => NameOfLastStop.Contains("(循環線)");
        public string InternalUID => RouteName + "_" + CompanyCode;
        public bool IsCommuter { get; private set; }
        public bool IsNightOnly { get; private set; }

        public int NextSequenceID => RouteSequences.Count + 1;

        public BusRoute(string routeID)
        {
            RouteID = routeID;
            RouteSequences = new Dictionary<int, RouteSequence>();
        }

        public void InputCompanyCode(string code)
        {
            // The company code is to categorize lines according to their bus operators.
            // It will be useful after we filter out the cross-harbour lines.
            CompanyCode = code;
        }

        public void InputMoreDetails(string routeName, string startName, string endName)
        {
            RouteName = routeName;
            NameOfFirstStop = startName;
            NameOfLastStop = endName;
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

        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("Route ID: #");
            builder.AppendLine(RouteID);
            builder.Append("Route name: ");
            builder.AppendLine(RouteName);
            builder.Append("Operated by: ");
            builder.AppendLine(CompanyCode);
            builder.Append("From ");
            builder.Append(NameOfFirstStop);
            builder.Append(" to ");
            builder.AppendLine(NameOfLastStop);
            return builder.ToString();
        }

        public void MarkCrossHarbour()
        {
            // Instant override
            CompanyCode = "XHT";
        }

        public void MarkCommuter()
        {
            IsCommuter = true;
        }

        public void MarkNightOnly()
        {
            IsNightOnly = true;
        }
    }
}
