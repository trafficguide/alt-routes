/**
 * Shortened form of "First-Last Bus Info"
 */
class FLBusInfo
{
    line: Line;
    weekdayBegin: TimeSpan;
    weekdayEnd: TimeSpan;
    saturdayBegin: TimeSpan;
    saturdayEnd: TimeSpan;
    holidayBegin: TimeSpan;
    holidayEnd: TimeSpan;

    constructor(line: Line, wdBegin: TimeSpan, wdEnd: TimeSpan, stBegin: TimeSpan, stEnd: TimeSpan, hlBegin: TimeSpan, hlEnd: TimeSpan)
    {
        this.line = line;
        this.weekdayBegin = wdBegin;
        this.weekdayEnd = wdEnd;
        this.saturdayBegin = stBegin;
        this.saturdayEnd = stEnd;
        this.holidayBegin = hlBegin;
        this.holidayEnd = hlEnd;
    }
}