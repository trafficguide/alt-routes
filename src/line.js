/**
 * A line (e.g. a bus line, a GMB line, etc.)
 */
var Line = /** @class */ (function () {
    function Line(lineName, lineType, lineFrom, lineTo, lineStops, overallFreq) {
        if (overallFreq === void 0) { overallFreq = 15; }
        /**
         * Stores the URL to some webpage that can describe the line in more detail.
         */
        this.url = "";
        this.notes = "";
        this.flagCircular = false;
        this.flagCommuter = false;
        this.flagNightOnly = false;
        /**
         * Determined by service frequency:
         *
         * <= 7 min per vehicle: -3
         *
         * 7 - 12 min per vehicle: -2
         *
         * 13 - 18 min per vehicle: -1
         *
         * 19 - 25 min per vehicle: 0
         *
         * 26 - 35 min per vehicle: 1
         *
         * 36 - 50 min per vehicle: 2
         *
         * 51 - 60 min per vehicle: 3
         *
         * > 60 min per vehicle: 4
         */
        this.timeCostAdjustment = 0;
        /**
         * Should be true when the line sends a vehicle very quickly, e.g., below 10 minutes frequency.
         */
        this.flagRapidFreq = false;
        this.travelCost_FerryOverride = -1;
        this.name = lineName;
        this.type = lineType;
        this.from = lineFrom;
        this.to = lineTo;
        this.stops = lineStops;
        // Time cost adjustment (not applicable to walking)
        if (this.type != lineType_WALK) {
            var freq = overallFreq;
            if (freq <= 5) {
                this.timeCostAdjustment = -3;
            }
            else if (freq <= 8) {
                this.timeCostAdjustment = -2;
            }
            else if (freq <= 15) {
                // 4
                this.timeCostAdjustment = -1;
            }
            else if (freq <= 20) {
                // 3
                this.timeCostAdjustment = 0;
            }
            else if (freq <= 30) {
                // About 2.5 vehicles per hour
                this.timeCostAdjustment = 1;
            }
            else if (freq <= 45) {
                // About 1.5 vehicles per hour
                this.timeCostAdjustment = 2;
            }
            else if (freq <= 60) {
                // About 1+ vehicles per hour
                this.timeCostAdjustment = 3;
            }
            else {
                // Less than 1 per hour
                this.timeCostAdjustment = 4;
            }
        }
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
    Line.prototype.markCommuter = function () {
        this.flagCommuter = true;
        return this;
    };
    Line.prototype.markNightOnly = function () {
        this.flagNightOnly = true;
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
    Line.prototype.isCommuter = function () {
        return this.flagCommuter;
    };
    Line.prototype.isNightOnly = function () {
        return this.flagNightOnly;
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
        if (this.type == lineType_CTB) {
            return "https://search.ushb.net/bus/CTB/" + this.name;
        }
        if (this.type == lineType_NWFB) {
            return "https://search.ushb.net/bus/NWFB/" + this.name;
        }
        return this.url;
    };
    Line.prototype.isWalking = function () {
        return this.type == lineType_WALK;
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
        /*
        if (this.type == lineType_FERRY || this.type == lineType_WALK || this.type == lineType_TRAM)
        {
            shortID = "";
        }
        */
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
        else if (this.type == lineType_CTB) {
            shortID += "<font color='coral'>" + this.type.getValue() + "</font>";
        }
        else if (this.type == lineType_NWFB) {
            shortID += "<font color='mediumseagreen'>" + this.type.getValue() + "</font>";
        }
        else if (this.type == lineType_TRAM) {
            shortID += "<font color='darkslategrey'>" + this.type.getValue() + "</font>";
        }
        else if (this.type == lineType_FERRY) {
            shortID += "<font color='blue'>" + this.type.getValue() + "</font>";
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
     * @param waypoint The waypoint to be searched
     * @param beginIndex Optional. Specifies the index within the line to begin the search from. Defaults to 0.
     */
    Line.prototype.getIndexOfWaypoint = function (waypoint, beginIndex) {
        if (beginIndex === void 0) { beginIndex = 0; }
        for (var i = beginIndex; i < this.stops.length; i++) {
            var currentWaypoint = this.stops[i];
            if (currentWaypoint.checkEqual(waypoint)) {
                return i;
            }
        }
        return -1;
    };
    Line.prototype.getTimeCostAdjustment = function () {
        return this.timeCostAdjustment;
    };
    Line.prototype.checkEqual = function (other) {
        if (this.type == lineType_TRAM || this.type == lineType_WALK || this.type == lineType_FERRY) {
            return this == other || (this.from == other.to && this.to == other.from);
        }
        else {
            return this == other || this.name == other.name;
        }
    };
    Line.prototype.findBestXWaypointWithLine = function (other) {
        // 1. If both lines have no intersection, then no need to consider any further.
        // Reject it and move to next line.
        // 2. If both lines have exactly 1 intersection, then add it to the list of results.
        // No need to consider any further.
        // 3. If both lines have multiple intersections:
        // 3A. If both lines have preferred intersection (e.g. by concession) then use that intersection
        // 3B. Otherwise, pick the earliest intersection.
        var intersectionCounter = new Array();
        for (var i = 0; i < other.stops.length; i++) {
            if (this.getIndexOfWaypoint(other.stops[i]) != -1) {
                intersectionCounter.push(other.stops[i]);
            }
        }
        if (intersectionCounter.length == 0) {
            return null;
        }
        // Attempt to detect intersection by 3A.
        var preferredIntersection = getInterchangeRuleForPair(this, other);
        if (preferredIntersection != null) {
            return preferredIntersection.getWaypoint();
        }
        // Now searching by 3B
        // Exclude internal stations.
        for (var i = 0; i < intersectionCounter.length; i++) {
            if (intersectionCounter[i].isInternal()) {
                continue;
            }
            return intersectionCounter[i];
        }
        return null;
    };
    Line.prototype.markFerryTravelCost = function (travelCost) {
        this.travelCost_FerryOverride = travelCost;
        return this;
    };
    return Line;
}());
