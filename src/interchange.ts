/**
 * A class storing a specific rule/pattern of preferred interchanges.
 * 
 * This may be used to store interchanges with concessions, for example.
 */
class Interchange
{
    from: Array<Line>;
    to: Array<Line>;
    at: Waypoint;
    effect: InterchangeEffect = null;

    constructor(fromLines: Array<Line>, toLines: Array<Line>, interchangeSpot: Waypoint)
    {
        this.from = fromLines;
        this.to = toLines;
        this.at = interchangeSpot;
    }

    getEffect()
    {
        return this.effect;
    }

    setEffect(fx: InterchangeEffect): Interchange
    {
        this.effect = fx;
        return this;
    }

    directlyGetEffectReadout(): string
    {
        return this.effect.getReadoutString();
    }

    getWaypoint(): Waypoint
    {
        return this.at;
    }

    getIsRelevantWithPair(fromLine: Line, toLine: Line): boolean
    {
        if (this.from[0] != WILDCARD_ANYLINE)
        {
            // Non wildcard in definition: normal logic
            return this.from.indexOf(fromLine) != -1 && this.to.indexOf(toLine) != -1;
        }
        // Wildcard in definition.
        // Then we must also check the location, and also whether the line really passes through the waypoint.
        if (fromLine.getIndexOfWaypoint(this.getWaypoint()) == -1)
        {
            // fromLine does not even pass through the waypoint.
            return false;
        }
        if (this.to.indexOf(toLine) == -1)
        {
            // toLine is not part of our definition.
            return false;
        }
        // toLine probably passes through the waypoint, otherwise this entry is invalid in the first place.
        return true;
    }
}