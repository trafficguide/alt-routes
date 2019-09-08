function database_GetAllAndRaw()
{
    var database = [];

    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大埔工業邨", lineTo:"大圍站", lineStops:["erl_tpm", "erl_cuhk", "erl_st", "mos_stw", "mos_tw"], notes: "設有雙程分段收費"});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大圍站", lineTo:"大埔工業邨", lineStops:["mos_tw", "mos_stw", "erl_st", "erl_cuhk", "erl_tpm"], notes: "設有雙程分段收費"});
    database.push({lineName:"28K", lineType:"綠巴", lineFrom:"大埔墟站", lineTo:"沙田市中心", lineStops:["erl_tpm", "erl_cuhk", "erl_st", "erl_cuhk", "erl_tpm"], isCircular:true});
    database.push({lineName:"289K", lineType:"九巴", lineFrom:"大學站", lineTo:"富安花園", lineStops:["erl_cuhk", "mos_tsh", "erl_cuhk"], isCircular:true});
    database.push({lineName:"W3", lineType:"九巴", lineFrom:"上水", lineTo:"西九龍站", lineStops:["erl_ss", "erl_tpm", "erl_st", "hsr_wkl"], notes:"高鐵特快"});
    database.push({lineName:"W3", lineType:"九巴", lineFrom:"西九龍站", lineTo:"上水", lineStops:["hsr_wkl", "erl_st", "erl_tpm", "erl_ss"], notes:"高鐵特快"});
    database.push({lineName:"85K", lineType:"九巴", lineFrom:"恆安", lineTo:"沙田站", lineStops:["mos_ho", "erl_st"]});
    database.push({lineName:"80M", lineType:"九巴", lineFrom:"穗禾苑", lineTo:"九龍塘站", lineStops:["erl_st", "erl_kwt"]});
    
    return database;
}