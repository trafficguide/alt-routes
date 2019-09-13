var cachedInterchangeRules = null;

function getAllInterchangeRules()
{
    if (cachedInterchangeRules == null)
    {
        cachedInterchangeRules = interchangeRules_GetAllAndRaw();
    }

    return cachedInterchangeRules;
}

function getInterchangeInfoForLinePair(stationID, line1, line2)
{
    // begin test
    var L1_ID = lineObject_GetFullInternalID(line1);
    var L2_ID = lineObject_GetFullInternalID(line2);
    // end test
    var rules = getAllInterchangeRules();
    for (var icm_i = 0; icm_i < rules.length; icm_i++)
    {
        var currentRule = rules[icm_i];
        //console.log("Checking rule at station " + currentRule["stationID"])
        if (currentRule["stationID"] == stationID)
        {
            //console.log("station id matches.")
            //console.log("checking invlusion for " + L1 + " " + L2)
            // check lines
            var containsL1 = currentRule["line1"].includes(L1_ID);
            var containsL2 = currentRule["line2"].includes(L2_ID);
            //console.log("Inclusion status be " + containsL1 + " " + containsL2)
            if (containsL1 && containsL2)
            {
                // The custom-made interchange info object
                var temp = [];
                temp.push(currentRule, line1, line2);
                return temp;
            }
        }
    }

    //console.log("no rule")
    return null;
}

function interchangeInfo_ToString(interchangeInfo)
{
    if (interchangeInfo == null)
    {
        return "";
    }

    var string = "";
    string += "乘搭 ";
    string += lineObject_GetShortID(interchangeInfo[1]);
    string += "<br>於 ";
    string += interchangeInfo[0]["stationName"];
    string += " 轉乘 ";
    string += lineObject_GetShortID(interchangeInfo[2]);
    string += "<br>可獲得效果：";
    string += interchangeInfo[0]["effect"];

    return string;
}

/**
 * Placed at the bottom to improve overall readability
 */
function interchangeRules_GetAllAndRaw()
{
    var rules = [];

    // as a matter of testing
    rules.push({stationID:"x_lekyuenestate_south", stationName:"瀝源邨", line1:["72_kmb"], line2:["81_kmb"], effect:"減收$6.7"});
    rules.push({stationID:getUnifiedStationID("erl_st"), stationName:"沙田市中心/沙田站", line1:["81_kmb"], line2:["72_kmb"], effect:"減收$8.8"});
    /*
    rules.push({stationID:"x_kwongfukestate", stationName:"瀝源邨", line1:["72_kmb"], line2:["W3_kmb"], effect:"兩程合計$11.1"});
    rules.push({stationID:getUnifiedStationID("erl_st"), stationName:"沙田市中心/沙田站", line1:["81_kmb"], line2:["72_kmb"], effect:"減收$8.8"});
    */
    //rules.push({stationID: "test_smt_westbound", stationName: "城隧西行", line1: ["47X_kmb", "49X_kmb"], line2: ["47X_kmb", "49X_kmb"]});

    return rules;
}
