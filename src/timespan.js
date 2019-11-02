var TimeSpan = /** @class */ (function () {
    /**
     * Constructs a TimeSpan object by telling it the raw value (in seconds) that it should contain.
     * @param rawValue
     */
    function TimeSpan(rawValue) {
        this.rawValue = rawValue;
    }
    /**
     * Constructs a TimeSpan object that represents the timespan as specified by the arguments.
     *
     * @param hours The hour of the timespan
     * @param minutes The minute of the timespan
     */
    TimeSpan.ConstructBy2Params = function (hours, minutes) {
        return new TimeSpan(hours * 3600 + minutes * 60);
    };
    TimeSpan.ConstructByDateObj = function (date) {
        return new TimeSpan(date.valueOf());
    };
    TimeSpan.prototype.getHour = function () {
        return this.rawValue / 3600;
    };
    TimeSpan.prototype.getMinutes = function () {
        return this.rawValue / 60;
    };
    /**
     * Irreversibly converts this TimeSpan object to a (native) Date object.
     *
     * Note that if the TimeSpan object is really denoting a timespan,
     * this conversion will make no sense
     * since the resultant Date object will be counting time from Epoch.
     */
    TimeSpan.prototype.toDate = function () {
        return new Date(this.rawValue);
    };
    /**
     * Adds this with another TimeSpan and returns the result.
     * Neither TimeSpan is modified.
     * @param other
     */
    TimeSpan.prototype.addWith = function (other) {
        return new TimeSpan(this.rawValue + other.rawValue);
    };
    return TimeSpan;
}());
