var Line = /** @class */ (function () {
    function Line(lineName, lineType, lineFrom, lineTo, lineStops) {
        /**
         * Stores the URL to some webpage that can describe the line in more detail.
         */
        this.url = "";
        this.notes = "";
        this.flagCircular = false;
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
    Line.prototype.setURL = function (url) {
        this.url = url;
        return this;
    };
    Line.prototype.setNotes = function (lineNotes) {
        this.notes = lineNotes;
        return this;
    };
    Line.prototype.markCircular = function () {
        this.flagCircular = true;
        return this;
    };
    Line.prototype.getName = function () {
        return this.name;
    };
    Line.prototype.getStops = function () {
        return this.stops;
    };
    Line.prototype.isCircular = function () {
        return this.flagCircular;
    };
    Line.prototype.calculateURL = function () {
        // Using USHB to support local groups; also, bus fandom is too nerdy for the average user.
        // For minibus, the 16seats.net is average enough for user-level nneds.
        if (this.type == lineType_KMB) {
            return "https://search.ushb.net/bus/KMB/" + this.name;
        }
        if (this.type == lineType_GMB_NT) {
            return "http://www.16seats.net/chi/gmb/gn_" + this.name.toLowerCase() + ".html";
        }
        if (this.type == lineType_HARBOUR) {
            return "https://search.ushb.net/bus/XHT/" + this.name;
        }
        return this.url;
    };
    Line.prototype.isGreenMinibus = function () {
        return this.type == lineType_GMB_HKI || this.type == lineType_GMB_KL || this.type == lineType_GMB_NT;
    };
    /**
     * Returns short qualifier for this line.
     * Format is: NAME (TYPE)
     */
    Line.prototype.getHTMLShortID = function () {
        var shortID = this.name;
        // URL on the line ID
        var url = this.calculateURL();
        if (url.length > 0) {
            var aTagOpen = "<a href='" + url + "' target='_blank'>";
            var aTagClose = "</a>";
            shortID = aTagOpen + shortID + aTagClose;
        }
        shortID += " (";
        if (this.isGreenMinibus()) {
            shortID += "<font color='green'>" + this.type.getValue() + "</font>";
        }
        else if (this.type == lineType_HARBOUR) {
            shortID += "<font color='purple'>" + this.type.getValue() + "</font>";
        }
        else {
            shortID += this.type.getValue();
        }
        shortID += ")";
        return shortID;
    };
    /**
     * Returns the long qualifier of this line.
     * Format is: SHORT_ID FROM SYMBOL TO
     */
    Line.prototype.getHTMLLongID = function () {
        var htmlString = this.getHTMLShortID();
        htmlString += " ";
        htmlString += this.from;
        if (this.isCircular()) {
            htmlString += " &#x21BA; ";
        }
        else {
            htmlString += " &#x2192; ";
        }
        htmlString += this.to;
        return htmlString;
    };
    Line.prototype.getNotes = function () {
        return this.notes;
    };
    /**
     * Returns the index of the waypoint, or the station which is a neighbour of the waypoint, of the given waypoint.
     *
     * Returns -1 if the waypoint is not found.
     * @param waypoint
     */
    Line.prototype.getIndexOfWaypoint = function (waypoint) {
        for (var i = 0; i < this.stops.length; i++) {
            var currentStop = this.stops[i];
            if (currentStop == waypoint || currentStop.isNeighborOf(waypoint)) {
                return i;
            }
        }
        return -1;
    };
    return Line;
}());
