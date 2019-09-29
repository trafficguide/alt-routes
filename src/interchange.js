/**
 * A class storing a specific rule/pattern of preferred interchanges.
 *
 * This may be used to store interchanges with concessions, for example.
 */
var Interchange = /** @class */ (function () {
    function Interchange(fromLines, toLines, interchangeSpot) {
        this.effect = null;
        this.from = fromLines;
        this.to = toLines;
        this.at = interchangeSpot;
    }
    Interchange.prototype.getEffect = function () {
        return this.effect;
    };
    Interchange.prototype.setEffect = function (fx) {
        this.effect = fx;
        return this;
    };
    Interchange.prototype.directlyGetEffectReadout = function () {
        return this.effect.getReadoutString();
    };
    Interchange.prototype.getWaypoint = function () {
        return this.at;
    };
    Interchange.prototype.getIsRelevantWithPair = function (fromLine, toLine) {
        if (this.from[0] != WILDCARD_ANYLINE) {
            // Non wildcard in definition: normal logic
            return this.from.indexOf(fromLine) != -1 && this.to.indexOf(toLine) != -1;
        }
        // Wildcard in definition.
        // Then we must also check the location, and also whether the line really passes through the waypoint.
        if (fromLine.getIndexOfWaypoint(this.getWaypoint()) == -1) {
            // fromLine does not even pass through the waypoint.
            return false;
        }
        if (this.to.indexOf(toLine) == -1) {
            // toLine is not part of our definition.
            return false;
        }
        // toLine probably passes through the waypoint, otherwise this entry is invalid in the first place.
        return true;
    };
    return Interchange;
}());
