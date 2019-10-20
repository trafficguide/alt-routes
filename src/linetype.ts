class LineType
{
    key: string;
    value: string;
    colorClass: string;

    /**
     * Defines a new line type.
     * @param key Internal key of this line type.
     * @param value Readable string of this line type, e.g., name of bus company
     * @param colorClass The "color class" of this line type, used to decorate the line name in the pathfinder search results. Must use with CSS. Defaults to "black".
     */
    constructor(key: string, value: string, colorClass: string = "black")
    {
        this.key = key;
        this.value = value;
        this.colorClass = colorClass;
    }

    getKey(): string
    {
        return this.key;
    }

    getValue(): string
    {
        return this.value;
    }

    getColorClass()
    {
        return this.colorClass;
    }
}

const lineType_KMB = new LineType("kmb", "九巴", "black");
const lineType_CTB = new LineType("ctb", "城巴", "coral");
const lineType_NWFB = new LineType("nwfb", "新巴", "mediumseagreen");
const lineType_LWB = new LineType("lwb", "龍運", "orange");
const lineType_NLB = new LineType("nlb", "新大嶼");
const lineType_GMB_HKI = new LineType("gmb", "綠巴", "green");
const lineType_GMB_KL = new LineType("gmb", "綠巴", "green");
const lineType_GMB_NT = new LineType("gmb", "綠巴", "green");
const lineType_HARBOUR = new LineType("cht", "過海", "purple");
const lineType_WALK = new LineType("walk", "步行");
const lineType_TRAM = new LineType("tram", "電車", "darkslategrey");
const lineType_FERRY = new LineType("ferry", "渡輪/街渡", "blue");