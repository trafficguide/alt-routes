using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeoConvertLib
{
    public class GCS_HK1980
    {
        public double Northing { get; private set; }
        public double Easting { get; private set; }

        public GCS_HK1980(double north, double east)
        {
            Northing = north;
            Easting = east;
        }

        public GCS_HK1980(): this(0, 0)
        {

        }
    }
}
