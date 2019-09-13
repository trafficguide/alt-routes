/**
 * A PHP-substitute. Returns the line database in pure JS form.
 * 
 * Depending on the actual file size, we may consider splitting this up logically into several smaller parts,
 * then concatenate them back together in the main file.
 */
function database_GetAllAndRaw()
{
    var database = [];

    // Walking is by far the best way of handing it.
    // HK Island
    database.push({lineName:"", lineType:"walk", lineFrom:"灣仔", lineTo:"會展", lineStops:["ill_wc", "erl_exh"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"會展", lineTo:"灣仔", lineStops:["erl_exh", "ill_wc"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"金鐘", lineTo:"中環", lineStops:["erl_adm", "ill_cen"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"中環", lineTo:"金鐘", lineStops:["ill_cen", "erl_adm"], isWalking: true});

    // Kowloon Peninsula

    // New Territories - East
    database.push({lineName:"", lineType:"walk", lineFrom:"沙田市中心", lineTo:"秦石", lineStops:["erl_st", "mos_ckt"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"秦石", lineTo:"沙田市中心", lineStops:["mos_ckt", "erl_st"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"沙田市中心", lineTo:"沙田圍", lineStops:["erl_st", "mos_stw"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"沙田圍", lineTo:"沙田市中心", lineStops:["mos_stw", "erl_st"], isWalking: true})
    database.push({lineName:"", lineType:"walk", lineFrom:"秦石", lineTo:"乙明", lineStops:["mos_ckt", "mos_stw"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"乙明", lineTo:"秦石", lineStops:["mos_stw", "mos_ckt"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"秦石", lineTo:"新翠", lineStops:["mos_ckt", "mos_twa"], isWalking: true});
    database.push({lineName:"", lineType:"walk", lineFrom:"新翠", lineTo:"秦石", lineStops:["mos_twa", "mos_ckt"], isWalking: true});

    // New Territories - West
    
    // HK Island
    

    // Then list the bus lines in ascending order.
    // tests only for now
    /*
    database.push({lineName:"47X", lineType:"kmb", lineFrom:"cs", lineTo:"kse", lineStops:["mos_ckt", "test_smt_westbound"], notes: "test only"});
    database.push({lineName:"49X", lineType:"kmb", lineFrom:"ky", lineTo:"typ", lineStops:["test_smt_westbound", "tcl_ty"], notes: "test only"});
    */
    /*
    KMB Lines
    */
    database.push({lineName:"64K", lineType:"kmb", internalID:"1", lineFrom:"元朗(西)", lineTo:"大埔墟站", lineStops:["erl_two", "x_wantaukoklane_east", "erl_tpm"], notes: "途經林錦公路"});
    database.push({lineName:"64K", lineType:"kmb", internalID:"2", lineFrom:"大埔墟站", lineTo:"元朗(西)", lineStops:["erl_tpm", "erl_two"], notes: "途經林錦公路"});

    database.push({lineName:"72", lineType:"kmb", lineFrom:"長沙灣", lineTo:"大埔太和", lineStops:["erl_st", "i_kautoshan", "erl_cuhk", "i_taipokau", "erl_tpm", "erl_two"]});
    database.push({lineName:"72", lineType:"kmb", lineFrom:"大埔太和", lineTo:"長沙灣", lineStops:["erl_two", "x_wantaukoklane_east", "erl_tpm", "i_taipokau", "erl_cuhk", "i_kautoshan", "x_lekyuenestate_south", "erl_st"]});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大圍站", lineTo:"大埔工業邨", lineStops:["mos_twa", "mos_stw", "erl_st", "i_kautoshan", "erl_cuhk", "i_taipokau", "erl_tpm"], notes: "設有雙程分段收費"});
    database.push({lineName:"72A", lineType:"九巴", lineFrom:"大埔工業邨", lineTo:"大圍站", lineStops:["x_wantaukoklane_east", "erl_tpm", "i_taipokau", "erl_cuhk", "i_kautoshan", "erl_st", "mos_stw", "mos_twa"], notes: "設有雙程分段收費"});
    database.push({lineName:"72X", lineType:"九巴", lineFrom:"大埔中心", lineTo:"旺角(柏景灣)", lineStops:["erl_tpm", "x_wantaukoklane_east", "erl_klt", "erl_mke", "tcl_oly"], notes: "大埔特快"});
    database.push({lineName:"72X", lineType:"九巴", lineFrom:"旺角(柏景灣)", lineTo:"大埔中心", lineStops:["tcl_oly", "erl_mke", "erl_klt", "erl_tpm"], notes: "大埔特快"});
    database.push({lineName:"73", lineType:"kmb", lineFrom:"粉嶺華明", lineTo:"大埔工業邨", lineStops:["erl_fl", "erl_two", "x_wantaukoklane_east"], notes:"非辦工時間不入工業邨"});
    database.push({lineName:"73", lineType:"kmb", lineFrom:"大埔工業邨", lineTo:"粉嶺華明", lineStops:["erl_tpm", "erl_two", "erl_fl"], notes:"非辦工時間不入工業邨"});
    database.push({lineName:"73A", lineType:"九巴", lineFrom:"粉嶺華明", lineTo:"愉翠苑", lineStops:["erl_fl", "erl_two", "x_wantaukoklane_east", "erl_tpm", "i_taipokau", "erl_cuhk", "i_kautoshan", "erl_ft", "mos_cto", notes="設有雙程分段收費"]});
    database.push({lineName:"73A", lineType:"九巴", lineFrom:"愉翠苑", lineTo:"粉嶺華明", lineStops:["mos_cto", "erl_ft", "i_kautoshan", "erl_cuhk", "i_taipokau", "erl_tpm", "erl_two", "erl_fl"]});
    database.push({lineName:"74A", lineType:"九巴", lineFrom:"大埔太和", lineTo:"啟業", lineStops:["erl_two", "erl_tpm", "i_taipokau", "erl_cuhk", "i_kautoshan", "mos_stw", "mos_ckt"], notes:"班次稀有"});
    database.push({lineName:"74A", lineType:"九巴", lineFrom:"啟業", lineTo:"大埔太和", lineStops:["mos_ckt", "mos_stw", "i_kautoshan", "erl_cuhk", "i_taipokau", "erl_tpm", "erl_two"], notes:"班次稀有"});

    database.push({lineName:"80M", lineType:"kmb", lineFrom:"穗禾苑", lineTo:"九龍塘站", lineStops:["erl_st", "erl_klt"]});
    database.push({lineName:"80M", lineType:"kmb", lineFrom:"九龍塘站", lineTo:"穗禾苑", lineStops:["erl_klt", "erl_st"]});
    database.push({lineName:"81", lineType:"kmb", lineFrom:"禾輋", lineTo:"西九龍站", lineStops:["x_lekyuenestate_south", "erl_st", "erl_mke", "hsr_wkl"]});
    database.push({lineName:"81", lineType:"kmb", lineFrom:"西九龍站", lineTo:"禾輋", lineStops:["hsr_wkl", "erl_mke", "erl_st"]});
    database.push({lineName:"81K", lineType:"kmb", lineFrom:"新田圍", lineTo:"穗禾苑", lineStops:["mos_ckt", "mos_stw", "erl_st", "erl_ft"]});
    database.push({lineName:"81K", lineType:"kmb", lineFrom:"穗禾苑", lineTo:"新田圍", lineStops:["erl_ft", "erl_st", "mos_stw", "mos_ckt"]});
    database.push({lineName:"85K", lineType:"kmb", lineFrom:"恆安", lineTo:"沙田站", lineStops:["mos_ho", "mos_tsh", "erl_st"]});
    database.push({lineName:"85K", lineType:"kmb", lineFrom:"沙田站", lineTo:"恆安", lineStops:["erl_st", "mos_tsh", "mos_ho"]});
    database.push({lineName:"87D", lineType:"kmb", lineFrom:"錦英苑", lineTo:"紅磡", lineStops:["mos_mos", "mos_ho", "mos_tsh", "erl_klt", "erl_mke", "tmle_etst", "erl_hh"]});
    database.push({lineName:"87D", lineType:"kmb", lineFrom:"紅磡", lineTo:"錦英苑", lineStops:["erl_hh", "tmle_etst", "erl_mke", "erl_klt", "mos_tsh", "mos_ho", "mos_mos"]});
    database.push({lineName:"87K/87S", lineType:"kmb", lineFrom:"大學站", lineTo:"錦英苑", lineStops:["erl_cuhk", "mos_mos", "erl_cuhk"], isCircular: true});
    database.push({lineName:"88K", lineType:"kmb", lineFrom:"顯徑", lineTo:"駿景園", lineStops:["mos_hk", "erl_twa", "erl_st", "erl_ft"]});
    database.push({lineName:"88K", lineType:"kmb", lineFrom:"駿景園", lineTo:"顯徑", lineStops:["erl_ft", "erl_st", "erl_twa", "mos_hk"]});

    database.push({lineName:"W3", lineType:"kmb", lineFrom:"上水", lineTo:"西九龍站", lineStops:["erl_ss", "erl_tpm", "erl_st", "hsr_wkl"], notes:"高鐵特快；設有雙程分段收費"});
    database.push({lineName:"W3", lineType:"kmb", lineFrom:"西九龍站", lineTo:"上水", lineStops:["hsr_wkl", "erl_st", "erl_tpm", "erl_ss"], notes:"高鐵特快；設有雙程分段收費"});
    
    database.push({lineName:"182", lineType:"九巴", lineFrom:"愉翠苑", lineTo:"中環港澳碼頭", lineStops:["mos_cto", "mos_stw", "mos_ckt", "mos_twa", "erl_klt", "erl_hh", "ill_wc", "erl_adm"]});
    database.push({lineName:"182", lineType:"九巴", lineFrom:"中環港澳碼頭", lineTo:"愉翠苑", lineStops:["erl_adm", "ill_wc", "erl_hh", "erl_klt", "mos_twa", "mos_ckt", "mos_stw", "mos_cto"]});

    database.push({lineName:"270A", lineType:"九巴", lineFrom:"上水", lineTo:"尖東麼地道", lineStops:["erl_ss", "erl_fl", "erl_klt", "tmle_etst"]});
    database.push({lineName:"270A", lineType:"九巴", lineFrom:"尖東麼地道", lineTo:"上水", lineStops:["tmle_etst", "erl_klt", "erl_fl", "erl_ss"]});
    database.push({lineName:"273D", lineType:"九巴", lineFrom:"上水", lineTo:"粉嶺華明", lineStops:["erl_ss", "erl_fl", "erl_ss"], isCircular:true});

    database.push({lineName:"281A", lineType:"kmb", lineFrom:"沙田(廣源)", lineTo:"九龍站", lineStops:["mos_cto", "erl_klt", "erl_mke", "tmle_etst", "tmlw_aus", "tcl_kl"]});
    database.push({lineName:"281A", lineType:"kmb", lineFrom:"九龍站", lineTo:"沙田(廣源)", lineStops:["tcl_kl", "tmlw_aus", "tmle_etst", "erl_mke", "erl_klt", "mos_cto"]});
    
    database.push({lineName:"281M", lineType:"九巴", lineFrom:"新田圍", lineTo:"九龍塘站", lineStops:["mos_ckt", "mos_twa", "mos_hk", "erl_klt"]});
    database.push({lineName:"281M", lineType:"九巴", lineFrom:"九龍塘站", lineTo:"新田圍", lineStops:["erl_klt", "mos_hk", "mos_twa", "mos_ckt"]});
    database.push({lineName:"282", lineType:"九巴", lineFrom:"沙田市中心", lineTo:"新田圍", lineStops:["erl_st", "mos_ckt", "erl_st"], isCircular:true});
    database.push({lineName:"288", lineType:"九巴", lineFrom:"水泉澳", lineTo:"沙田市中心", lineStops:["mos_stw", "erl_st", "mos_stw"], isCircular:true});
    database.push({lineName:"289K", lineType:"九巴", lineFrom:"大學站", lineTo:"富安花園", lineStops:["erl_cuhk", "mos_tsh", "erl_cuhk"], isCircular:true});

    database.push({lineName:"307", lineType:"九巴", lineFrom:"大埔中心", lineTo:"中環渡輪碼頭", lineStops:["erl_tpm", "erl_adm", "ill_cen", "ill_sw", "tcl_hk"]});
    database.push({lineName:"307", lineType:"九巴", lineFrom:"中環渡輪碼頭", lineTo:"大埔中心", lineStops:["tcl_hk", "ill_sw", "ill_cen", "erl_adm", "erl_tpm"]});
    
    /*
     * Green Minibuses
     */
    database.push({lineName:"26", lineType:"gmb", lineFrom:"香港教育大學", lineTo:"海柏花園", lineStops:["x_wantaukoklane_east", "erl_tpm", "mos_ho", "mos_mos"], notes:"大埔特快"});
    database.push({lineName:"26", lineType:"gmb", lineFrom:"海柏花園", lineTo:"香港教育大學", lineStops:["mos_mos", "mos_ho", "erl_tpm"], notes:"大埔特快"});
    database.push({lineName:"28K", lineType:"gmb", lineFrom:"大埔墟站", lineTo:"沙田市中心", lineStops:["erl_tpm", "erl_cuhk", "erl_ft", "erl_st", "erl_ft", "erl_cuhk", "erl_tpm"], isCircular:true});
    database.push({lineName:"28S", lineType:"gmb", lineFrom:"白石角", lineTo:"沙田市中心", lineStops:["erl_cuhk", "erl_ft", "erl_st", "erl_ft", "erl_cuhk"], isCircular:true});
    database.push({lineName:"65K", lineType:"gmb", lineFrom:"火炭", lineTo:"廣源", lineStops:["erl_ft", "mos_cto"]});
    database.push({lineName:"65K", lineType:"gmb", lineFrom:"廣源", lineTo:"火炭", lineStops:["mos_cto", "erl_ft"]});

    database.push({lineName:"803", lineType:"gmb", lineFrom:"顯徑", lineTo:"利安", lineStops:["mos_hk", "mos_twa", "mos_ckt", "mos_stw", "mos_cto", "mos_sm", "mos_tsh", "mos_ho", "mos_mos"], notes: "繁忙時間不停大水坑站"});
    database.push({lineName:"803", lineType:"gmb", lineFrom:"利安", lineTo:"顯徑", lineStops:["mos_mos", "mos_ho", "mos_tsh", "mos_sm", "mos_cto", "mos_stw", "mos_ckt", "mos_twa", "mos_hk"], notes: "繁忙時間不停大水坑站"});
    database.push({lineName:"803K", lineType:"綠巴", lineFrom:"顯徑", lineTo:"大圍站", lineStops:["mos_hk", "mos_twa"]});
    database.push({lineName:"803K", lineType:"綠巴", lineFrom:"大圍站", lineTo:"顯徑", lineStops:["mos_twa", "mos_hk"]});
    database.push({lineName:"804", lineType:"gmb", lineFrom:"顯徑", lineTo:"廣源", lineStops:["mos_twa", "mos_ckt", "mos_stw", "mos_cto"]});
    database.push({lineName:"804", lineType:"gmb", lineFrom:"廣源", lineTo:"顯徑", lineStops:["mos_cto", "mos_stw", "mos_ckt", "mos_twa"]});
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