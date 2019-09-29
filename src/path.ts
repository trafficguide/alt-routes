/**
 * A Path contains several Connections; together they represent a path that the user may take to reach their destination.
 */
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
        let pathCost = 0;
        //connectionCost += this.getLine().getTimeCostAdjustment();
        //let pathCost = this.connections[0].getLine().getTimeCostAdjustment();
        for (let i = 0; i < this.connections.length; i++)
        {
            //console.log(this.connections[i]);
            pathCost += this.connections[i].calculateConnectionCost();
        }
        // Add in interchange cost: 2 cost for 1 intercgange
        pathCost += (this.connections.length - 1) * 2;
        // Reduce interchange cost: -1 cost for 1 "supported" interchange
        for (let i = 0; i < this.connections.length - 1; i++)
        {
            let C1 = this.connections[i];
            let L1 = C1.getLine();
            let C2 = this.connections[i + 1];
            let L2 = C2.getLine();
            if (L1.isWalking() || L2.isWalking())
            {
                // Walking involve no money and no time interval.
                // Partial refund of the interchange cost.
                pathCost -= 1;
                continue;
            }
            else if (L1.type != L2.type)
            {
                // Homogeneous synergy; if they aint homogeneous, add to the cost.
                pathCost += 1;
            }
            // Should prefer single place interchange
            let fromXPoint = L1.stops[C1.getEndIndex()];
            let toXPoint = L2.stops[C2.getStartIndex()];
            if (fromXPoint != toXPoint)
            {
                // Path assumed to be valid: both waypoints should be congruent or neighbours.
                pathCost++;
            }
            let interchangeRule = getInterchangeRuleForPair(L1, L2);
            if (interchangeRule != null && interchangeRule.getWaypoint().checkEqual(L1.getStops()[C1.endIndex]))
            {
                // Also need to check if the interchange recommendation matches with the interchange rules.
                pathCost--;
            }
        }
        // Make sure the overall cost is positive.
        // This makes more sense than the individual line positive requirement.
        if (pathCost < 1)
        {
            pathCost = 1;
        }
        return pathCost;
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

    pathIsContainingLine(query: Line): boolean
    {
        for (let i = 0; i < this.connections.length; i++)
        {
            if (this.connections[i].getLine().checkEqual(query))
            {
                return true;
            }
        }

        return false;
    }
}