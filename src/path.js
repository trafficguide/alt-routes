/**
 * A Path contains several Connections; together they represent a path that the user may take to reach their destination.
 */
var Path = /** @class */ (function () {
    function Path() {
        this.connections = [];
    }
    Path.prototype.addConnection = function (con) {
        this.connections.push(con);
    };
    Path.prototype.getConnections = function () {
        return this.connections;
    };
    Path.prototype.getTotalAdjustedCost = function () {
        var pathCost = 0;
        //connectionCost += this.getLine().getTimeCostAdjustment();
        //let pathCost = this.connections[0].getLine().getTimeCostAdjustment();
        var endpointConnectedByWalking = false;
        for (var i = 0; i < this.connections.length; i++) {
            /*
            if (i == 0 && this.connections.length > 1 && this.connections[i].getLine().isWalking())
            {
                // Cancel first path cost if the first path is a walking path
                // Also check that the path length is at least 2.
                endpointConnectedByWalking = true;
                continue;
            }
            */
            // For symmetry with above
            /*
            if (!endpointConnectedByWalking && i + 1 == this.connections.length && this.connections[i].getLine().isWalking())
            {
                continue;
            }
            */
            //console.log(this.connections[i]);
            pathCost += this.connections[i].calculateConnectionCost();
        }
        // Add in interchange cost: 2 cost for 1 intercgange
        pathCost += (this.connections.length - 1) * 2;
        // Reduce interchange cost: -1 cost for 1 "supported" interchange
        for (var i = 0; i < this.connections.length - 1; i++) {
            var C1 = this.connections[i];
            var L1 = C1.getLine();
            var C2 = this.connections[i + 1];
            var L2 = C2.getLine();
            if (L1.isWalking() || L2.isWalking()) {
                // Walking involve no money and no time interval.
                // Partial refund of the interchange cost.
                pathCost -= 1;
                continue;
            }
            /*
            else if (L1.type != L2.type)
            {
                // Homogeneous synergy; if they aint homogeneous, add to the cost.
                pathCost += 1;
            }
            */
            // Should prefer single place interchange
            var fromXPoint = L1.stops[C1.getEndIndex()];
            var toXPoint = L2.stops[C2.getStartIndex()];
            if (fromXPoint != toXPoint) {
                // Path assumed to be valid: both waypoints should be congruent or neighbours.
                pathCost++;
            }
            var interchangeRule = getInterchangeRuleForPair(L1, L2);
            if (interchangeRule != null && interchangeRule.getWaypoint().checkEqual(L1.getStops()[C1.endIndex])) {
                // Also need to check if the interchange recommendation matches with the interchange rules.
                pathCost--;
            }
        }
        // Make sure the overall cost is positive.
        // This makes more sense than the individual line positive requirement.
        if (pathCost < 1) {
            pathCost = 1;
        }
        return pathCost;
    };
    Path.prototype.getBeginningWaypoint = function () {
        /*
        console.log(this);
        console.log(this.connections[0].line.getName())
        console.log(this.connections[0].startIndex)
        console.log(this.connections[0].line.stops[this.connections[0].startIndex])
        */
        return this.connections[0].line.stops[this.connections[0].startIndex];
    };
    Path.prototype.getEndingWaypoint = function () {
        var lastPos = this.connections.length - 1;
        return this.connections[lastPos].line[this.connections[lastPos].endIndex];
    };
    Path.prototype.isDistinctComparedToOther = function (other) {
        if (this.connections.length != other.connections.length) {
            console.log("Warning: comparing between two paths with different degrees. Falling back to true, since this is the intuitive result.");
            return true;
        }
        for (var i = 0; i < this.connections.length; i++) {
            if (this.connections[i].getLine() != other.connections[i].getLine()) {
                return true;
            }
        }
        return false;
    };
    Path.prototype.pathIsContainingLine = function (query) {
        for (var i = 0; i < this.connections.length; i++) {
            if (this.connections[i].getLine().checkEqual(query)) {
                return true;
            }
        }
        return false;
    };
    Path.prototype.toString = function () {
        var result = "";
        for (var i = 0; i < this.connections.length; i++) {
            result += this.connections[i].getLine().getName();
            result += " ";
        }
        result += "cost = " + this.getTotalAdjustedCost();
        return result;
    };
    return Path;
}());
