/**
 * A PHP-substitute. Returns the line database in pure JS form.
 * 
 * Depending on the actual file size, we may consider splitting this up logically into several smaller parts,
 * then concatenate them back together in the main file.
 */
function database_GetAllAndRaw()
{
    var database = [];

    database.push({lineName:"72", lineType:"九巴", lineFrom:"長沙灣", lineTo:"大埔太和", lineStops:["erl_st", "erl_cuhk", "erl_tpm", "erl_tw"], notes: "大埔區有轉乘優惠"});
    database.push({lineName:"72", lineType:"九巴", lineFrom:"大埔太和", lineTo:"長沙灣", lineStops:["erl_tw", "erl_tpm", "erl_cuhk", "erl_st"], notes: "大埔區有轉乘優惠"});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大圍站", lineTo:"大埔工業邨", lineStops:["mos_twa", "mos_stw", "erl_st", "erl_cuhk", "erl_tpm"], notes: "設有雙程分段收費"});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大埔工業邨", lineTo:"大圍站", lineStops:["erl_tpm", "erl_cuhk", "erl_st", "mos_stw", "mos_twa"], notes: "設有雙程分段收費"});
    database.push({lineName:"73A", lineType:"九巴", lineFrom:"粉嶺華明", lineTo:"愉翠苑", lineStops:["erl_fl", "erl_two", "erl_tpm", "erl_cuhk", "erl_ft", "mos_cto"]});
    database.push({lineName:"73A", lineType:"九巴", lineFrom:"愉翠苑", lineTo:"粉嶺華明", lineStops:["mos_cto", "erl_ft", "erl_cuhk", "erl_tpm", "erl_two", "erl_fl"]});
    database.push({lineName:"74A", lineType:"九巴", lineFrom:"大埔太和", lineTo:"啟業", lineStops:["erl_two", "erl_tpm", "erl_cuhk", "mos_stw", "mos_ckt"]});
    database.push({lineName:"74A", lineType:"九巴", lineFrom:"啟業", lineTo:"大埔太和", lineStops:["mos_ckt", "mos_stw", "erl_cuhk", "erl_tpm", "erl_two"]});

    database.push({lineName:"87D", lineType:"九巴", lineFrom:"錦英苑", lineTo:"紅磡", lineStops:["mos_mos", "mos_ho", "mos_tsh", "erl_klt", "erl_mke", "tmle_etst", "erl_hh"]});
    database.push({lineName:"87D", lineType:"九巴", lineFrom:"紅磡", lineTo:"錦英苑", lineStops:["erl_hh", "tmle_etst", "erl_mke", "erl_klt", "mos_tsh", "mos_ho", "mos_mos"]});
    database.push({lineName:"87K/87S", lineType:"九巴", lineFrom:"大學站", lineTo:"錦英苑", lineStops:["erl_cuhk", "mos_mos", "erl_cuhk"], isCircular: true});
    database.push({lineName:"88K", lineType:"九巴", lineFrom:"顯徑", lineTo:"駿景園", lineStops:["mos_hk", "erl_twa", "erl_st", "erl_ft"]});
    database.push({lineName:"88K", lineType:"九巴", lineFrom:"駿景園", lineTo:"顯徑", lineStops:["erl_ft", "erl_st", "erl_twa", "mos_hk"]});

    database.push({lineName:"28K", lineType:"綠巴", lineFrom:"大埔墟站", lineTo:"沙田市中心", lineStops:["erl_tpm", "erl_cuhk", "erl_ft", "erl_st", "erl_ft", "erl_cuhk", "erl_tpm"], isCircular:true});
    database.push({lineName:"28S", lineType:"綠巴", lineFrom:"白石角", lineTo:"沙田市中心", lineStops:["erl_cuhk", "erl_ft", "erl_st", "erl_ft", "erl_cuhk"], isCircular:true});
    
    database.push({lineName:"W3", lineType:"九巴", lineFrom:"上水", lineTo:"西九龍站", lineStops:["erl_ss", "erl_tpm", "erl_st", "hsr_wkl"], notes:"高鐵特快；設有雙程分段收費"});
    database.push({lineName:"W3", lineType:"九巴", lineFrom:"西九龍站", lineTo:"上水", lineStops:["hsr_wkl", "erl_st", "erl_tpm", "erl_ss"], notes:"高鐵特快；設有雙程分段收費"});
    database.push({lineName:"85K", lineType:"九巴", lineFrom:"恆安", lineTo:"沙田站", lineStops:["mos_ho", "mos_tsh", "erl_st"]});
    database.push({lineName:"85K", lineType:"九巴", lineFrom:"沙田站", lineTo:"恆安", lineStops:["erl_st", "mos_tsh", "mos_ho"]});
    database.push({lineName:"80M", lineType:"九巴", lineFrom:"穗禾苑", lineTo:"九龍塘站", lineStops:["erl_st", "erl_klt"]});
    database.push({lineName:"80M", lineType:"九巴", lineFrom:"九龍塘站", lineTo:"穗禾苑", lineStops:["erl_klt", "erl_st"]});

    /*
    database.push({lineName:"182", lineType:"九巴", lineFrom:"愉翠苑", lineTo:"中環港澳碼頭", lineStops:["mos_cto", "mos_stw", "mos_ckt", "mos_twa", "erl_klt", "erl_hh", "erl_adm"]});
    database.push({lineName:"182", lineType:"九巴", lineFrom:"中環港澳碼頭", lineTo:"愉翠苑", lineStops:["erl_adm", "erl_hh", "erl_klt", "mos_twa", "mos_ckt", "mos_stw", "mos_cto"]});

    */
    database.push({lineName:"270A", lineType:"九巴", lineFrom:"上水", lineTo:"尖東麼地道", lineStops:["erl_ss", "erl_fl", "erl_klt", "tmle_etst"]});
    database.push({lineName:"270A", lineType:"九巴", lineFrom:"尖東麼地道", lineTo:"上水", lineStops:["tmle_etst", "erl_klt", "erl_fl", "erl_ss"]});
    database.push({lineName:"273D", lineType:"九巴", lineFrom:"上水", lineTo:"粉嶺華明", lineStops:["erl_ss", "erl_fl", "erl_ss"], isCircular:true});

    database.push({lineName:"281M", lineType:"九巴", lineFrom:"新田圍", lineTo:"九龍塘站", lineStops:["mos_ckt", "mos_twa", "mos_hk", "erl_klt"]});
    database.push({lineName:"281M", lineType:"九巴", lineFrom:"九龍塘站", lineTo:"新田圍", lineStops:["erl_klt", "mos_hk", "mos_twa", "mos_ckt"]});
    database.push({lineName:"289K", lineType:"九巴", lineFrom:"大學站", lineTo:"富安花園", lineStops:["erl_cuhk", "mos_tsh", "erl_cuhk"], isCircular:true});

    database.push({lineName:"307", lineType:"九巴", lineFrom:"大埔中心", lineTo:"中環渡輪碼頭", lineStops:["erl_tpm", "erl_adm", "ill_cen", "ill_sw", "tcl_hk"]});
    database.push({lineName:"307", lineType:"九巴", lineFrom:"中環渡輪碼頭", lineTo:"大埔中心", lineStops:["tcl_hk", "ill_sw", "ill_cen", "erl_adm", "erl_tpm"]});
    

    database.push({lineName:"65K", lineType:"綠巴", lineFrom:"火炭", lineTo:"廣源", lineStops:["erl_ft", "mos_cto"]});
    database.push({lineName:"65K", lineType:"綠巴", lineFrom:"廣源", lineTo:"火炭", lineStops:["mos_cto", "erl_ft"]});

    database.push({lineName:"803", lineType:"綠巴", lineFrom:"顯徑", lineTo:"利安", lineStops:["mos_hk", "mos_twa", "mos_ckt", "mos_stw", "mos_cto", "mos_sm", "mos_tsh", "mos_ho", "mos_mos"], notes: "繁忙時間不停大水坑站"});
    database.push({lineName:"803", lineType:"綠巴", lineFrom:"利安", lineTo:"顯徑", lineStops:["mos_mos", "mos_ho", "mos_tsh", "mos_sm", "mos_cto", "mos_stw", "mos_ckt", "mos_twa", "mos_hk"], notes: "繁忙時間不停大水坑站"});
    database.push({lineName:"803K", lineType:"綠巴", lineFrom:"顯徑", lineTo:"大圍站", lineStops:["mos_hk", "mos_twa"]});
    database.push({lineName:"803K", lineType:"綠巴", lineFrom:"大圍站", lineTo:"顯徑", lineStops:["mos_twa", "mos_hk"]});
    database.push({lineName:"807A", lineType:"綠巴", lineFrom:"大學站", lineTo:"海柏花園", lineStops:["erl_cuhk", "mos_ho", "mos_mos"]});
    database.push({lineName:"807A", lineType:"綠巴", lineFrom:"海柏花園", lineTo:"大學站", lineStops:["mos_mos", "mos_ho", "erl_cuhk"]});
    database.push({lineName:"807B", lineType:"綠巴", lineFrom:"海柏花園", lineTo:"黃竹灣", lineStops:["mos_mos", "mos_wks"]});
    database.push({lineName:"807B", lineType:"綠巴", lineFrom:"黃竹灣", lineTo:"海柏花園", lineStops:["mos_wks", "mos_mos"]});
    database.push({lineName:"807C", lineType:"綠巴", lineFrom:"大學站", lineTo:"海柏花園", lineStops:["erl_cuhk", "mos_mos"]});
    database.push({lineName:"807C", lineType:"綠巴", lineFrom:"海柏花園", lineTo:"大學站", lineStops:["mos_mos", "erl_cuhk"]});
    database.push({lineName:"807K", lineType:"綠巴", lineFrom:"大學站", lineTo:"井頭", lineStops:["erl_cuhk", "mos_mos", "mos_wks"]});
    database.push({lineName:"807K", lineType:"綠巴", lineFrom:"井頭", lineTo:"大學站", lineStops:["mos_wks", "mos_mos", "erl_cuhk"]});
    database.push({lineName:"807X", lineType:"綠巴", lineFrom:"大學站", lineTo:"烏溪沙站", lineStops:["erl_cuhk", "mos_wks", "erl_cuhk"], isCircular: true});

    return database;
}