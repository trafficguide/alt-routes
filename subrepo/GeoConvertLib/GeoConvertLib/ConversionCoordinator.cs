using GeoConvertLib.ConverterDialing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace GeoConvertLib
{
    public class ConversionCoordinator
    {
        private static HttpClient client = new HttpClient();

        List<ConverterDialer> dialers = new List<ConverterDialer>();

        private readonly int requestDelay;
        private int cumulativeRequests = 0;
        private int requestFrequency;

        public ConversionCoordinator(int requestsPerSecond)
        {
            requestDelay = (int) Math.Ceiling(1000d / requestsPerSecond);
            requestFrequency = requestsPerSecond;

            // Max is 10 dialers.
            // Initialize dialers
            for (int i = 0; i < 10; i++)
            {
                dialers.Add(new ConverterDialer(client));
            }
        }

        public ConversionCoordinator(): this (10)
        {

        }

        public List<GCS_WCS84> ConvertCoordinates(List<GCS_HK1980> original)
        {
            // "Circularly" tells each dialer to handle a conversion.

            // First initialize results; results should be empty;
            List<GCS_WCS84> results = new List<GCS_WCS84>(original.Count);
            for (int i = 0; i < original.Count; i++)
            {
                results.Add(null);
            }
            //Console.WriteLine("Generated result-list with count " + results.Count);

            // Then initialize mapper
            Dictionary<ConverterDialer, int> dialerMapping = new Dictionary<ConverterDialer, int>();

            // Then sets up variables
            int fromIndex = 0;
            int loopingIndex = 0;
            int completedRequestsCount = 0;

            while (true)
            {
                ConverterDialer currentDialer = dialers[loopingIndex];

                // Optimized: first retrieve the result, and then dial it.
                if (currentDialer.IsDone)
                {
                    // Retrieve result
                    GCS_WCS84 result = currentDialer.RetrieveResult();
                    // Store the result properly
                    results[dialerMapping[currentDialer]] = result;

                    //Console.WriteLine("Copying result from dialer #" + loopingIndex + " back to request #" + dialerMapping[currentDialer]);

                    // See if we can break
                    completedRequestsCount++;
                    if (completedRequestsCount == original.Count)
                    {
                        // All completed. Break;
                        break;
                    }
                }
                if (currentDialer.IsReady)
                {
                    // Check if we have anything left to be converted
                    if (fromIndex < original.Count)
                    {
                        // We still have entries to convert.

                        // Inject parameter and let it spin
                        currentDialer.DialForConversion(original[fromIndex]);
                        // Write down the mapping
                        dialerMapping[currentDialer] = fromIndex;

                        //Console.WriteLine("Dialing dialer #" + loopingIndex + " with request #" + fromIndex);

                        fromIndex++;
                    }
                }

                // Move to next index and wait a bit
                loopingIndex = (loopingIndex + 1) % dialers.Count;
                cumulativeRequests++;
                if (cumulativeRequests > requestFrequency)
                {
                    cumulativeRequests = 0;
                    Console.WriteLine("Processing " + completedRequestsCount + " of " + original.Count + ".");
                }
                //Console.WriteLine("Moving to dialer #" + loopingIndex);
                Thread.Sleep(requestDelay);
            }

            // Should be all done.
            Console.WriteLine("Processed " + original.Count + " of " + original.Count + ".");
            return results;
        }



        /// <summary>
        /// Converts a list of HK1980 coordinates to WCS84 coordinates through the HK Geodetic online API.
        /// <para/>
        /// This method is synchorous, and already handles the HTTP-level communication required for dialing the API.
        /// </summary>
        /// <param name="original"></param>
        /// <param name="requestFreq">Number of HTTP requests to make. Defaults to 10.</param>
        /// <returns></returns>
        public static List<GCS_WCS84> ConvertToWCS84_Sync(List<GCS_HK1980> original, int requestFreq = 10)
        {
            ConversionCoordinator coordinator = new ConversionCoordinator(requestFreq);
            return coordinator.ConvertCoordinates(original);
        }
    }
}
