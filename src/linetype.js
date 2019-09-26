var LineType = /** @class */ (function () {
    function LineType(key, value) {
        this.key = key;
        this.value = value;
    }
    LineType.prototype.getKey = function () {
        return this.key;
    };
    LineType.prototype.getValue = function () {
        return this.value;
    };
    return LineType;
}());
var lineType_KMB = new LineType("kmb", "九巴");
var lineType_CTB = new LineType("ctb", "城巴");
var lineType_NWFB = new LineType("nwfb", "新巴");
var lineType_GMB_HKI = new LineType("gmb", "綠巴");
var lineType_GMB_KL = new LineType("gmb", "綠巴");
var lineType_GMB_NT = new LineType("gmb", "綠巴");
var lineType_HARBOUR = new LineType("cht", "過海");
var lineType_WALK = new LineType("walk", "步行");
var lineType_TRAM = new LineType("tram", "電車");
var lineType_FERRY = new LineType("ferry", "渡輪/街渡");
