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
        var totalCost = 0;
        for (var i = 0; i < this.connections.length; i++) {
            totalCost += this.connections[i].calculateConnectionCost();
        }
        return totalCost;
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
    return Path;
}());
