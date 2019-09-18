/**
 * Can be used to represent a station/general area.
 */
var Waypoint = /** @class */ (function () {
    function Waypoint(waypointID, waypointName) {
        /**
         * Basically, while some waypoints are distinct, they are close enouogh that you can consider them as the same waypoint.
         */
        this.neighbours = [];
        this.traverseCost = 1;
        this.flagInterchange = false;
        this.flagSpecial = false;
        this.flagInternal = false;
        this.waypointID = waypointID;
        this.waypointName = waypointName;
    }
    Waypoint.prototype.getID = function () {
        return this.waypointID;
    };
    Waypoint.prototype.getName = function () {
        return this.waypointName;
    };
    Waypoint.prototype.isPracticallyTheSame = function (other) {
        // If the neighbours array contains the "other" Waypoint, then both waypoints are practically the same.
        return this.neighbours.indexOf(other) != -1;
    };
    Waypoint.prototype.isInterchange = function () {
        return this.flagInterchange;
    };
    Waypoint.prototype.isSpecial = function () {
        return this.flagSpecial;
    };
    Waypoint.prototype.isInternal = function () {
        return this.flagInternal;
    };
    /**
     * Marks the waypoint according to these rules:
     *
     * x: interchange-only station
     *
     * s: special station with interchanges
     *
     * i: internal station
     *
     * @param flag
     */
    Waypoint.prototype.markAttributes = function (flag) {
        if (flag.indexOf("x") != -1) {
            this.flagInterchange = true;
        }
        if (flag.indexOf("s") != -1) {
            this.flagSpecial = true;
        }
        if (flag.indexOf("i") != -1) {
            this.flagInternal = true;
        }
        return this;
    };
    Waypoint.prototype.isNeighborOf = function (other) {
        return this.neighbours.indexOf(other) != -1;
    };
    Waypoint.prototype.addNeighbor = function (other) {
        if (!this.isNeighborOf(other)) {
            this.neighbours.push(other);
        }
        if (!other.isNeighborOf(this)) {
            other.neighbours.push(this);
        }
        return this;
    };
    Waypoint.prototype.setTraverseCost = function (newCost) {
        this.traverseCost = newCost;
        return this;
    };
    Waypoint.prototype.getTraverseCost = function () {
        return this.traverseCost;
    };
    return Waypoint;
}());
