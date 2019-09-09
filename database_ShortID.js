var commonNameMapping = null;

function initializeMapping()
{
    commonNameMapping = new Object();

    // 東鐵線
    commonNameMapping[getUnifiedStationID("erl_st")] = "沙田市中心";
    commonNameMapping[getUnifiedStationID("erl_ft")] = "火炭";
    commonNameMapping[getUnifiedStationID("erl_cuhk")] = "馬料水/中文大學";
    commonNameMapping[getUnifiedStationID("erl_tpm")] = "大埔墟/廣福";
    commonNameMapping[getUnifiedStationID("erl_two")] = "太和";
    commonNameMapping[getUnifiedStationID("erl_fl")] = "粉嶺";
    commonNameMapping[getUnifiedStationID("erl_ss")] = "上水";

    // 屯馬東
    commonNameMapping[getUnifiedStationID("tmle_wks")] = "烏溪沙";
    commonNameMapping[getUnifiedStationID("tmle_mos")] = "馬鞍山市中心";
    commonNameMapping[getUnifiedStationID("tmle_ho")] = "恆安/耀安";
    commonNameMapping[getUnifiedStationID("tmle_tsh")] = "大水坑";
    commonNameMapping[getUnifiedStationID("tmle_sm")] = "石門";
    commonNameMapping[getUnifiedStationID("tmle_cto")] = "第一城";
    commonNameMapping[getUnifiedStationID("tmle_stw")] = "沙田圍/沙角";
    commonNameMapping[getUnifiedStationID("tmle_ckt")] = "秦石/車公廟";
    commonNameMapping[getUnifiedStationID("tmle_twa")] = "大圍";
}

/**
 * Returns the "common name" represented by the full ID.
 * 
 * Example: returns 中大 for erl_cuhk
 * @param {*} fullID 
 */
function getCommonName(fullID)
{
    if (commonNameMapping == null)
    {
        initializeMapping();
    }

    return commonNameMapping[fullID];
}