var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FerryLine = /** @class */ (function (_super) {
    __extends(FerryLine, _super);
    function FerryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.travelCost_FerryOverride = -1;
        _this.company = "";
        return _this;
    }
    FerryLine.prototype.markFerryTravelCost = function (travelCost) {
        this.travelCost_FerryOverride = travelCost;
        return this;
    };
    FerryLine.prototype.markCompany = function (companycode) {
        this.company = companycode;
        return this;
    };
    FerryLine.prototype.calculateConnectionCost = function () {
        return this.travelCost_FerryOverride;
    };
    FerryLine.prototype.calculateURL = function () {
        if (this.company == "starferry") {
            return "http://www.starferry.com.hk/tc/service";
        }
        else {
            return "";
        }
    };
    return FerryLine;
}(Line));
