using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SectorMapper
{
    class SectorNetwork
    {
        List<GeoSector> sectors = new List<GeoSector>();

        public void AllocateSectorToBusStop(BusStop stop)
        {
            stop.Sector = null;
            foreach (GeoSector sector in sectors)
            {
                if (sector.PointIsInSector(stop.Position))
                {
                    stop.Sector = sector;
                    return;
                }
            }
        }
    }
}
