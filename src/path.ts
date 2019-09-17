class Path
{
    connections: Array<Connection>;

    constructor()
    {
        this.connections = [];
    }

    addConnection(con: Connection)
    {
        this.connections.push(con);
    }

    getConnections(): Array<Connection>
    {
        return this.connections;
    }

    getTotalAdjustedCost(): number
    {
        let totalCost = 0;
        for (let i = 0; i < this.connections.length; i++)
        {
            totalCost += this.connections[i].calculateConnectionCost();
        }
        return totalCost;
    }

    getBeginningWaypoint(): Waypoint
    {
        /*
        console.log(this);
        console.log(this.connections[0].line.getName())
        console.log(this.connections[0].startIndex)
        console.log(this.connections[0].line.stops[this.connections[0].startIndex])
        */
        return this.connections[0].line.stops[this.connections[0].startIndex];
    }

    getEndingWaypoint(): Waypoint
    {
        var lastPos = this.connections.length - 1;
        return this.connections[lastPos].line[this.connections[lastPos].endIndex];
    }

    isDistinctComparedToOther(other: Path): boolean
    {
        if (this.connections.length != other.connections.length)
        {
            console.log("Warning: comparing between two paths with different degrees. Falling back to true, since this is the intuitive result.");
            return true;
        }
        for (let i = 0; i < this.connections.length; i++)
        {
            if (this.connections[i].getLine() != other.connections[i].getLine())
            {
                return true;
            }
        }

        return false;
    }
}