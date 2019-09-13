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
const lineType_GMB = new LineType("gmb", "綠巴");
const lineType_WALK = new LineType("walk", "步行");