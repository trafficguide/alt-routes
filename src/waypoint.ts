/**
 * Can be used to represent a station/general area.
 */
class Waypoint
{
    waypointID: string;
    waypointName: string;
    /**
     * Basically, while some waypoints are distinct, they are close enouogh that you can consider them as the same waypoint.
     */
    neighbours: Array<Waypoint> = [];
    traverseCost: number = 1;
    flagInterchange: boolean = false;
    flagSpecial: boolean = false;
    flagInternal: boolean = false;

    constructor(waypointID: string, waypointName: string)
    {
        this.waypointID = waypointID;
        this.waypointName = waypointName;
    }

    getID(): string
    {
        return this.waypointID;
    }

    getName(): string
    {
        return this.waypointName;
    }

    isPracticallyTheSame(other: Waypoint): boolean
    {
        // If the neighbours array contains the "other" Waypoint, then both waypoints are practically the same.
        return this.neighbours.indexOf(other) != -1;
    }

    isInterchange(): boolean
    {
        return this.flagInterchange;
    }

    isSpecial(): boolean
    {
        return this.flagSpecial;
    }

    isInternal(): boolean
    {
        return this.flagInternal;
    }

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
    markAttributes(flag: string): Waypoint
    {
        if (flag.indexOf("x") != -1)
        {
            this.flagInterchange = true;
        }
        if (flag.indexOf("s") != -1)
        {
            this.flagSpecial = true;
        }
        if (flag.indexOf("i") != -1)
        {
            this.flagInternal = true;
        }

        return this;
    }

    isNeighborOf(other: Waypoint): boolean
    {
        return this.neighbours.indexOf(other) != -1;
    }

    addNeighbor(other: Waypoint): Waypoint
    {
        if (!this.isNeighborOf(other))
        {
            this.neighbours.push(other);
        }
        if (!other.isNeighborOf(this))
        {
            other.neighbours.push(this);
        }

        return this;
    }

    setTraverseCost(newCost: number): Waypoint
    {
        this.traverseCost = newCost;
        return this;
    }

    getTraverseCost(): number
    {
        return this.traverseCost;
    }
}