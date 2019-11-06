using RouteInfoGenerator.Generators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace RouteInfoGenerator
{
    public class InfoGenerator
    {
        GeneratorConfig config;
        KmlPolygonExtractor polygonExtractor;
        BusStopExtractor busStopExtractor;
        RouteStopExtractor routeStopExtractor;
        public bool IsValid { get; private set; } = false;

        public InfoGenerator(GeneratorConfig config)
        {
            this.config = config;
            PreloadAndVerify();
        }

        private void PreloadAndVerify()
        {
            IsValid = true;

            polygonExtractor = new KmlPolygonExtractor(config);
            try
            {
                polygonExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("KML File Component pre-check failed: " + x.Message);
            }

            busStopExtractor = new BusStopExtractor(config);
            try
            {
                busStopExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Bus Stop Component pre-check failed: " + x.Message);
            }

            routeStopExtractor = new RouteStopExtractor(config);
            try
            {
                routeStopExtractor.TryLoad();
            }
            catch (Exception x)
            {
                IsValid = false;
                Console.WriteLine("Route-stop Component pre-check failed: " + x.Message);
            }
        }

        public void GenerateFiles()
        {
            if (!IsValid)
            {
                return;
            }
            
            Console.WriteLine("File generation begun.");
            Console.WriteLine(">>> KML Geo-Polygon Extractor <<<");
            polygonExtractor.LoadPolygons();
            Console.WriteLine(">>> Bus Stop XML Extractor <<<");
            busStopExtractor.LoadBusStops();
            Console.WriteLine(">>> Route-stop XML Extractor <<<");
            routeStopExtractor.LoadRouteStops();
        }
    }
}
