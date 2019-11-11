using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    public class TS_BusRouteEntry
    {
        public XmlBusRoute BusRoute { get; private set; }
        public List<GeoPolygon> PassingPolygons { get; private set; }

        public TS_BusRouteEntry(XmlBusRoute route)
        {
            BusRoute = route;
            GeneratePassingPolygons();
        }

        private void GeneratePassingPolygons()
        {
            PassingPolygons = BusRoute.Route.RouteSequences[BusRoute.RouteSeq].GeneratePassingSector();
        }

        public string GenerateRouteIdentifier()
        {
            const string routePrefix = "Route";
            string routeIDConverted = BusRoute.Route.RouteID.PadLeft(5, '0');
            string routeSequence = BusRoute.RouteSeq.ToString();
            string routeCompanyCode = BusRoute.Route.CompanyCode;
            return routePrefix + routeIDConverted + "_" + routeSequence + "_" + routeCompanyCode + "_" + BusRoute.Route.RouteName; 
        }

        private string GenerateLineType()
        {
            return "lineType_" + BusRoute.Route.CompanyCode;
        }

        private string GeneratePassingPolygonArray()
        {
            StringBuilder builder = new StringBuilder();
            // Start of array
            builder.Append("[");
            // main content
            List<string> polygonIDs = new List<string>();
            //Console.WriteLine(PassingPolygons.Count);
            foreach (GeoPolygon polygon in PassingPolygons)
            {
                // Should swap to variable name later
                polygonIDs.Add(polygon.VariableName);
            }
            builder.Append(string.Join(", ", polygonIDs.ToArray()));
            // End of array
            builder.Append("]");

            return builder.ToString();
        }

        public string ExportAsTypeScript()
        {
            BusRoute Route = BusRoute.Route;
            StringBuilder builder = new StringBuilder("const ");
            builder.Append(GenerateRouteIdentifier());
            builder.Append(" = new Line(");
            // 1st param: line name
            builder.Append("\"");
            builder.Append(Route.RouteName);
            builder.Append("\", ");
            // 2nd param: lineType
            builder.Append(GenerateLineType());
            builder.Append(", ");
            // 3rd and 4th param: from and to name
            if (BusRoute.RouteSeq == 1)
            {
                // Standard form
                builder.Append("\"");
                builder.Append(Route.NameOfFirstStop);
                builder.Append("\", \"");
                builder.Append(Route.NameOfLastStop);
                builder.Append("\", ");
            }
            else
            {
                // Inverted form
                builder.Append("\"");
                builder.Append(Route.NameOfLastStop);
                builder.Append("\", \"");
                builder.Append(Route.NameOfFirstStop);
                builder.Append("\", ");
            }
            // 5th param: array of passing sectors/waypoints
            builder.Append(GeneratePassingPolygonArray());
            builder.Append(", ");
            // 6th param: frequency
            // TODO
            // Closing the constructor
            builder.Append(")");
            // Appending function calls
            if (Route.IsCircular)
            {
                builder.Append(".markCircular()");
            }
            if (Route.IsCommuter)
            {
                builder.Append(".markCommuter()");
            }
            if (Route.IsNightOnly)
            {
                builder.Append(".markNightOnly()");
            }
            // TODO
            // Close statement with semicolon
            builder.Append(";");

            // All generated
            return builder.ToString();
        }
    }
}
