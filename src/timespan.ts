class TimeSpan
{
    rawValue: number;

    /**
     * Constructs a TimeSpan object by telling it the raw value (in seconds) that it should contain.
     * @param rawValue 
     */
    constructor(rawValue: number)
    {
        this.rawValue = rawValue;
    }

    /**
     * Constructs a TimeSpan object that represents the timespan as specified by the arguments.
     * 
     * @param hours The hour of the timespan
     * @param minutes The minute of the timespan
     */
    static ConstructBy2Params(hours: number, minutes: number): TimeSpan
    {
        return new TimeSpan(hours * 3600 + minutes * 60);
    }

    static ConstructByDateObj(date: Date): TimeSpan
    {
        return new TimeSpan(date.valueOf());
    }

    getHour(): number
    {
        return this.rawValue / 3600;
    }

    getMinutes(): number
    {
        return this.rawValue / 60;
    }

    /**
     * Irreversibly converts this TimeSpan object to a (native) Date object.
     * 
     * Note that if the TimeSpan object is really denoting a timespan,
     * this conversion will make no sense
     * since the resultant Date object will be counting time from Epoch.
     */
    toDate(): Date
    {
        return new Date(this.rawValue);
    }

    /**
     * Adds this with another TimeSpan and returns the result.
     * Neither TimeSpan is modified.
     * @param other 
     */
    addWith(other: TimeSpan): TimeSpan
    {
        return new TimeSpan(this.rawValue + other.rawValue);
    }
}