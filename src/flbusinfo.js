/**
 * Shortened form of "First-Last Bus Info"
 */
var FLBusInfo = /** @class */ (function () {
    function FLBusInfo(line, wdBegin, wdEnd, stBegin, stEnd, hlBegin, hlEnd) {
        this.line = line;
        this.weekdayBegin = wdBegin;
        this.weekdayEnd = wdEnd;
        this.saturdayBegin = stBegin;
        this.saturdayEnd = stEnd;
        this.holidayBegin = hlBegin;
        this.holidayEnd = hlEnd;
    }
    return FLBusInfo;
}());
