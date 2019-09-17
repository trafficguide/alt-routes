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
    /**
     * Stores the URL to some webpage that can describe the line in more detail.
     */
    url: string = "";
    notes: string = "";
    flagCircular: boolean = false;

    constructor(lineName: string, lineType: LineType, lineFrom: string, lineTo: string, lineStops: Array<Waypoint>)
    {
        this.name = lineName;
        this.type = lineType;
        this.from = lineFrom;
        this.to = lineTo;
        this.stops = lineStops;
        /*
        this.url = lineURL;
        this.notes = notes;
        this.flagCircular = isCircular;
        */
    }

    setURL(url: string): Line
    {
        this.url = url;
        return this;
    }

    setNotes(lineNotes: string): Line
    {
        this.notes = lineNotes;
        return this;
    }

    markCircular(): Line
    {
        this.flagCircular = true;
        return this;
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

    calculateURL(): string
    {
        if (this.type == lineType_KMB)
        {
            return "https://hkbus.fandom.com/wiki/九巴" + this.name + "線";
        }
        if (this.type == lineType_GMB_NT)
        {
            return "http://www.16seats.net/chi/gmb/gn_" + this.name.toLowerCase() + ".html";
        }
        if (this.type == lineType_HARBOUR)
        {
            return "https://hkbus.fandom.com/wiki/過海隧巴" + this.name + "線";
        }

        return this.url;
    }

    isGreenMinibus(): boolean
    {
        return this.type == lineType_GMB_HKI || this.type == lineType_GMB_KL || this.type == lineType_GMB_NT;
    }

    /**
     * Returns short qualifier for this line.
     * Format is: NAME (TYPE)
     */
    getHTMLShortID(): string
    {
        let shortID = this.name;
        // URL on the line ID
        let url = this.calculateURL();
        if (url.length > 0)
        {
            let aTagOpen = "<a href='" + url + "' target='_blank'>";
            let aTagClose = "</a>";
            shortID = aTagOpen + shortID + aTagClose;
        }
        shortID += " (";
        if (this.isGreenMinibus())
        {
            shortID += "<font color='green'>" + this.type.getValue() + "</font>";
        }
        else if (this.type == lineType_HARBOUR)
        {
            shortID += "<font color='purple'>" + this.type.getValue() + "</font>";
        }
        else
        {
            shortID += this.type.getValue();
        }
        shortID += ")";

        return shortID;
    }

    /**
     * Returns the long qualifier of this line.
     * Format is: SHORT_ID FROM SYMBOL TO
     */
    getHTMLLongID(): string
    {
        let htmlString = this.getHTMLShortID();
        htmlString += " ";
        htmlString += this.from;
        if (this.isCircular())
        {
            htmlString += " &#x21BA; ";
        }
        else
        {
            htmlString += " &#x2192; ";
        }
        htmlString += this.to;

        return htmlString;
    }

    getNotes(): string
    {
        return this.notes;
    }

    /**
     * Returns the index of the waypoint, or the station which is a neighbour of the waypoint, of the given waypoint.
     * 
     * Returns -1 if the waypoint is not found.
     * @param waypoint 
     */
    getIndexOfWaypoint(waypoint: Waypoint): number
    {
        for (let i = 0; i < this.stops.length; i++)
        {
            let currentStop = this.stops[i];
            if (currentStop == waypoint || currentStop.isNeighborOf(waypoint))
            {
                return i;
            }
        }

        return -1;
    }
}