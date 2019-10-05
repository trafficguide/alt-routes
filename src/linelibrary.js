/**
 * LINE LIBRARY
 * Stores all the known lines and their details in the form of many global variables.
 */
// Wildcard Section
/**
 * Do not abuse this special line.
 */
var WILDCARD_ANYLINE = new Line("", lineType_WALK, "", "", []);
// Walking Section
// Hong Kong Island
var WALK_HKI_WC_Ex = new Line("", lineType_WALK, "灣仔", "會展", [MTR_ill_wanchai, MTR_erl_exhibition]);
var WALK_HKI_Ex_WC = new Line("", lineType_WALK, "會展", "灣仔", [MTR_erl_exhibition, MTR_ill_wanchai]);
var WALK_HKI_Ce_Ad = new Line("", lineType_WALK, "中環", "金鐘", [MTR_ill_central, MTR_ill_admiralty]);
var WALK_HKI_Ad_Ce = new Line("", lineType_WALK, "金鐘", "中環", [MTR_ill_admiralty, MTR_ill_central]);
var WALK_HKI_CENTRAL_ALL = [WALK_HKI_WC_Ex, WALK_HKI_Ex_WC, WALK_HKI_Ce_Ad, WALK_HKI_Ad_Ce];
var WALK_HKI_ALL = [].concat(WALK_HKI_CENTRAL_ALL);
// Kowloon Peninsula
var WALK_KLP_MK_MKE_KLH = new Line("", lineType_WALK, "旺角東站", "九龍醫院", [MTR_erl_mongkokeast, KowloonHospital]);
var WALK_KLP_MK_KLH_MKE = new Line("", lineType_WALK, "九龍醫院", "旺角東站", [KowloonHospital, MTR_erl_mongkokeast]);
var WALK_KLP_MK_ALL = [WALK_KLP_MK_MKE_KLH, WALK_KLP_MK_KLH_MKE];
var WALK_KLP_HMT_HMT_WMP = new Line("", lineType_WALK, "何文田地鐵站", "黃埔花園", [MTR_ktl_homantin, MTR_ktl_whampoa]);
var WALK_KLP_HMT_WMP_HMT = new Line("", lineType_WALK, "黃埔花園", "何文田地鐵站", [MTR_ktl_whampoa, MTR_ktl_homantin]);
var WALK_KLP_HMT_HMT_HHM = new Line("", lineType_WALK, "何文田地鐵站", "紅磡站", [MTR_tml_homantin, MTR_tml_hunghom]);
var WALK_KLP_HMT_HHM_HMT = new Line("", lineType_WALK, "紅磡站", "何文田地鐵站", [MTR_tml_hunghom, MTR_tml_homantin]);
var WALK_KLP_HMT_HHM_WMP = new Line("", lineType_WALK, "紅磡站", "黃埔花園", [MTR_tml_hunghom, MTR_ktl_whampoa]);
var WALK_KLP_HMT_WMP_HHM = new Line("", lineType_WALK, "黃埔花園", "紅磡站", [MTR_ktl_whampoa, MTR_tml_hunghom]);
var WALK_KLP_HMT_ALL = [WALK_KLP_HMT_HMT_WMP, WALK_KLP_HMT_WMP_HMT, WALK_KLP_HMT_HMT_HHM, WALK_KLP_HMT_HHM_HMT, WALK_KLP_HMT_HHM_WMP, WALK_KLP_HMT_WMP_HHM];
var WALK_KLP_WKL_CHAIN_EAST = new Line("西九四站連環", lineType_WALK, "九龍站", "佐敦站", [MTR_tcl_kowloon, MTR_hsr_westkowloon, MTR_tml_austin, MTR_twl_jordan]);
var WALK_KLP_WKL_CHAIN_WEST = new Line("西九四站連環", lineType_WALK, "佐敦站", "九龍站", [MTR_twl_jordan, MTR_tml_austin, MTR_hsr_westkowloon, MTR_tcl_kowloon]);
var WALK_KLP_WKL_ALL = [WALK_KLP_WKL_CHAIN_EAST, WALK_KLP_WKL_CHAIN_WEST];
var WALK_KLP_ALL = [].concat(WALK_KLP_MK_ALL, WALK_KLP_HMT_ALL, WALK_KLP_WKL_ALL);
// New Territories (East)
var WALK_NTE_ST_STW = new Line("瀝源橋", lineType_WALK, "沙田市中心", "乙明邨", [MTR_erl_shatin, JatMinEstate]);
var WALK_NTE_STW_ST = new Line("瀝源橋", lineType_WALK, "乙明邨", "沙田市中心", [JatMinEstate, MTR_erl_shatin]);
var WALK_NTE_ST_LY_SK = new Line("沙燕橋", lineType_WALK, "瀝源邨", "沙角邨", [YuenWo, MTR_mos_shatinwai]);
var WALK_NTE_ST_SK_LY = new Line("沙燕橋", lineType_WALK, "沙角邨", "瀝源邨", [MTR_mos_shatinwai, YuenWo]);
var WALK_NTE_ST_LY_Cen = new Line("", lineType_WALK, "瀝源邨/禾輋邨", "沙田市中心", [YuenWo, ShatinTownCenter]);
var WALK_NTE_ST_Cen_LY = new Line("", lineType_WALK, "沙田市中心", "瀝源邨/禾輋邨", [ShatinTownCenter, YuenWo]);
var WALK_NTE_ST_WC_Sea = new Line("翠榕橋", lineType_WALK, "禾輋邨", "沙田海鮮舫", [ShatinSeafood, YuenWo]);
var WALK_NTE_ST_Sea_WC = new Line("翠榕橋", lineType_WALK, "沙田海鮮舫", "禾輋邨", [YuenWo, ShatinSeafood]);
var WALK_NTE_ST_CS = new Line("", lineType_WALK, "沙田市中心", "秦石邨", [MTR_erl_shatin, MTR_mos_chekungtemple]);
var WALK_NTE_CS_ST = new Line("", lineType_WALK, "秦石邨", "沙田市中心", [MTR_mos_chekungtemple, MTR_erl_shatin]);
var WALK_NTE_CS_YM = new Line("", lineType_WALK, "秦石邨", "乙明邨", [MTR_mos_chekungtemple, MTR_mos_shatinwai]);
var WALK_NTE_YM_CS = new Line("", lineType_WALK, "乙明邨", "秦石邨", [MTR_mos_shatinwai, MTR_mos_chekungtemple]);
var WALK_NTE_CS_SC = new Line("", lineType_WALK, "秦石邨", "新翠邨", [MTR_mos_chekungtemple, MTR_mos_taiwai]);
var WALK_NTE_SC_CS = new Line("", lineType_WALK, "新翠邨", "秦石邨", [MTR_mos_taiwai, MTR_mos_chekungtemple]);
var WALK_NTE_SHATIN_ALL = [WALK_NTE_ST_STW, WALK_NTE_STW_ST, WALK_NTE_ST_LY_SK, WALK_NTE_ST_SK_LY, WALK_NTE_ST_LY_Cen, WALK_NTE_ST_Cen_LY, WALK_NTE_ST_WC_Sea, WALK_NTE_ST_Sea_WC, WALK_NTE_ST_CS, WALK_NTE_CS_ST, WALK_NTE_CS_YM, WALK_NTE_YM_CS, WALK_NTE_CS_SC, WALK_NTE_SC_CS];
var WALK_NTE_ALL = [].concat(WALK_NTE_SHATIN_ALL);
// New Territories (West)
var WALK_NTW_TKT_TWSYS_NORTH = new Line("荃灣天橋系統", lineType_WALK, "荃灣西鐵站", "荃灣地鐵站", [MTR_tml_tsuenwanwest, MTR_twl_tsuenwan]);
var WALK_NTW_TKT_TWSYS_SOUTH = new Line("荃灣天橋系統", lineType_WALK, "荃灣地鐵站", "荃灣西鐵站", [MTR_twl_tsuenwan, MTR_tml_tsuenwanwest]);
var WALK_NTW_CO_TY = new Line("", lineType_WALK, "長安邨", "青衣站", [CheungOn, MTR_tcl_tsingyi]);
var WALK_NTW_TY_CO = new Line("", lineType_WALK, "青衣站", "長安邨", [MTR_tcl_tsingyi, CheungOn]);
var WALK_NTW_TSUENKWAITSING_ALL = [WALK_NTW_TKT_TWSYS_NORTH, WALK_NTW_TKT_TWSYS_SOUTH, WALK_NTW_CO_TY, WALK_NTW_TY_CO];
var WALK_NTW_ALL = [].concat(WALK_NTW_TSUENKWAITSING_ALL);
var WALK_HK18_ALL = [].concat(WALK_HKI_ALL, WALK_KLP_ALL, WALK_NTE_ALL, WALK_NTW_ALL);
/**
 * Tram Section
 * Tram lines have no explicit name; they simply mark their destination, and off they go.
 */
var TRAM_1_EAST = new Line("", lineType_TRAM, "上環西港城", "筲箕灣", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
var TRAM_1_WEST = new Line("", lineType_TRAM, "筲箕灣", "上環西港城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
var TRAM_6_EAST = new Line("", lineType_TRAM, "堅尼地城", "筲箕灣", [MTR_ill_kennedytown, ShekTongTsui, ConnaughtRoadWest_Stop, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
var TRAM_6_WEST = new Line("", lineType_TRAM, "筲箕灣", "堅尼地城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, ConnaughtRoadWest_Stop, ShekTongTsui, MTR_ill_kennedytown]);
var TRAM_ALL = [TRAM_1_EAST, TRAM_1_WEST, TRAM_6_EAST, TRAM_6_WEST];
/**
 * Ferry Section
 * Ferry lines travel on water, so it is technically impossible to say that they follow a certain path.
 */
/**
 * Central -> Tsim Sha Tsui ferry.
 *
 * Internal pathing marks Central instead of Hong Kong station for historical preservation.
 */
var FERRY_HARB_1_NORTH = new Line("天星尖中", lineType_FERRY, "中環碼頭", "尖沙咀碼頭", [MTR_ill_central, MTR_twl_tsimshatsui], 7).markFerryTravelCost(2);
var FERRY_HARB_1_SOUTH = new Line("天星尖中", lineType_FERRY, "尖沙咀碼頭", "中環碼頭", [MTR_twl_tsimshatsui, MTR_ill_central], 7).markFerryTravelCost(2);
var FERRY_HARB_ALL = [FERRY_HARB_1_NORTH, FERRY_HARB_1_SOUTH];
var FERRY_HK18_ALL = [].concat(FERRY_HARB_ALL);
// KMB Section
// 00*
var KMB_6_NORTH = new Line("6", lineType_KMB, "尖沙咀碼頭", "荔枝角", [MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 8);
var KMB_6_SOUTH = new Line("6", lineType_KMB, "荔枝角", "尖沙咀碼頭", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui], 8);
var KMB_6D_EAST = new Line("6D", lineType_KMB, "美孚", "牛頭角", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, MongKokFlowerMarket, BoundaryPrince, EastKowloonMainBranch, SunPoKong, MTR_ktl_choihung, MTR_ktl_kowloonbay], 15);
var KMB_6D_WEST = new Line("6D", lineType_KMB, "牛頭角", "美孚", [MTR_ktl_kowloonbay, MTR_ktl_choihung, SunPoKong, EastKowloonMainBranch, BoundaryPrince, MongKokFlowerMarket, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 15);
// All 00*
var KMB_NUM_00x_ALL = [KMB_6_NORTH, KMB_6_SOUTH];
// 01*
var KMB_11D_EAST = new Line("11D", lineType_KMB, "樂富", "觀塘碼頭", [MTR_ktl_lokfu, BoundaryPrince, EastKowloonMainBranch, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KwunTongFerryPier], 20);
var KMB_11D_WEST = new Line("11D", lineType_KMB, "觀塘碼頭", "樂富", [KwunTongFerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, EastKowloonMainBranch, BoundaryPrince, MTR_ktl_lokfu], 20);
// All 01*
var KMB_NUM_01x_ALL = [KMB_11D_EAST, KMB_11D_WEST];
// 03*
var KMB_30X_NORTH = new Line("30X", lineType_KMB, "黃埔花園", "荃威花園", [MTR_ktl_whampoa, MTR_ktl_homantin, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking], 20);
var KMB_30X_SOUTH = new Line("30X", lineType_KMB, "荃威花園", "黃埔花園", [MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_ktl_homantin, MTR_ktl_whampoa], 20);
// All 03*
var KMB_NUM_03x_ALL = [KMB_30X_NORTH, KMB_30X_SOUTH];
// 04*
// Negative rotation vector -> clockwise path
var KMB_46X_NEGATIVE = new Line("46X", lineType_KMB, "美孚", "顯徑", [MTR_twl_meifoo, MTR_twl_laiking, MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, MTR_mos_taiwai, MTR_tml_hinkeng], 6);
var KMB_46X_POSITIVE = new Line("46X", lineType_KMB, "顯徑", "美孚", [MTR_tml_hinkeng, MTR_mos_taiwai, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong, MTR_twl_laiking, MTR_twl_meifoo], 6);
var KMB_47A_EAST = new Line("47A", lineType_KMB, "葵芳南", "水泉澳", [MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter], 30);
var KMB_47A_WEST = new Line("47A", lineType_KMB, "水泉澳", "葵芳南", [ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 30).setNotes("早繁時間不經沙田市中心");
var KMB_47X_EAST = new Line("47X", lineType_KMB, "葵盛東", "秦石", [MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple], 8);
var KMB_47X_WEST = new Line("47X", lineType_KMB, "秦石", "葵盛東", [MTR_mos_chekungtemple, MTR_mos_shatinwai, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 8).setNotes("早繁時間不經沙田市中心");
var KMB_48X_EAST = new Line("48X", lineType_KMB, "灣景花園", "禾輋邨", [MTR_twl_tsuenking, MTR_twl_tsuenwan, MTR_twl_taiwohau, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, YuenWo], 5);
var KMB_48X_WEST = new Line("48X", lineType_KMB, "禾輋邨", "灣景花園", [YuenWo, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_taiwohau, MTR_twl_tsuenwan, MTR_twl_tsuenking], 5);
var KMB_49X_EAST = new Line("49X", lineType_KMB, "青衣碼頭", "沙田廣源", [TsingYiFerryPier, CheungOn, NinaTowers, MTR_twl_tsuenwan, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, BelairGardens, MTR_mos_cityone], 8);
var KMB_49X_WEST = new Line("49X", lineType_KMB, "沙田廣源", "青衣碼頭", [MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, MTR_twl_tsuenwan, NinaTowers, CheungOn, TsingYiFerryPier], 8);
// All 04*
var KMB_NUM_04x_ALL = [KMB_46X_NEGATIVE, KMB_46X_POSITIVE, KMB_47A_EAST, KMB_47A_WEST, KMB_47X_EAST, KMB_47X_WEST, KMB_48X_EAST, KMB_48X_WEST, KMB_49X_EAST, KMB_49X_WEST];
// 06*
var KMB_64K_EAST = new Line("64K", lineType_KMB, "元朗(西)", "大埔墟站", [MTR_tml_longping, MTR_tml_yuenlong, MTR_tml_kamsheungroad, MTR_erl_taiwo, WanTauKokLane, MTR_erl_taipomarket]).setNotes("途經林錦公路");
var KMB_64K_WEST = new Line("64K", lineType_KMB, "大埔墟站", "元朗(西)", [MTR_erl_taipomarket, MTR_erl_taiwo, MTR_tml_kamsheungroad, MTR_tml_yuenlong, MTR_tml_longping]).setNotes("途經林錦公路");
// All 06*
var KMB_NUM_06x_ALL = [KMB_64K_EAST, KMB_64K_WEST];
// 07*
var KMB_72_NORTH = new Line("72", lineType_KMB, "長沙灣", "大埔太和", [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, MTR_erl_shatin, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo]);
var KMB_72_SOUTH = new Line("72", lineType_KMB, "大埔太和", "長沙灣", [MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, MTR_erl_shatin, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok]);
var KMB_72A_NORTH = new Line("72A", lineType_KMB, "大圍站", "大埔工業邨", [MTR_erl_taiwai, MTR_mos_chekungtemple, JatMinEstate, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad], 30).setNotes("設有雙程分段收費");
var KMB_72A_SOUTH = new Line("72A", lineType_KMB, "大埔工業邨", "大圍站", [WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, JatMinEstate, MTR_erl_taiwai], 30).setNotes("設有雙程分段收費");
var KMB_72X_NORTH = new Line("72X", lineType_KMB, "旺角(柏景灣)", "大埔中心", [MTR_tcl_olympic, MTR_ktl_mongkok, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
var KMB_72X_SOUTH = new Line("72X", lineType_KMB, "大埔中心", "旺角(柏景灣)", [WanTauKokLane, KwongFukEstate, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_ktl_mongkok, MTR_tcl_olympic]).setNotes("大埔特快");
var KMB_73_NORTH = new Line("73", lineType_KMB, "大埔工業邨", "粉嶺華明", [KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, WahMingTerminus]).setNotes("非辦工時間不入工業邨");
var KMB_73_SOUTH = new Line("73", lineType_KMB, "粉嶺華明", "大埔工業邨", [WahMingTerminus, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane]).setNotes("非辦工時間不入工業邨");
var KMB_73A_NORTH = new Line("73A", lineType_KMB, "愉翠苑", "粉嶺華明", [MTR_mos_cityone, MTR_erl_fotan, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, WahMingTerminus]);
var KMB_73A_SOUTH = new Line("73A", lineType_KMB, "粉嶺華明", "愉翠苑", [WahMingTerminus, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, MTR_erl_fotan, MTR_mos_cityone]).setNotes("設有雙程分段收費");
var KMB_73X_NORTH = new Line("73X", lineType_KMB, "荃灣(如心廣場)", "富善邨", [NinaTowers, ChungOnStreet, MTR_twl_taiwohau, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
var KMB_73X_SOUTH = new Line("73X", lineType_KMB, "富善邨", "荃灣(如心廣場)", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_taiwohau, ChungOnStreet, NinaTowers]).setNotes("大埔特快");
var KMB_74A_NORTH = new Line("74A", lineType_KMB, "啟業", "太和", [MTR_ktl_choihung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, JatMinEstate, BelairGardens, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, MTR_erl_taiwo], 60).setNotes("班次疏落");
var KMB_74A_SOUTH = new Line("74A", lineType_KMB, "太和", "啟業", [MTR_erl_taiwo, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, BelairGardens, JatMinEstate, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, PikHoiHouse], 60).setNotes("班次疏落");
// All 07*
var KMB_NUM_07x_ALL = [KMB_72_NORTH, KMB_72_SOUTH, KMB_72A_NORTH, KMB_72A_SOUTH, KMB_73_NORTH, KMB_73_SOUTH, KMB_73A_NORTH, KMB_73A_SOUTH, KMB_73X_NORTH, KMB_73X_SOUTH, KMB_74A_NORTH, KMB_74A_SOUTH];
// 08*
var KMB_80K_EAST = new Line("80K", lineType_KMB, "新翠", "愉翠苑", [MTR_erl_taiwai, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo, MTR_mos_cityone], 15);
var KMB_80K_WEST = new Line("80K", lineType_KMB, "愉翠苑", "新翠", [MTR_mos_cityone, YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai], 15);
var KMB_80M_NORTH = new Line("80M", lineType_KMB, "九龍塘站", "穗禾苑", [MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ShatinTownCenter, YuenWo, FoTanTsuen], 30);
var KMB_80M_SOUTH = new Line("80M", lineType_KMB, "穗禾苑", "九龍塘站", [FoTanTsuen, YuenWo, ShatinTownHall, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong], 30);
var KMB_81_NORTH = new Line("81", lineType_KMB, "西九龍站", "禾輋", [MTR_hsr_westkowloon, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo]);
var KMB_81_SOUTH = new Line("81", lineType_KMB, "禾輋", "西九龍站", [YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_hsr_westkowloon]);
var KMB_81C_NORTH = new Line("81C", lineType_KMB, "尖東麼地道", "耀安", [MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, ChevalierGarden, MTR_mos_hengon, HengHongStreet], 12);
var KMB_81C_SOUTH = new Line("81C", lineType_KMB, "耀安", "尖東麼地道", [HengHongStreet, MTR_mos_hengon, ChevalierGarden, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui], 12);
var KMB_81K_NORTH = new Line("81K", lineType_KMB, "新田圍", "穗禾苑", [MTR_mos_chekungtemple, MTR_mos_shatinwai, ShatinTownCenter, YuenWo, FoTanTsuen], 10);
var KMB_81K_SOUTH = new Line("81K", lineType_KMB, "穗禾苑", "新田圍", [FoTanTsuen, YuenWo, ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple], 10);
var KMB_83K = new Line("83K", lineType_KMB, "沙田黃泥頭", "沙田市中心", [HangSengUniversity, MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownCenter, YuenWo, MTR_mos_cityone, HangSengUniversity]).markCircular();
var KMB_85K_NORTH = new Line("85K", lineType_KMB, "沙田站", "恆安", [MTR_erl_shatin, YuenWo, ShatinSeafood, ChevalierGarden, MTR_mos_hengon]);
var KMB_85K_SOUTH = new Line("85K", lineType_KMB, "恆安", "沙田站", [MTR_mos_hengon, ChevalierGarden, ShatinSeafood, YuenWo, MTR_erl_shatin]);
var KMB_87D_NORTH = new Line("87D", lineType_KMB, "紅磡", "錦英苑", [MTR_erl_hunghom, MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_ktl_yaumatei, MTR_ktl_mongkok, MTR_ktl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ShatinSeafood, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan], 10);
var KMB_87D_SOUTH = new Line("87D", lineType_KMB, "錦英苑", "紅磡", [MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinSeafood, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui, MTR_erl_hunghom], 10);
var KMB_87K = new Line("87K", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, HengHongStreet, MTR_mos_maonshan, KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_erl_university]).markCircular();
var KMB_87S = new Line("87S", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, KamYingCourt, MaOnShanRoad, MTR_erl_university]);
var KMB_88K_NORTH = new Line("88K", lineType_KMB, "顯徑", "駿景園", [MTR_tml_hinkeng, MTR_erl_taiwai, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo, MTR_erl_fotan, RoyalAscot], 15);
var KMB_88K_SOUTH = new Line("88K", lineType_KMB, "駿景園", "顯徑", [RoyalAscot, MTR_erl_fotan, YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai, MTR_tml_hinkeng], 15);
var KMB_88X_MORNING = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("早晨模式");
var KMB_88X_AFTERNOON = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("黃昏模式");
// All 08*
var KMB_NUM_08x_ALL = [KMB_80K_EAST, KMB_80K_WEST, KMB_80M_NORTH, KMB_80M_SOUTH, KMB_81_NORTH, KMB_81_SOUTH, KMB_81C_NORTH, KMB_81C_SOUTH, KMB_81K_NORTH, KMB_81K_SOUTH, KMB_83K, KMB_85K_NORTH, KMB_85K_SOUTH, KMB_87D_NORTH, KMB_87D_SOUTH, KMB_87K, KMB_87S, KMB_88K_NORTH, KMB_88K_SOUTH, KMB_88X_MORNING, KMB_88X_AFTERNOON];
// 09*
var KMB_98A = new Line("98A", lineType_KMB, "坑口北將軍澳醫院", "牛頭角站", [MTR_tko_hanghau, MTR_tko_polam, Anderson, SauMauPing, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, SauMauPing, Anderson, MTR_tko_polam, MTR_tko_hanghau], 12).markCircular();
// All 09*
var KMB_NUM_09x_ALL = [KMB_98A];
// All 0**
var KMB_NUM_0xx_ALL = [].concat(KMB_NUM_00x_ALL, KMB_NUM_01x_ALL, KMB_NUM_03x_ALL, KMB_NUM_04x_ALL, KMB_NUM_06x_ALL, KMB_NUM_07x_ALL, KMB_NUM_08x_ALL, KMB_NUM_09x_ALL);
// 23*
var KMB_234X_NORTH = new Line("234X", lineType_KMB, "尖東麼地道", "灣景花園", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_tml_meifoo, LaiKingChokePoint, TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking], 15);
var KMB_234X_SOUTH = new Line("234X", lineType_KMB, "灣景花園", "尖東麼地道", [MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_easttsimshatsui], 15);
// All 23*
var KMB_NUM_23x_ALL = [KMB_234X_NORTH, KMB_234X_SOUTH];
// 27*
var KMB_270A_NORTH = new Line("270A", lineType_KMB, "尖東麼地道", "上水", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, ToloHighway_TaiPo, FanlingHighway, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]);
var KMB_270A_SOUTH = new Line("270A", lineType_KMB, "上水", "尖東麼地道", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, FanlingHighway_Interchange, FanlingHighway, ToloHighway_TaiPo, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui]);
var KMB_273 = new Line("273", lineType_KMB, "粉嶺華明", "粉嶺站", [WahMingTerminus, MTR_erl_fanling, WahMingTerminus]).markCircular();
var KMB_273A = new Line("273A", lineType_KMB, "彩園", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
var KMB_273D = new Line("273D", lineType_KMB, "上水", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
// All 27*
var KMB_NUM_27x_ALL = [KMB_270A_NORTH, KMB_270A_SOUTH, KMB_273, KMB_273A, KMB_273D];
// 28*
var KMB_280X_NORTH = new Line("280X", lineType_KMB, "尖東麼地道", "穗禾苑", [MTR_tml_easttsimshatsui, MTR_tml_austin, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, ShatinTownCenter, YuenWo, FoTanTsuen], 20);
var KMB_280X_SOUTH = new Line("280X", lineType_KMB, "穗禾苑", "尖東麼地道", [FoTanTsuen, YuenWo, ShatinTownHall, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, NgaCheungRoad_WHTX, MTR_twl_tsimshatsui], 20);
var KMB_281A_NORTH = new Line("281A", lineType_KMB, "九龍站", "沙田廣源", [MTR_tcl_kowloon, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnelHighway, MTR_mos_cityone]).setNotes("獅隧特快");
var KMB_281A_SOUTH = new Line("281A", lineType_KMB, "沙田廣源", "九龍站", [MTR_mos_cityone, LionRockTunnelHighway, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tcl_kowloon]).setNotes("獅隧特快");
var KMB_281M_NORTH = new Line("281M", lineType_KMB, "九龍塘站", "新田圍", [MTR_erl_kowloontong, MTR_tml_hinkeng, MTR_erl_taiwai, MTR_mos_chekungtemple]);
var KMB_281M_SOUTH = new Line("281M", lineType_KMB, "新田圍", "九龍塘站", [MTR_mos_chekungtemple, MTR_erl_taiwai, MTR_tml_hinkeng, MTR_erl_kowloontong]);
var KMB_282 = new Line("282", lineType_KMB, "沙田市中心", "新田圍", [ShatinTownCenter, MTR_mos_chekungtemple, ShatinTownCenter]).markCircular();
var KMB_288 = new Line("288", lineType_KMB, "水泉澳", "沙田市中心", [MTR_mos_shatinwai, ShatinTownHall, MTR_mos_shatinwai]).markCircular();
var KMB_289K = new Line("289K", lineType_KMB, "大學站", "富安花園", [MTR_erl_university, MTR_mos_hengon, ChevalierGarden, MTR_erl_university]).markCircular();
// All 28*
var KMB_NUM_28x_ALL = [KMB_280X_NORTH, KMB_280X_SOUTH, KMB_281A_NORTH, KMB_281A_SOUTH, KMB_281M_NORTH, KMB_281M_SOUTH, KMB_282, KMB_288, KMB_289K];
// All 2**
var KMB_NUM_2xx_ALL = [].concat(KMB_NUM_23x_ALL, KMB_NUM_27x_ALL, KMB_NUM_28x_ALL);
// Special Lines
var KMB_W3_NORTH = new Line("W3", lineType_KMB, "西九龍站", "上水", [MTR_hsr_westkowloon, WestKowloonHighway, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, MTR_erl_shatin, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, FanlingHighway, MTR_erl_sheungshui]).setNotes("高鐵特快；設有雙程分段收費");
var KMB_W3_SOUTH = new Line("W3", lineType_KMB, "上水", "西九龍站", [MTR_erl_sheungshui, FanlingHighway, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, MTR_erl_shatin, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, WestKowloonHighway, MTR_hsr_westkowloon]).setNotes("高鐵特快");
// All Special Lines
var KMB_NUM_SPECIAL = [KMB_W3_NORTH, KMB_W3_SOUTH];
/*
const test_w3_north = new Line("w3", lineType_KMB, "wkl", "ss", [MTR_erl_taipomarket, MTR_erl_sheungshui], "", "x", false);
const test_803k_north = new Line("803k", lineType_GMB_NT, "hk", "twa", [MTR_tml_hinkeng, MTR_erl_taiwai], "", "", false);
*/
var KMB_HK18_ALL = [].concat(KMB_NUM_0xx_ALL, KMB_NUM_2xx_ALL, KMB_NUM_SPECIAL);
/**
 * Citibus Section
 */
// 00*
var CTB_5X_EAST = new Line("5X", lineType_CTB, "堅尼地城", "銅鑼灣威菲路道", [MTR_ill_kennedytown, ShekTongTsui, ConnaughtRoadWest_Stop, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill]);
var CTB_5X_WEST = new Line("5X", lineType_CTB, "銅鑼灣威菲路道", "堅尼地城", [MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, ShekTongTsui, MTR_ill_kennedytown]);
var CTB_NUM_00x_ALL = [CTB_5X_EAST, CTB_5X_WEST];
// 09*
var CTB_98_NORTH = new Line("98", lineType_CTB, "利東", "香港仔成都道", [MTR_seil_leitung, MTR_swil_aberdeen], 6);
var CTB_98_SOUTH = new Line("98", lineType_CTB, "香港仔成都道", "利東", [MTR_swil_aberdeen, MTR_seil_leitung], 6);
var CTB_NUM_09x_ALL = [CTB_98_NORTH, CTB_98_SOUTH];
var CTB_NUM_0xx_ALL = [].concat(CTB_NUM_00x_ALL, CTB_NUM_09x_ALL);
var CTB_HK18_ALL = [].concat(CTB_NUM_0xx_ALL);
/**
 * New World First Bus Section
 */
// 00*
var NWFB_2_EAST = new Line("2", lineType_NWFB, "上環港澳碼頭", "西灣河嘉亨灣", [MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
var NWFB_2_WEST = new Line("2", lineType_NWFB, "西灣河嘉亨灣", "上環港澳碼頭", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
var NWFB_8_EAST = new Line("8", lineType_NWFB, "灣仔北", "杏花邨", [WanChaiFerryPier, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, EasternCorridor, ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_hengfachuen], 13).setNotes("東走特快");
var NWFB_8_WEST = new Line("8", lineType_NWFB, "杏花邨", "灣仔北", [MTR_ill_hengfachuen, MTR_ill_chaiwan, ChaiWanRoad, EasternCorridor, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, WanChaiFerryPier], 13).setNotes("東走特快");
var NWFB_NUM_00x_ALL = [NWFB_2_EAST, NWFB_2_WEST, NWFB_8_EAST, NWFB_8_WEST];
// 03*
var NWFB_30X_NORTH = new Line("30X", lineType_NWFB, "數碼港", "中環交易廣場", [MTR_swil_cyberport, MTR_swil_wahfoo, MTR_swil_queenmary, MTR_swil_hku, MTR_tcl_hongkong, MTR_ill_central], 20);
var NWFB_30X_SOUTH = new Line("30X", lineType_NWFB, "中環交易廣場", "數碼港", [MTR_tcl_hongkong, MTR_ill_central, MTR_ill_saiyingpun, MTR_swil_hku, MTR_swil_queenmary, MTR_swil_wahfoo, MTR_swil_cyberport], 20);
var NWFB_NUM_03x_ALL = [NWFB_30X_NORTH, NWFB_30X_SOUTH];
// 09*
var NWFB_91_NORTH = new Line("91", lineType_NWFB, "鴨脷洲邨", "中環渡輪碼頭", [MTR_seil_southhoriz, MTR_seil_leitung, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo, MTR_swil_queenmary, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_tcl_hongkong], 18);
var NWFB_91_SOUTH = new Line("91", lineType_NWFB, "中環渡輪碼頭", "鴨脷洲邨", [MTR_tcl_hongkong, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_ill_hku, MTR_swil_queenmary, MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_leitung, MTR_seil_southhoriz], 18);
var NWFB_NUM_09x_ALL = [NWFB_91_NORTH, NWFB_91_SOUTH];
var NWFB_NUM_0xx_ALL = [].concat(NWFB_NUM_00x_ALL, NWFB_NUM_03x_ALL, NWFB_NUM_09x_ALL);
// 79*
var NWFB_NUM_798_EAST = new Line("798", lineType_NWFB, "火炭山尾街", "調景嶺站", [FoTanTsuen, YuenWo, ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 15).setNotes("將軍澳特快");
var NWFB_NUM_798_WEST = new Line("798", lineType_NWFB, "調景嶺站", "火炭山尾街", [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen], 15).setNotes("沙田特快；沙田站只准落客");
var NWFB_NUM_79x_ALL = [NWFB_NUM_798_EAST, NWFB_NUM_798_WEST];
// 7**
var NWFB_NUM_7xx_ALL = [].concat(NWFB_NUM_79x_ALL);
var NWFB_HK18_ALL = [].concat(NWFB_NUM_0xx_ALL, NWFB_NUM_7xx_ALL);
// GMB Section
// New Territories section
// 02*
var GMB_NT_26_EAST = new Line("26", lineType_GMB_NT, "香港教育大學", "海柏花園", [MTR_erl_taipomarket, HengHongStreet, MTR_mos_maonshan]).setNotes("大埔特快");
var GMB_NT_26_WEST = new Line("26", lineType_GMB_NT, "海柏花園", "香港教育大學", [MTR_mos_maonshan, HengHongStreet, MTR_erl_taipomarket]).setNotes("大埔特快");
var GMB_NT_28K = new Line("28K", lineType_GMB_NT, "大埔墟站", "沙田市中心", [MTR_erl_taipomarket, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, MTR_erl_taipomarket]).markCircular();
var GMB_NT_28S = new Line("28S", lineType_GMB_NT, "白石角", "沙田市中心", [PakShekKok, CheungShueTan, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, CheungShueTan, PakShekKok]).markCircular();
// All 02*
var GMB_NT_NUM_02x = [GMB_NT_26_EAST, GMB_NT_26_WEST, GMB_NT_28K, GMB_NT_28S];
// 06*
var GMB_NT_65A_EAST = new Line("65A", lineType_GMB_NT, "沙田市中心", "黃泥頭", [ShatinTownHall, BelairGardens, MTR_mos_cityone, HangSengUniversity], 7);
var GMB_NT_65A_WEST = new Line("65A", lineType_GMB_NT, "黃泥頭", "沙田市中心", [HangSengUniversity, MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownHall], 7);
var GMB_NT_65K_NORTH = new Line("65K", lineType_GMB_NT, "黃泥頭", "火炭站", [MTR_mos_cityone, ShatinSeafood, MTR_erl_fotan]);
var GMB_NT_65K_SOUTH = new Line("65K", lineType_GMB_NT, "火炭站", "黃泥頭", [MTR_erl_fotan, MTR_mos_cityone]);
var GMB_NT_67A_EAST = new Line("67A", lineType_GMB_NT, "沙田站", "碩門邨", [MTR_erl_shatin, BelairGardens, ShatinSeafood, MTR_mos_shekmun], 12);
var GMB_NT_67A_WEST = new Line("67A", lineType_GMB_NT, "碩門邨", "沙田站", [MTR_mos_shekmun, ShatinSeafood, BelairGardens, MTR_erl_shatin], 12);
var GMB_NT_68K_EAST = new Line("68K", lineType_GMB_NT, "瑞峰花園", "沙田站", [MTR_mos_taiwai, MTR_mos_chekungtemple, ShatinTownCenter, MTR_erl_shatin], 8);
var GMB_NT_68K_WEST = new Line("68K", lineType_GMB_NT, "沙田站", "瑞峰花園", [MTR_erl_shatin, ShatinTownHall, MTR_mos_chekungtemple, MTR_mos_taiwai], 8);
// All 06*
var GMB_NT_NUM_06x = [GMB_NT_65A_EAST, GMB_NT_65A_WEST, GMB_NT_65K_NORTH, GMB_NT_65K_SOUTH, GMB_NT_67A_EAST, GMB_NT_67A_WEST, GMB_NT_68K_EAST, GMB_NT_68K_WEST];
// All 0**
var GMB_NT_NUM_0xx = [].concat(GMB_NT_NUM_02x, GMB_NT_NUM_06x);
// 80*
var GMB_NT_803_NORTH = new Line("803", lineType_GMB_NT, "顯徑", "利安", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, LeeOnEstate], 15).setNotes("繁忙時間不停大水坑站");
var GMB_NT_803_SOUTH = new Line("803", lineType_GMB_NT, "利安", "顯徑", [LeeOnEstate, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng], 15).setNotes("繁忙時間不停大水坑站");
var GMB_NT_803K_EAST = new Line("803K", lineType_GMB_NT, "顯徑", "大圍站", [MTR_tml_hinkeng, MTR_mos_taiwai]);
var GMB_NT_803K_WEST = new Line("803K", lineType_GMB_NT, "大圍站", "顯徑", [MTR_mos_taiwai, MTR_tml_hinkeng]);
var GMB_NT_804_EAST = new Line("804", lineType_GMB_NT, "顯徑", "廣源", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, MTR_mos_cityone]);
var GMB_NT_804_WEST = new Line("804", lineType_GMB_NT, "廣源", "顯徑", [MTR_mos_cityone, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng]);
var GMB_NT_807A_EAST = new Line("807A", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_hengon, MTR_mos_maonshan]);
var GMB_NT_807A_WEST = new Line("807A", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university]);
var GMB_NT_807B_EAST = new Line("807B", lineType_GMB_NT, "海柏花園", "黃竹灣", [MTR_mos_maonshan, MTR_mos_wukaisha]);
var GMB_NT_807B_WEST = new Line("807B", lineType_GMB_NT, "黃竹灣", "海柏花園", [MTR_mos_wukaisha, MTR_mos_maonshan]);
var GMB_NT_807C_EAST = new Line("807C", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_maonshan]);
var GMB_NT_807C_WEST = new Line("807C", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MTR_mos_hengon, MTR_erl_university]);
var GMB_NT_807K_EAST = new Line("807K", lineType_GMB_NT, "大學站", "井頭", [MTR_erl_university, MaOnShanRoad, MTR_mos_maonshan, MTR_mos_wukaisha]);
var GMB_NT_807K_WEST = new Line("807K", lineType_GMB_NT, "井頭", "大學站", [MTR_mos_wukaisha, MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university]);
var GMB_NT_807X = new Line("807X", lineType_GMB_NT, "大學站", "烏溪沙站", [MTR_erl_university, MTR_mos_wukaisha, MTR_erl_university]).markCircular();
// All 80*
var GMB_NT_NUM_80x = [GMB_NT_803_NORTH, GMB_NT_803_SOUTH, GMB_NT_803K_EAST, GMB_NT_803K_WEST, GMB_NT_804_EAST, GMB_NT_804_WEST, GMB_NT_807A_EAST, GMB_NT_807A_WEST, GMB_NT_807B_EAST, GMB_NT_807B_WEST, GMB_NT_807C_EAST, GMB_NT_807C_WEST, GMB_NT_807K_EAST, GMB_NT_807K_WEST, GMB_NT_807X];
// 81*
// All 81*
// 90* (currently 1 line but still)
// All 8**
var GMB_NT_NUM_8xx = [].concat(GMB_NT_NUM_80x);
// All NT
var GMB_NT_ALL = [].concat(GMB_NT_NUM_0xx, GMB_NT_NUM_8xx);
var GMB_HK18_ALL = GMB_NT_ALL;
// Cross-Harbour Lines
// 17*
var CHT_170_NORTH = new Line("170", lineType_HARBOUR, "華富(中)", "沙田站", [MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_erl_shatin]);
var CHT_170_SOUTH = new Line("170", lineType_HARBOUR, "沙田站", "華富(中)", [MTR_erl_shatin, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo]);
// All 17*
var CHT_NUM_17x_ALL = [CHT_170_NORTH, CHT_170_SOUTH];
// 18*
var CHT_182_NORTH = new Line("182", lineType_HARBOUR, "港澳瑪頭", "愉翠苑", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_mos_cityone]).setNotes("另有城巴邨巴88R來往第一城及中環");
var CHT_182_SOUTH = new Line("182", lineType_HARBOUR, "愉翠苑", "港澳瑪頭", [MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central]).setNotes("另有城巴邨巴88R來往第一城及中環");
// All 18*
var CHT_NUM_18x_ALL = [CHT_182_NORTH, CHT_182_SOUTH];
// All 1**
var CHT_NUM_1xx_ALL = [].concat(CHT_NUM_17x_ALL, CHT_NUM_18x_ALL);
// 30*
var CHT_307_NORTH = new Line("307", lineType_HARBOUR, "中環渡輪碼頭", "大埔中心", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_tinhau, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("東走特快；東隧特快；大老山特快；大埔特快");
var CHT_307_SOUTH = new Line("307", lineType_HARBOUR, "大埔中心", "中環渡輪碼頭", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]).setNotes("大埔特快；大老山特快；東隧特快；東走特快");
// All 30*
var CHT_NUM_30x_ALL = [CHT_307_NORTH, CHT_307_SOUTH];
// All 3**
var CHT_NUM_3xx_ALL = [].concat(CHT_NUM_30x_ALL);
// All Cross-Harbour Bus
var CHT_HK18_ALL = [].concat(CHT_NUM_1xx_ALL, CHT_NUM_3xx_ALL);
// All Section
var HK18_ALL_LINES = [].concat(WALK_HK18_ALL, TRAM_ALL, FERRY_HK18_ALL, KMB_HK18_ALL, CTB_HK18_ALL, NWFB_HK18_ALL, GMB_HK18_ALL, CHT_HK18_ALL);
