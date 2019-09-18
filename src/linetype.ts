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
const lineType_GMB_HKI = new LineType("gmb", "綠巴");
const lineType_GMB_KL = new LineType("gmb", "綠巴");
const lineType_GMB_NT = new LineType("gmb", "綠巴");
const lineType_HARBOUR = new LineType("cht", "過海");
const lineType_WALK = new LineType("walk", "步行");