class Line
{
    name: string;
    type: LineType;
    from: string;
    to: string;
    /**
     * Stores the path of the line in the form of an array of Waypoints, starting from index 0.
     */
    stops: Array<Waypoint>;
    notes: string;
    flagCircular: boolean;

    constructor(lineName: string, lineType: LineType, lineFrom: string, lineTo: string, lineStops: Array<Waypoint>, notes: string, isCircular: boolean)
    {
        this.name = lineName;
        this.type = lineType;
        this.from = lineFrom;
        this.to = lineTo;
        this.stops = lineStops;
        this.notes = notes;
        this.flagCircular = isCircular;
    }

    getName(): string
    {
        return this.name;
    }

    getStops(): Array<Waypoint>
    {
        return this.stops;
    }

    isCircular(): boolean
    {
        return this.flagCircular;
    }

    getHTMLShortID(): string
    {
        let shortID = this.name + " (";
        if (this.type == lineType_GMB)
        {
            shortID += "<font color='green'>" + this.type.getValue() + "</font>";
        }
        else
        {
            shortID += this.type.getValue();
        }
        shortID += ")";

        return shortID;
    }

    getHTMLLongID(): string
    {
        let htmlString = this.getHTMLShortID();
        htmlString += " ";
        htmlString += this.stops[0].getName();
        if (this.isCircular())
        {
            htmlString += " &#x21BA; ";
        }
        else
        {
            htmlString += " &#x2192; ";
        }
        htmlString += this.stops[this.stops.length - 1].getName();

        return htmlString;
    }

    getNotes(): string
    {
        return this.notes;
    }
}