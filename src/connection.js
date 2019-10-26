/**
 * A Connection, describing how a user may take a specific line to reach from one place to another.
 */
var Connection = /** @class */ (function () {
    function Connection(line, startPos, endPos) {
        this.line = line;
        this.startIndex = startPos;
        this.endIndex = endPos;
    }
    Connection.prototype.getLine = function () {
        return this.line;
    };
    Connection.prototype.getStartIndex = function () {
        return this.startIndex;
    };
    Connection.prototype.getEndIndex = function () {
        return this.endIndex;
    };
    /**
     * Connection cost depends on:
     *
     * 1. Distance/waypoint travelled
     *
     * 2. Average/usual frequency of vehicles
     *
     * 3. Type of travel (walking receives scaling of 2)
     */
    Connection.prototype.calculateConnectionCost = function () {
        var connectionCost = 0;
        var line = this.getLine();
        // NOTICE: NEW ALGORITHM
        // Instead of iterating every stop and check if the "interchange rule" applies,
        // we now stipulate that all interchanges with concessions will reduce total cost by 1.
        // Total path cost is, obviously, still bounded by the non-negative rule.
        connectionCost = this.endIndex - this.startIndex;
        // Minibuses are agile, and so gets a cost down-scaling
        if (line.isMinibus()) {
            if (line.isGreenMinibus()) {
                // Green minibuses are OK agile...
                connectionCost *= 0.75;
            }
            else {
                // While red minibuses are even more agile...
                connectionCost *= 0.6;
            }
        }
        // Also adjust cost by vehicle frequency.
        connectionCost += this.getLine().getTimeCostAdjustment();
        /*
        let stops = this.line.getStops();
        for (let i = this.startIndex; i < this.endIndex; i++)
        {
            // We are interested in how much cost we need when moving towards the destination.
            let nextWaypoint = stops[i + 1];
            if (nextWaypoint.isInterchange())
            {
                continue;
            }
            // usually, the cost is 1.
            // We havent the need to adjust this for more general cases.
            connectionCost++;
        }
        */
        // Adjust cost if line is walking, to indicate the physical effort of doing so.
        if (this.line.type == lineType_WALK) {
            connectionCost *= 2;
        }
        // Modified to be more consistent
        if (connectionCost <= 0.1) {
            connectionCost = 0.1;
        }
        return connectionCost;
    };
    return Connection;
}());
