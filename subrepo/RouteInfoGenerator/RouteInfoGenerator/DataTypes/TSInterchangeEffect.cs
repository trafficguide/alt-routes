using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator.DataTypes
{
    class TSInterchangeInfo
    {
        XmlBusRoute from;
        XmlBusRoute to;
        BusStop at;
        InterchangeEffectType type;
        int paramForType;

        public TSInterchangeInfo(XmlBusRoute from, BusStop at, XmlBusRoute to)
        {
            this.from = from;
            this.at = at;
            this.to = to;
        }

        public void SetInterchangeEffects(InterchangeEffectType type, int param)
        {
            this.type = type;
            paramForType = param;
        }

        public string ExportAsTypeScript()
        {
            // 
            return "";
        }
    }
}
