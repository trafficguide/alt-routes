class LineType
{
    key: string;
    value: string;

    constructor(key: string, value: string)
    {
        this.key = key;
        this.value = value;
    }

    getKey(): string
    {
        return this.key;
    }

    getValue(): string
    {
        return this.value;
    }
}

const lineType_KMB = new LineType("kmb", "九巴");
const lineType_CTB = new LineType("ctb", "城巴");
const lineType_NWFB = new LineType("nwfb", "新巴");
const lineType_LWB = new LineType("lwb", "龍運");
const lineType_NLB = new LineType("nlb", "新大嶼");
const lineType_GMB_HKI = new LineType("gmb", "綠巴");
const lineType_GMB_KL = new LineType("gmb", "綠巴");
const lineType_GMB_NT = new LineType("gmb", "綠巴");
const lineType_HARBOUR = new LineType("cht", "過海");
const lineType_WALK = new LineType("walk", "步行");
const lineType_TRAM = new LineType("tram", "電車");
const lineType_FERRY = new LineType("ferry", "渡輪/街渡");