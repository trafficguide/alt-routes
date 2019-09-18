var Connection = /** @class */ (function () {
    function Connection(line, startIndex, endIndex) {
        this.line = line;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
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
    Connection.prototype.calculateConnectionCost = function () {
        var connectionCost = 0;
        var stops = this.line.getStops();
        for (var i = this.startIndex; i < this.endIndex; i++) {
            // We are interested in how much cost we need when moving towards the destination.
            var nextWaypoint = stops[i + 1];
            if (nextWaypoint.isInterchange()) {
                continue;
            }
            // usually, the cost is 1.
            // We havent the need to adjust this for more general cases.
            connectionCost++;
        }
        // Adjust cost if line is walking, to indicate the effort of doing so.
        if (this.line.type == lineType_WALK) {
            connectionCost *= 2;
        }
        return connectionCost;
    };
    return Connection;
}());
