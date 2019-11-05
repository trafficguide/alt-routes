using GeoConvertLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusStopProcesser
{
    public class BusStop
    {
        public string StopID { get; private set; }
        public GCS_HK1980 Position_HK1980 { get; private set; } 
        public GCS_WCS84 Position_GPS { get; internal set; }

        public BusStop(string stopID, GCS_HK1980 gridCoords)
        {
            StopID = stopID;
            Position_HK1980 = gridCoords;
        }
    }
}
