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
     * The mark is persistent. You cannot unmark the Waypoint.
     * @param flag 
     */
    markAttributes(flag: string): void
    {
        if (flag.indexOf("x"))
        {
            this.flagInterchange = true;
        }
        if (flag.indexOf("s"))
        {
            this.flagSpecial = true;
        }
        if (flag.indexOf("i"))
        {
            this.flagInternal = true;
        }
    }

    addNeighbor(other: Waypoint): void
    {
        if (this.neighbours.indexOf(other) == -1)
        {
            this.neighbours.push(other);
        }
        if (other.neighbours.indexOf(this) == -1)
        {
            other.neighbours.push(this);
        }
    }
}