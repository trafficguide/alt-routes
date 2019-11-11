using RouteInfoGenerator.Extractors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    class XmlInterchangeInfo
    {
        bool fromIsWildcard;
        List<XmlBusRoute> fromRoutes;
        bool toIsWildcard;
        List<XmlBusRoute> toRoutes;
        bool interchangeIsWildcard;
        BusStop interchangeAt;
        InterchangeEffectType type;
        int paramForType;

        // First case is Shing Mun case, second case is Lion Rock case
        public bool InterchangeIsValid => (fromIsWildcard && !interchangeIsWildcard) || (!fromIsWildcard && interchangeIsWildcard);

        public List<TSInterchangeInfo> ConvertToTypeScriptEntries()
        {
            List<TSInterchangeInfo> generationResult = new List<TSInterchangeInfo>();
            if (InterchangeIsValid)
            {
                // Normal case, all explicit
                if (!fromIsWildcard && !interchangeIsWildcard)
                {
                    foreach (XmlBusRoute routeFrom in fromRoutes)
                    {
                        foreach (XmlBusRoute routeTo in toRoutes)
                        {
                            if (routeFrom == routeTo)
                            {
                                continue;
                            }

                            TSInterchangeInfo effect = new TSInterchangeInfo(routeFrom, interchangeAt, routeTo);
                            generationResult.Add(effect);
                        }
                    }
                }
                else if (fromIsWildcard)
                {
                    List<XmlBusRoute> fromRoutes = ObtainAllBusRoutesPassingBusStop(interchangeAt);
                    foreach (XmlBusRoute routeFrom in fromRoutes)
                    {
                        foreach (XmlBusRoute routeTo in toRoutes)
                        {
                            if (routeFrom == routeTo)
                            {
                                continue;
                            }

                            TSInterchangeInfo effect = new TSInterchangeInfo(routeFrom, interchangeAt, routeTo);
                            generationResult.Add(effect);
                        }
                    }
                }
                else
                {
                    // Interchange anywhere with intersection... that is the most difficult.
                    foreach (XmlBusRoute routeFrom in fromRoutes)
                    {
                        foreach (XmlBusRoute routeTo in toRoutes)
                        {
                            if (routeFrom == routeTo)
                            {
                                continue;
                            }

                            BusStop intersection = routeFrom.GetBestIntersectionWith(routeTo);
                            if (intersection != null)
                            {
                                TSInterchangeInfo effect = new TSInterchangeInfo(routeFrom, intersection, routeTo);
                                generationResult.Add(effect);
                            }
                        }
                    }
                }
            }

            // Everything should be done.
            // Add in the effects
            foreach (TSInterchangeInfo info in generationResult)
            {
                info.SetInterchangeEffects(type, paramForType);
            }
            return generationResult;
        }

        private List<XmlBusRoute> ObtainAllBusRoutesPassingBusStop(BusStop stop)
        {
            List<XmlBusRoute> listPassing = new List<XmlBusRoute>();
            foreach (XmlBusRoute route in RouteStopExtractor.LoadedBusRoutes)
            {
                RouteSequence sequence = route.GetRouteSequence();
                if (sequence.SequencePairing.Values.Contains(int.Parse(stop.StopID)))
                {
                    listPassing.Add(route);
                }
            }

            return listPassing;
        }
    }
}
