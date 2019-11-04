using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeoConvertLib
{
    /// <summary>
    /// The raw representation of the WCS84 JSON directly retrieved from the Converter.
    /// </summary>
    public class GCS_WCS84_Raw
    {
        public string wgsLat { get; set; }
        public string wgsLong { get; set; }

        public static explicit operator GCS_WCS84(GCS_WCS84_Raw instance)
        {
            double latitude;
            double longitude;

            if (!double.TryParse(instance.wgsLat, out latitude))
            {
                // Conversion failed.
                latitude = 0;
            }
            if (!double.TryParse(instance.wgsLong, out longitude))
            {
                // Conversion failed.
                longitude = 0;
            }

            return new GCS_WCS84(latitude, longitude);
        }
    }
}
