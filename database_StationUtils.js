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

    var result = "";
    result += lineID;
    result += "_";
    result += stationID;

    //console.log("Converting " + fullID + " -> " + result);
    return result;
}