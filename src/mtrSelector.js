var MTRSelector = /** @class */ (function () {
    function MTRSelector(lineDrop, stationDrop) {
        this.lineDropdown = lineDrop;
        this.stationDropdown = stationDrop;
    }
    MTRSelector.prototype.calculateSelectedStation = function () {
        var allWaypoints = obtainAllMTRWaypoints();
        var selectedStationID = this.stationDropdown.selectedOptions[0].value;
        //console.log(selectedStationID);
        for (var i = 0; i < allWaypoints.length; i++) {
            if (allWaypoints[i].getID() == selectedStationID) {
                //console.log("returning " + allWaypoints[i]);
                return allWaypoints[i];
            }
        }
        //console.log("No return")
        return null;
    };
    MTRSelector.prototype.getSelectionID = function () {
        // Supposedly only 1 item is selectable.
        var lineID = this.lineDropdown.selectedOptions[0].value;
        var stationID = this.stationDropdown.selectedOptions[0].value;
        return lineID + "_" + stationID;
    };
    /**
     * Returns whether the current selection is valid: the default "---" option is not chosen.
     */
    MTRSelector.prototype.selectionIsValid = function () {
        // Selection is valid when the default "0" option is not chosen.
        return this.stationDropdown.selectedOptions[0].value.indexOf("0") == -1;
    };
    /**
     * Checks the value of the fromDropdown, and populate the toDropdown accordingly.
     */
    MTRSelector.prototype.updateDropdown = function () {
        // First insert a default option.
        var resultingDropdown = "<option value='0'>---</option>";
        // Then obtain the correct list of stations.
        //console.log(this.lineDropdown.selectedOptions[0].value)
        switch (this.lineDropdown.selectedOptions[0].value) {
            case "erl":
                this.currentlyLoadedSelections = MTR_ERL_ALL;
                break;
            case "tmle":
                this.currentlyLoadedSelections = MTR_TMLE_ALL;
                break;
            default:
                //console.log("default")
                this.currentlyLoadedSelections = [];
                break;
        }
        // Finally populate the dropdown list
        for (var i = 0; i < this.currentlyLoadedSelections.length; i++) {
            var station = this.currentlyLoadedSelections[i];
            var optionString = "<option value='" + station.getID() + "'>" + station.getName() + "</option>";
            resultingDropdown += optionString;
        }
        this.stationDropdown.innerHTML = resultingDropdown;
        return;
    };
    return MTRSelector;
}());
