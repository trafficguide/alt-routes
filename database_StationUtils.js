/**
 * Checks whether a given station is a "regular station".
 * Internal stations are used internally to e.g. calibrate certain path costs.
 * Special stations are used to designate e.g. interchange stops and major terminals not close to any MTR stations.
 * @param {*} fullID The ID of the station.
 */
function stationIsRegular(fullID)
{
    var lineID = (fullID.split("_"))[0];
    return lineID != "int" && lineID != "spec";
}

/**
 * Checks whether a given station ID is an interchange station, and standardizes it into a unified station ID.
 * @param {*} fullID The ID of the station.
 */
function getUnifiedStationID(fullID)
{
    var res = fullID.split("_");
    var lineID = res[0];
    var stationID = res[1];
    
    // 屯馬線東西整合+馬鐵收歸
    if (lineID == "tmle" || lineID == "tmlw" || lineID == "mos")
    {
        lineID = "tml";
    }
    // 大圍+紅磡收歸
    if (lineID == "tml" && (stationID == "twa" || stationID == "hh"))
    {
        lineID = "erl";
    }
    // 旺角收歸
    if ((lineID == "erl" && stationID == "mke") || (lineID == "twl" && stationID == "mk"))
    {
        lineID = "erl";
        stationID = "mk";
    }

    var result = "";
    result += lineID;
    result += "_";
    result += stationID;

    //console.log("Converting " + fullID + " -> " + result);
    return result;
}