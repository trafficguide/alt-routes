var LineType = /** @class */ (function () {
    /**
     * Defines a new line type.
     * @param key Internal key of this line type.
     * @param value Readable string of this line type, e.g., name of bus company
     * @param colorClass The "color class" of this line type, used to decorate the line name in the pathfinder search results. Must use with CSS. Defaults to "black".
     */
    function LineType(key, value, colorClass) {
        if (colorClass === void 0) { colorClass = "black"; }
        this.key = key;
        this.value = value;
        this.colorClass = colorClass;
    }
    LineType.prototype.getKey = function () {
        return this.key;
    };
    LineType.prototype.getValue = function () {
        return this.value;
    };
    LineType.prototype.getColorClass = function () {
        return this.colorClass;
    };
    return LineType;
}());
var lineType_KMB = new LineType("kmb", "九巴", "black");
var lineType_CTB = new LineType("ctb", "城巴", "coral");
var lineType_NWFB = new LineType("nwfb", "新巴", "purple");
var lineType_LWB = new LineType("lwb", "龍運", "orange");
var lineType_NLB = new LineType("nlb", "新大嶼");
var lineType_GMB_HKI = new LineType("gmb", "綠巴", "green");
var lineType_GMB_KL = new LineType("gmb", "綠巴", "green");
var lineType_GMB_NT = new LineType("gmb", "綠巴", "green");
var lineType_HARBOUR = new LineType("cht", "過海", "blue");
var lineType_WALK = new LineType("walk", "步行");
var lineType_TRAM = new LineType("tram", "電車", "darkslategrey");
var lineType_FERRY = new LineType("ferry", "渡輪/街渡", "darkblue");
