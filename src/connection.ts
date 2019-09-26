/**
 * A Connection, describing how a user may take a specific line to reach from one place to another.
 */
class Connection
{
    line: Line;
    startIndex: number;
    endIndex: number;

    constructor(line: Line, startPos: number, endPos: number)
    {
        this.line = line;
        this.startIndex = startPos;
        this.endIndex = endPos;
    }

    getLine(): Line
    {
        return this.line;
    }

    getStartIndex(): number
    {
        return this.startIndex;
    }

    getEndIndex(): number
    {
        return this.endIndex;
    }

    /**
     * Connection cost depends on:
     * 
     * 1. Distance/waypoint travelled
     * 
     * 2. Average/usual frequency of vehicles
     * 
     * 3. Type of travel (walking receives scaling of 2)
     */
    calculateConnectionCost(): number
    {
        if (this.line.type == lineType_FERRY)
        {
            return this.line.travelCost_FerryOverride;
        }

        let connectionCost = 0;
        // NOTICE: NEW ALGORITHM
        // Instead of iterating every stop and check if the "interchange rule" applies,
        // we now stipulate that all interchanges with concessions will reduce total cost by 1.
        // Total path cost is, obviously, still bounded by the non-negative rule.

        connectionCost = this.endIndex - this.startIndex;

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
        if (this.line.type == lineType_WALK)
        {
            connectionCost *= 2;
        }

        if (connectionCost <= 0)
        {
            connectionCost = 1;
        }

        return connectionCost;
    }
}