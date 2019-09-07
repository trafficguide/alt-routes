function database_GetAllAndRaw()
{
    var database = [];
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大埔工業邨", lineTo:"大圍站", lineStops:["erl_tpm", "erl_uni", "erl_st", "mos_stw"], notes: "Need to tap Octopus more."});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大圍站", lineTo:"大埔工業邨", lineStops:["mos_stw", "erl_st", "erl_uni", "erl_tpm"], notes: "Need to tap Octopus more."});
    database.push({lineName:"28K", lineType:"綠巴", lineFrom:"大埔墟", lineTo:"沙田市中心", lineStops:["erl_tpm", "erl_uni", "erl_st"], notes: "Circular go trip."});
    //return database;
    return {lineName:"72A", lineType:"九巴", lineFrom:"大埔工業邨", lineTo:"大圍站", lineStops:["erl_tpm", "erl_uni", "erl_st", "mos_stw"], notes: "Need to tap Octopus more."};
}