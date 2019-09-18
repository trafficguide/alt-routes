class Connection
{
    line: Line;
    startIndex: number;
    endIndex: number;

    constructor(line: Line, startIndex: number, endIndex: number)
    {
        this.line = line;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
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

    calculateConnectionCost(): number
    {
        let connectionCost = 0;
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

        // Adjust cost if line is walking, to indicate the effort of doing so.
        if (this.line.type == lineType_WALK)
        {
            connectionCost *= 2;
        }

        return connectionCost;
    }
}