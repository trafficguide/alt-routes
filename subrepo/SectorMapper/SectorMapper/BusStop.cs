using GeoConvertLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SectorMapper
{
    public class BusStop
    {
        public string DisplayedName { get; private set; }
        public GCS_WCS84 Position { get; private set; }
        public GeoSector Sector { get; internal set; }

        public BusStop(string name, GCS_WCS84 position)
        {
            DisplayedName = name;
            Position = position;
        }
    }
}
