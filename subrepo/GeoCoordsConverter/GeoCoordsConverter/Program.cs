using GeoConvertLib;
using GeoConvertLib.ConverterDialing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace GeoCoordsConverter
{
    class Program
    {
        private static readonly HttpClient client = new HttpClient();
        private static bool flag = false;

        static void Main(string[] args)
        {
            FeatureTest();

            /*
            ConverterDialer dialer = new ConverterDialer(client);
            GCS_HK1980 original = new GCS_HK1980(817198, 835565);

            dialer.DialForConversion(original);
            while (!dialer.IsDone)
            {
                Thread.Sleep(500);
            }

            GCS_WCS84 result = dialer.RetrieveResult();
            Console.WriteLine(result.ToString());
            Console.WriteLine("Job complete.");
            */
            Console.ReadKey();
        }

        static void FeatureTest()
        {
            // Generate 100 identical coords for testing
            GCS_HK1980 original = new GCS_HK1980(817198, 835565);
            List<GCS_HK1980> coordinates = new List<GCS_HK1980>(100);
            for (int i = 0; i < 100; i++)
            {
                coordinates.Add(original);
            }

            List<GCS_WCS84> results = ConversionCoordinator.ConvertToWCS84_Sync(coordinates, 100);
            Console.WriteLine("Verify results:");
            foreach (GCS_WCS84 coordinate in results)
            {
                Console.WriteLine(coordinate.ToString());
            }

            Console.WriteLine("All done.");
        }

        static async void PrintResponse()
        {
            string target = "http://www.geodetic.gov.hk/transform/v2?inSys=hkgrid&outSys=wgsgeog&n=817198&e=835565&";
            var responseString = await client.GetStringAsync(target);
            Console.WriteLine(responseString);
            flag = true;
        }
    }
}
