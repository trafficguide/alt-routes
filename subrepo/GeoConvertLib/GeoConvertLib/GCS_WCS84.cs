﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeoConvertLib
{
    // Stored as "Decimal Degree"
    public class GCS_WCS84
    {
        public double Latitude { get; private set; }
        public double Longitude { get; private set; }

        public GCS_WCS84(double lat, double lng)
        {
            Latitude = lat;
            Longitude = lng;
        }

        public GCS_WCS84(): this(0, 0)
        {

        }

        public override string ToString()
        {
            return "Latitude: " + Latitude + "; Longitude: " + Longitude;
        }
    }
}
