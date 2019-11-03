using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace GeoConvertLib.ConverterDialing
{
    public class ConverterDialer
    {
        private enum DialState
        {
            READY,
            BUSY,
            DONE
        }

        private HttpClient Client { get; set; }

        private DialState state = DialState.READY;

        public bool IsReady => state == DialState.READY;

        public bool IsDone => state == DialState.DONE;

        private GCS_WCS84 Result { get; set; }

        public ConverterDialer(HttpClient client)
        {
            Client = client;
        }

        /// <summary>
        /// Instructs this dialer to convert a single HK1980 coords to a WCS84 coords.
        /// </summary>
        /// <param name="incoming"></param>
        public async void DialForConversion(GCS_HK1980 incoming)
        {
            if (!IsReady)
            {
                throw new InvalidOperationException("Dialer is still being used.");
            }

            state = DialState.BUSY;

            const string target = "http://www.geodetic.gov.hk/transform/v2?";
            const string geoStdParams = "inSys=hkgrid&outSys=wgsgeog&";
            string northingParam = "n=" + incoming.Northing + "&";
            string eastingParam = "e=" + incoming.Easting + "&";
            string fullTarget = target + geoStdParams + northingParam + eastingParam;
            string responseString = await Client.GetStringAsync(fullTarget);
            GCS_WCS84_Raw rawObject = JsonConvert.DeserializeObject<GCS_WCS84_Raw>(responseString);
            Result = (GCS_WCS84) rawObject;

            state = DialState.DONE;
        }

        /// <summary>
        /// Formally retrieves the result of the conversion, and releases this dialer for other use.
        /// </summary>
        /// <returns></returns>
        public GCS_WCS84 RetrieveResult()
        {
            state = DialState.READY;
            return Result;
        }
    }
}
