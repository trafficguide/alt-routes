/**
 * LINE LIBRARY
 * Stores all the known lines and their details in the form of many global variables.
 */

// Wildcard Section
/**
 * Do not abuse this special line.
 */
const WILDCARD_ANYLINE = new Line("", lineType_WALK, "", "", []);

// Walking Section

// Hong Kong Island

// Wan Chai Footbridge Spine
const WALK_HKI_WC_Ex = new Line("", lineType_WALK, "灣仔", "會展", [MTR_ill_wanchai, MTR_erl_exhibition]);
const WALK_HKI_Ex_WC = new Line("", lineType_WALK, "會展", "灣仔", [MTR_erl_exhibition, MTR_ill_wanchai]);
const WALK_HKI_Ce_Ad = new Line("", lineType_WALK, "中環", "金鐘", [MTR_ill_central, MTR_ill_admiralty]);
const WALK_HKI_Ad_Ce = new Line("", lineType_WALK, "金鐘", "中環", [MTR_ill_admiralty, MTR_ill_central]);
const WALK_HKI_CEN_ToHK = new Line("中環天橋系統", lineType_WALK, "德輔道中", "中環渡輪碼頭", [MTR_ill_central, MTR_tcl_hongkong]);
const WALK_HKI_CEN_ToCen = new Line("中環天橋系統", lineType_WALK, "中環渡輪碼頭", "德輔道中", [MTR_tcl_hongkong, MTR_ill_central]);

const WALK_HKI_CENTRAL_ALL = [WALK_HKI_WC_Ex, WALK_HKI_Ex_WC, WALK_HKI_Ce_Ad, WALK_HKI_Ad_Ce, WALK_HKI_CEN_ToHK, WALK_HKI_CEN_ToCen];

// HKU "The Stronghold"
const WALK_HKI_HKU_ToShore = new Line("", lineType_WALK, "HKU Centennial", "西寶城", [MTR_ill_hku, HKU_ShekTongTsui]);
const WALK_HKI_HKU_ToStronghold = new Line("", lineType_WALK, "西寶城", "HKU Centennial", [HKU_ShekTongTsui, MTR_ill_hku]);

const WALK_HKI_HKU_ALL = [WALK_HKI_HKU_ToShore, WALK_HKI_HKU_ToStronghold];

const WALK_HKI_ALL = [].concat(WALK_HKI_CENTRAL_ALL, WALK_HKI_HKU_ALL);

// Kowloon Peninsula

// Mong Kok
const WALK_KLP_MK_MKE_KLH = new Line("", lineType_WALK, "旺角東站", "九龍醫院", [MTR_erl_mongkokeast, KowloonHospital]);
const WALK_KLP_MK_KLH_MKE = new Line("", lineType_WALK, "九龍醫院", "旺角東站", [KowloonHospital, MTR_erl_mongkokeast]);
const WALK_KLP_MK_MK_TKT = new Line("", lineType_WALK, "旺角", "大角咀", [MTR_twl_mongkok, MTR_tcl_olympic]);
const WALK_KLP_MK_TKT_MK = new Line("", lineType_WALK, "大角咀", "旺角", [MTR_tcl_olympic, MTR_twl_mongkok]);

const WALK_KLP_MK_ALL = [WALK_KLP_MK_MKE_KLH, WALK_KLP_MK_KLH_MKE, WALK_KLP_MK_MK_TKT, WALK_KLP_MK_TKT_MK];

// Hung Hom Triangle
const WALK_KLP_HMT_HMT_WMP = new Line("", lineType_WALK, "何文田地鐵站", "黃埔花園", [MTR_ktl_homantin, MTR_ktl_whampoa]);
const WALK_KLP_HMT_WMP_HMT = new Line("", lineType_WALK, "黃埔花園", "何文田地鐵站", [MTR_ktl_whampoa, MTR_ktl_homantin]);
const WALK_KLP_HMT_HMT_HHM = new Line("", lineType_WALK, "何文田地鐵站", "紅磡站", [MTR_tml_homantin, MTR_tml_hunghom]);
const WALK_KLP_HMT_HHM_HMT = new Line("", lineType_WALK, "紅磡站", "何文田地鐵站", [MTR_tml_hunghom, MTR_tml_homantin]);
const WALK_KLP_HMT_HHM_WMP = new Line("", lineType_WALK, "紅磡站", "黃埔花園", [MTR_tml_hunghom, MTR_ktl_whampoa]);
const WALK_KLP_HMT_WMP_HHM = new Line("", lineType_WALK, "黃埔花園", "紅磡站", [MTR_ktl_whampoa, MTR_tml_hunghom]);

const WALK_KLP_HMT_WMP_ToPier = new Line("", lineType_WALK, "黃埔花園", "紅磡渡輪碼頭", [MTR_ktl_whampoa, HH_FerryPier]);
const WALK_KLP_HMT_WMP_FromPier = new Line("", lineType_WALK, "紅磡渡輪碼頭", "黃埔花園", [HH_FerryPier, MTR_ktl_whampoa]);

const WALK_KLP_HMT_ALL = [WALK_KLP_HMT_HMT_WMP, WALK_KLP_HMT_WMP_HMT, WALK_KLP_HMT_HMT_HHM, WALK_KLP_HMT_HHM_HMT, WALK_KLP_HMT_HHM_WMP, WALK_KLP_HMT_WMP_HHM, WALK_KLP_HMT_WMP_ToPier, WALK_KLP_HMT_WMP_FromPier];

// West Kowloon Chain
const WALK_KLP_WKL_CHAIN_EAST = new Line("西九四站連環", lineType_WALK, "九龍站", "佐敦站", [MTR_tcl_kowloon, MTR_hsr_westkowloon, MTR_tml_austin, MTR_twl_jordan]);
const WALK_KLP_WKL_CHAIN_WEST = new Line("西九四站連環", lineType_WALK, "佐敦站", "九龍站", [MTR_twl_jordan, MTR_tml_austin, MTR_hsr_westkowloon, MTR_tcl_kowloon]);

const WALK_KLP_WKL_ALL = [WALK_KLP_WKL_CHAIN_EAST, WALK_KLP_WKL_CHAIN_WEST];

// Sham Shui Po
const WALK_KLP_SSP_SSP_NC = new Line("", lineType_WALK, "深水埗", "南昌站", [MTR_twl_shamshuipo, MTR_tml_namcheong]);
const WALK_KLP_SSP_NC_SSP = new Line("", lineType_WALK, "南昌站", "深水埗", [MTR_tml_namcheong, MTR_twl_shamshuipo]);

const WALK_KLP_SSP_ALL = [WALK_KLP_SSP_SSP_NC, WALK_KLP_SSP_NC_SSP];

// Wong Tai Sin
const WALK_KLP_WTS_Uphill = new Line("", lineType_WALK, "黃大仙", "竹園", [MTR_ktl_wongtaisin, WTS_ChukYuen]);
const WALK_KLP_WTS_Downhill = new Line("", lineType_WALK, "竹園", "黃大仙", [WTS_ChukYuen, MTR_ktl_wongtaisin]);

const WALK_KLP_WTS_ALL = [WALK_KLP_WTS_Uphill, WALK_KLP_WTS_Downhill];

// Choi Hung Networks
const WALK_KLP_CH_TowardsBus = new Line("", lineType_WALK, "彩虹地鐵站", "彩虹巴士總站", [MTR_ktl_choihung, ChoiHungBusTerminus]);
const WALK_KLP_CH_TowardsMTR = new Line("", lineType_WALK, "彩虹巴士總站", "彩虹地鐵站", [ChoiHungBusTerminus, MTR_ktl_choihung]);
const WALK_KLP_CH_TowardsRichland = new Line("", lineType_WALK, "彩虹地鐵站", "麗晶花園", [MTR_ktl_choihung, PE_ChoiHung]);
const WALK_KLP_CH_RichlandReturn = new Line("", lineType_WALK, "麗晶花園", "彩虹地鐵站", [PE_ChoiHung, MTR_ktl_choihung]);

const WALK_KLP_CH_ALL = [WALK_KLP_CH_TowardsBus, WALK_KLP_CH_TowardsMTR, WALK_KLP_CH_TowardsRichland, WALK_KLP_CH_RichlandReturn];

const WALK_KLP_ALL = [].concat(WALK_KLP_MK_ALL, WALK_KLP_HMT_ALL, WALK_KLP_WKL_ALL, WALK_KLP_SSP_ALL, WALK_KLP_WTS_ALL, WALK_KLP_CH_ALL);

// New Territories (East)

// Shatin Matrix
const WALK_NTE_ST_STW = new Line("瀝源橋", lineType_WALK, "沙田市中心", "乙明邨", [ST_ShatinTownCenter, ST_JatMinChuen]);
const WALK_NTE_STW_ST = new Line("瀝源橋", lineType_WALK, "乙明邨", "沙田市中心", [ST_JatMinChuen, ST_ShatinTownCenter]);
const WALK_NTE_ST_LY_SK = new Line("沙燕橋", lineType_WALK, "瀝源邨", "沙角邨", [ST_YuenWo, MTR_mos_shatinwai]);
const WALK_NTE_ST_SK_LY = new Line("沙燕橋", lineType_WALK, "沙角邨", "瀝源邨", [MTR_mos_shatinwai, ST_YuenWo]);
const WALK_NTE_ST_LY_Cen = new Line("", lineType_WALK, "瀝源邨/禾輋邨", "沙田市中心", [ST_YuenWo, ST_ShatinTownCenter]);
const WALK_NTE_ST_Cen_LY = new Line("", lineType_WALK, "沙田市中心", "瀝源邨/禾輋邨", [ST_ShatinTownCenter, ST_YuenWo]);
const WALK_NTE_ST_WC_Sea = new Line("翠榕橋", lineType_WALK, "禾輋邨", "沙田海鮮舫", [ST_ShatinSeafood, ST_YuenWo]);
const WALK_NTE_ST_Sea_WC = new Line("翠榕橋", lineType_WALK, "沙田海鮮舫", "禾輋邨", [ST_YuenWo, ST_ShatinSeafood]);
const WALK_NTE_ST_CS = new Line("獅子橋", lineType_WALK, "沙田市中心", "秦石邨", [ST_ShatinTownCenter, MTR_mos_chekungtemple]);
const WALK_NTE_CS_ST = new Line("獅子橋", lineType_WALK, "秦石邨", "沙田市中心", [MTR_mos_chekungtemple, ST_ShatinTownCenter]);
const WALK_NTE_CS_YM = new Line("", lineType_WALK, "秦石邨", "乙明邨", [MTR_mos_chekungtemple, MTR_mos_shatinwai]);
const WALK_NTE_YM_CS = new Line("", lineType_WALK, "乙明邨", "秦石邨", [MTR_mos_shatinwai, MTR_mos_chekungtemple]);
const WALK_NTE_CS_SC = new Line("", lineType_WALK, "秦石邨", "新翠邨", [MTR_mos_chekungtemple, MTR_mos_taiwai]);
const WALK_NTE_SC_CS = new Line("", lineType_WALK, "新翠邨", "秦石邨", [MTR_mos_taiwai, MTR_mos_chekungtemple]);

const WALK_NTE_SHATIN_ALL = [WALK_NTE_ST_STW, WALK_NTE_STW_ST, WALK_NTE_ST_LY_SK, WALK_NTE_ST_SK_LY, WALK_NTE_ST_LY_Cen, WALK_NTE_ST_Cen_LY, WALK_NTE_ST_WC_Sea, WALK_NTE_ST_Sea_WC, WALK_NTE_ST_CS, WALK_NTE_CS_ST, WALK_NTE_CS_YM, WALK_NTE_YM_CS, WALK_NTE_CS_SC, WALK_NTE_SC_CS];

// Ma Liu Shui Messes
/*
const WALK_NTE_CUHK_ToShore = new Line("", lineType_WALK, "中大崇基門", "中大民主女神像", [TaiPoRoad_CUHK, MTR_erl_university]);
const WALK_NTE_CUHK_ToMountain = new Line("", lineType_WALK, "中大民主女神像", "中大崇基門", [MTR_erl_university, TaiPoRoad_CUHK]);

const WALK_NTE_CUHK_ALL = [WALK_NTE_CUHK_ToShore, WALK_NTE_CUHK_ToMountain];
*/

const WALK_NTE_ALL = [].concat(WALK_NTE_SHATIN_ALL);

// New Territories (West)

// Tsuen Wan Matrices

const WALK_NTW_TKT_TWSYS_NORTH = new Line("荃灣天橋系統", lineType_WALK, "荃灣西鐵站", "荃灣地鐵站", [MTR_tml_tsuenwanwest, MTR_twl_tsuenwan]);
const WALK_NTW_TKT_TWSYS_SOUTH = new Line("荃灣天橋系統", lineType_WALK, "荃灣地鐵站", "荃灣西鐵站", [MTR_twl_tsuenwan, MTR_tml_tsuenwanwest]);

const WALK_NTW_CO_TY = new Line("", lineType_WALK, "長安邨", "青衣站", [TY_CheungOnEstate, MTR_tcl_tsingyi]);
const WALK_NTW_TY_CO = new Line("", lineType_WALK, "青衣站", "長安邨", [MTR_tcl_tsingyi, TY_CheungOnEstate]);

const WALK_NTW_TKT_KCE_ToTWH = new Line("", lineType_WALK, "葵涌邨", "大窩口站", [TW_KwaiChungEstate, MTR_twl_taiwohau]);
const WALK_NTW_TKT_KCE_FromTWH = new Line("", lineType_WALK, "大窩口站", "葵涌邨", [MTR_twl_taiwohau, TW_KwaiChungEstate]);
const WALK_NTW_TKT_KCE_ToKH = new Line("", lineType_WALK, "葵涌邨", "葵興站", [TW_KwaiChungEstate, MTR_twl_kwaihing]);
const WALK_NTW_TKT_KCE_FromKH = new Line("", lineType_WALK, "葵興站", "葵涌邨", [MTR_twl_kwaihing, TW_KwaiChungEstate]);

const WALK_NTW_TKT_KH_ToCPR = new Line("", lineType_WALK, "葵興站", "青山公路 (葵涌)", [MTR_twl_kwaihing, CPRoad_KwaiChung]);
const WALK_NTW_TKT_KH_FromCPR = new Line("", lineType_WALK, "青山公路 (葵涌)", "葵興站", [CPRoad_KwaiChung, MTR_twl_kwaihing]);

const WALK_NTW_TSUENKWAITSING_ALL = [WALK_NTW_TKT_TWSYS_NORTH, WALK_NTW_TKT_TWSYS_SOUTH, WALK_NTW_CO_TY, WALK_NTW_TY_CO, WALK_NTW_TKT_KCE_ToTWH, WALK_NTW_TKT_KCE_FromTWH, WALK_NTW_TKT_KCE_ToKH, WALK_NTW_TKT_KCE_FromKH, WALK_NTW_TKT_KH_ToCPR, WALK_NTW_TKT_KH_FromCPR];

// Yuen Long
const WALK_NTW_YL_FTR_LP = new Line("", lineType_WALK, "豐年路", "朗屏站", [KCR_lrt_5_fungninroad, MTR_tml_longping]);
const WALK_NTW_YL_LP_FTR = new Line("", lineType_WALK, "豐年路", "朗屏站", [MTR_tml_longping, KCR_lrt_5_fungninroad]);

const WALK_NTW_YL_ALL = [WALK_NTW_YL_FTR_LP, WALK_NTW_YL_LP_FTR];

// Airport
const WALK_NTW_AIR_ToExpo = new Line("", lineType_WALK, "機場客運大樓", "博覽館", [MTR_aex_airport, MTR_aex_asiaworldexpo]);
const WALK_NTW_AIR_ToAirport = new Line("", lineType_WALK, "博覽館", "機場客運大樓", [MTR_aex_asiaworldexpo, MTR_aex_airport]);

const WALK_NTW_AIR_ALL = [WALK_NTW_AIR_ToExpo, WALK_NTW_AIR_ToAirport];

const WALK_NTW_ALL = [].concat(WALK_NTW_TSUENKWAITSING_ALL, WALK_NTW_YL_ALL, WALK_NTW_AIR_ALL);

const WALK_HK18_ALL = [].concat(WALK_HKI_ALL, WALK_KLP_ALL, WALK_NTE_ALL, WALK_NTW_ALL);

/**
 * Tram Section
 * Tram lines have no explicit name; they simply mark their destination, and off they go.
 */

const TRAM_1_EAST = new Line("筲箕灣", lineType_TRAM, "上環西港城", "筲箕灣", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const TRAM_1_WEST = new Line("西港城", lineType_TRAM, "筲箕灣", "上環西港城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
const TRAM_2_EAST = new Line("筲箕灣", lineType_TRAM, "跑馬地", "筲箕灣", [HappyValley, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint]);
const TRAM_2_WEST = new Line("跑馬地", lineType_TRAM, "筲箕灣", "跑馬地", [MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, HappyValley]);
const TRAM_3_EAST = new Line("北角", lineType_TRAM, "石塘咀", "北角", [HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint]);
const TRAM_3_WEST = new Line("石塘咀", lineType_TRAM, "北角", "石塘咀", [MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, HKU_ShekTongTsui]);
const TRAM_4_EAST = new Line("銅鑼灣", lineType_TRAM, "石塘咀", "銅鑼灣", [HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay]);
const TRAM_4_WEST = new Line("石塘咀", lineType_TRAM, "銅鑼灣", "石塘咀", [MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, HKU_ShekTongTsui]);
const TRAM_5_EAST = new Line("跑馬地", lineType_TRAM, "堅尼地城", "跑馬地", [MTR_ill_kennedytown, HKU_ShekTongTsui, ConnaughtRoadWest_Stop, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, HappyValley]);
const TRAM_5_WEST = new Line("堅尼地城", lineType_TRAM, "跑馬地", "堅尼地城", [HappyValley, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, ConnaughtRoadWest_Stop, HKU_ShekTongTsui, MTR_ill_kennedytown]);
const TRAM_6_EAST = new Line("筲箕灣", lineType_TRAM, "堅尼地城", "筲箕灣", [MTR_ill_kennedytown, HKU_ShekTongTsui, ConnaughtRoadWest_Stop, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const TRAM_6_WEST = new Line("堅尼地城", lineType_TRAM, "筲箕灣", "堅尼地城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, ConnaughtRoadWest_Stop, HKU_ShekTongTsui, MTR_ill_kennedytown]);

const TRAM_ALL = [TRAM_1_EAST, TRAM_1_WEST, TRAM_2_EAST, TRAM_2_WEST, TRAM_3_EAST, TRAM_3_WEST, TRAM_4_EAST, TRAM_4_WEST, TRAM_5_EAST, TRAM_5_WEST, TRAM_6_EAST, TRAM_6_WEST];

/**
 * Ferry Section
 * Ferry lines travel on water, so it is technically impossible to say that they follow a certain path.
 */

/**
 * Central -> Tsim Sha Tsui ferry.
 * 
 * Internal pathing marks Central instead of Hong Kong station for historical preservation.
 */
const FERRY_HARB_1_NORTH = new FerryLine("尖沙咀", lineType_FERRY, "中環碼頭", "尖沙咀碼頭", [MTR_ill_central, MTR_twl_tsimshatsui], 7).markFerryTravelCost(2).markCompany("starferry");
const FERRY_HARB_1_SOUTH = new FerryLine("中環", lineType_FERRY, "尖沙咀碼頭", "中環碼頭", [MTR_twl_tsimshatsui, MTR_ill_central], 7).markFerryTravelCost(2).markCompany("starferry");
const FERRY_HARB_2_NORTH = new FerryLine("尖沙咀", lineType_FERRY, "灣仔碼頭", "尖沙咀碼頭", [WC_FerryPier, MTR_twl_tsimshatsui], 10).markFerryTravelCost(2).markCompany("starferry");
const FERRY_HARB_2_SOUTH = new FerryLine("灣仔", lineType_FERRY, "尖沙咀碼頭", "灣仔碼頭", [MTR_twl_tsimshatsui, WC_FerryPier], 10).markFerryTravelCost(2).markCompany("starferry");

const FERRY_HARB_ALL = [FERRY_HARB_1_NORTH, FERRY_HARB_1_SOUTH, FERRY_HARB_2_NORTH, FERRY_HARB_2_SOUTH];

const FERRY_HK18_ALL = [].concat(FERRY_HARB_ALL);

// KMB Section

// 00*
const KMB_1_NORTH = new Line('1', lineType_KMB, '尖沙咀碼頭', '竹園邨', [MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MK_FlowerMarket, BoundaryPrince, MTR_ktl_lokfu, WTS_ChukYuen], 10).setNotes('經彌敦道、喇沙、九龍城、東頭邨');
const KMB_1_SOUTH = new Line('1', lineType_KMB, '竹園邨', '尖沙咀碼頭', [WTS_ChukYuen, MTR_ktl_lokfu, BoundaryPrince, MK_FlowerMarket, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui], 10).setNotes('經彌敦道、喇沙、九龍城、東頭邨');
const KMB_6_NORTH = new Line("6", lineType_KMB, "尖沙咀碼頭", "荔枝角", [MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 8);
const KMB_6_SOUTH = new Line("6", lineType_KMB, "荔枝角", "尖沙咀碼頭", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui], 8);
const KMB_6D_EAST = new Line("6D", lineType_KMB, "美孚", "牛頭角", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, MK_FlowerMarket, BoundaryPrince, PE_RegalOrientalHotel, SunPoKong_Inside, MTR_ktl_diamondhill, MTR_ktl_choihung, MTR_ktl_kowloonbay], 15);
const KMB_6D_WEST = new Line("6D", lineType_KMB, "牛頭角", "美孚", [MTR_ktl_kowloonbay, MTR_ktl_choihung, MTR_ktl_diamondhill, SunPoKong_Inside, PE_RegalOrientalHotel, BoundaryPrince, MK_FlowerMarket, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 15);

// All 00*
const KMB_NUM_00x_ALL = [KMB_1_NORTH, KMB_1_SOUTH, KMB_6_NORTH, KMB_6_SOUTH, KMB_6D_EAST, KMB_6D_WEST];

// 01*
const KMB_11D_EAST = new Line("11D", lineType_KMB, "樂富", "觀塘碼頭", [MTR_ktl_lokfu, BoundaryPrince, PE_RegalOrientalHotel, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KT_FerryPier], 20);
const KMB_11D_WEST = new Line("11D", lineType_KMB, "觀塘碼頭", "樂富", [KT_FerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, PE_RegalOrientalHotel, BoundaryPrince, MTR_ktl_lokfu], 20);

// All 01*
const KMB_NUM_01x_ALL = [KMB_11D_EAST, KMB_11D_WEST];

// 03*
const KMB_30X_NORTH = new Line("30X", lineType_KMB, "黃埔花園", "荃威花園", [MTR_ktl_whampoa, MTR_ktl_homantin, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, TW_TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking], 20);
const KMB_30X_SOUTH = new Line("30X", lineType_KMB, "荃威花園", "黃埔花園", [MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TW_TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_ktl_homantin, MTR_ktl_whampoa], 20);
const KMB_33A_EAST = new Line('33A', lineType_KMB, '荃灣(如心廣場)', '旺角(柏景灣)', [TW_NinaTowers, TW_KwaiChungEstate, MTR_twl_kwaihing, TW_LowerLaiKing, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_tcl_olympic], 22);
const KMB_33A_WEST = new Line('33A', lineType_KMB, '旺角(柏景灣)', '荃灣(如心廣場)', [MTR_tcl_olympic, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, TW_LowerLaiKing, MTR_twl_kwaifong, MTR_twl_kwaihing, TW_KwaiChungEstate, TW_NinaTowers], 22);
const KMB_35A_NORTH = new Line('35A', lineType_KMB, '尖東', '葵涌安蔭邨', [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, CPRoad_KwaiChung, TW_ShekLei], 13).setNotes('經青山公路往返安蔭');
const KMB_35A_SOUTH = new Line('35A', lineType_KMB, '葵涌安蔭邨', '尖東', [TW_ShekLei, CPRoad_KwaiChung, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_easttsimshatsui], 13).setNotes('經青山公路往返安蔭');
const KMB_36A_NORTH = new Line("36A", lineType_KMB, "長沙灣深旺道", "梨木樹", [MTR_tml_namcheong, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, TW_LowerLaiKing, MTR_twl_kwaifong, TW_LeiMukShueEstate], 20);
const KMB_36A_SOUTH = new Line("36A", lineType_KMB, "梨木樹", "長沙灣深旺道", [TW_LeiMukShueEstate, MTR_twl_kwaihing, TW_LowerLaiKing, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_tml_namcheong], 20);

// All 03*
const KMB_NUM_03x_ALL = [KMB_30X_NORTH, KMB_30X_SOUTH, KMB_33A_EAST, KMB_33A_WEST, KMB_35A_NORTH, KMB_35A_SOUTH, KMB_36A_NORTH, KMB_36A_SOUTH];

// 04*
// Negative rotation vector -> clockwise path
const KMB_40X_EAST = new Line("40X", lineType_KMB, "葵涌邨", "烏溪沙站", [TW_KwaiChungEstate, MTR_twl_kwaihing, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_YuenWo, ST_ShatinSeafood, ST_ShatinHospital, MTR_mos_taishuihang, MOS_HengHongStreet, MTR_mos_maonshan, MOS_KamYingCourt, MTR_mos_wukaisha], 13);
const KMB_40X_WEST = new Line("40X", lineType_KMB, "烏溪沙站", "葵涌邨", [MTR_mos_wukaisha, MOS_KamYingCourt, MTR_mos_maonshan, MOS_HengHongStreet, MTR_mos_taishuihang, ST_ShatinHospital, ST_ShatinSeafood, ST_YuenWo, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_kwaihing, TW_KwaiChungEstate], 13);
const KMB_43X_EAST = new Line("43X", lineType_KMB, "荃灣西站", "耀安", [MTR_tml_tsuenwanwest, TW_ChungOnStreet, TW_YiPeiChuen, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinSeafood, ST_ShatinHospital, MOS_ChevalierGarden, MTR_mos_hengon, MOS_HengHongStreet], 13);
const KMB_43X_WEST = new Line("43X", lineType_KMB, "耀安", "荃灣西站", [MOS_HengHongStreet, MTR_mos_hengon, MOS_ChevalierGarden, ST_ShatinHospital, ST_ShatinSeafood, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_YiPeiChuen, TW_ChungOnStreet, MTR_tml_tsuenwanwest], 13);
const KMB_46X_NEGATIVE = new Line("46X", lineType_KMB, "美孚", "顯徑", [MTR_twl_meifoo, MTR_twl_laiking, MTR_twl_kwaifong, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, MTR_mos_taiwai, ST_LungHangEstate, MTR_tml_hinkeng], 6);
const KMB_46X_POSITIVE = new Line("46X", lineType_KMB, "顯徑", "美孚", [MTR_tml_hinkeng, ST_LungHangEstate, MTR_mos_taiwai, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong, MTR_twl_laiking, MTR_twl_meifoo], 6);
const KMB_47A_EAST = new Line("47A", lineType_KMB, "葵芳南", "水泉澳", [MTR_twl_kwaifong, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, MTR_mos_shatinwai, ST_ShuiChuenO], 30);
const KMB_47A_WEST = new Line("47A", lineType_KMB, "水泉澳", "葵芳南", [ST_ShuiChuenO, MTR_mos_shatinwai, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 30).setNotes("早繁時間不經沙田市中心");
const KMB_47X_EAST = new Line("47X", lineType_KMB, "葵盛東", "秦石", [MTR_twl_kwaifong, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple], 8);
const KMB_47X_WEST = new Line("47X", lineType_KMB, "秦石", "葵盛東", [MTR_mos_chekungtemple, MTR_mos_shatinwai, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 8).setNotes("早繁時間不經沙田市中心");
const KMB_48X_EAST = new Line("48X", lineType_KMB, "灣景花園", "禾輋邨", [TW_BelvedereGarden, MTR_twl_tsuenking, MTR_twl_tsuenwan, MTR_twl_taiwohau, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, ST_YuenWo], 5);
const KMB_48X_WEST = new Line("48X", lineType_KMB, "禾輋邨", "灣景花園", [ST_YuenWo, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_taiwohau, MTR_twl_tsuenwan, MTR_twl_tsuenking, TW_BelvedereGarden], 5);
const KMB_49X_EAST = new Line("49X", lineType_KMB, "青衣碼頭", "沙田廣源", [TY_TsingYiFerryPier, TY_CheungOnEstate, TW_NinaTowers, MTR_twl_tsuenwan, TW_CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, ST_BelairGardens, MTR_mos_cityone], 8);
const KMB_49X_WEST = new Line("49X", lineType_KMB, "沙田廣源", "青衣碼頭", [MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_CheungPeiShanRoad, MTR_twl_tsuenwan, TW_NinaTowers, TY_CheungOnEstate, TY_TsingYiFerryPier], 8);

// All 04*
const KMB_NUM_04x_ALL = [KMB_40X_EAST, KMB_40X_WEST, KMB_43X_EAST, KMB_43X_WEST, KMB_46X_NEGATIVE, KMB_46X_POSITIVE, KMB_47A_EAST, KMB_47A_WEST, KMB_47X_EAST, KMB_47X_WEST, KMB_48X_EAST, KMB_48X_WEST, KMB_49X_EAST, KMB_49X_WEST];
// 06*
const KMB_64K_EAST = new Line("64K", lineType_KMB, "元朗(西)", "大埔墟站", [KCR_lrt_5_fungninroad, MTR_tml_yuenlong, KSR_KoPoTsuen, MTR_tml_kamsheungroad, KSR_YuenKongTsuen, KSR_SheungTsuen, Rural_Kadoorie, TaiPo_LamChuen, MTR_erl_taiwo, WanTauKokLane, MTR_erl_taipomarket]).setNotes("途經林錦公路");
const KMB_64K_WEST = new Line("64K", lineType_KMB, "大埔墟站", "元朗(西)", [MTR_erl_taipomarket,  MTR_erl_taiwo, TaiPo_LamChuen, Rural_Kadoorie, KSR_SheungTsuen, KSR_YuenKongTsuen, MTR_tml_kamsheungroad, KSR_KoPoTsuen, MTR_tml_yuenlong, KCR_lrt_5_fungninroad]).setNotes("途經林錦公路");
const KMB_67M_EAST = new Line("67M", lineType_KMB, "兆康苑", "葵芳站", [MTR_tml_siuhong, LingNanUniversity, KCR_lrt_2_primeview, KCR_lrt_2_puito, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, MTR_twl_tsuenking, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, MTR_twl_kwaifong], 10).setNotes("星期一至日 05:25-23:40");
const KMB_67M_WEST = new Line("67M", lineType_KMB, "葵芳站", "兆康苑", [MTR_twl_kwaifong, TW_KwongFaiWai, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_twl_tsuenking, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_2_puito, KCR_lrt_2_primeview, LingNanUniversity, MTR_tml_siuhong], 10).setNotes("星期一至日 06:10-00:40");
const KMB_68E_NORTH = new Line('68E', lineType_KMB, '青衣站', '元朗公園', [MTR_tcl_tsingyi, TY_TsingYiWest, TY_TingKauBridge, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, KSR_KoPoTsuen, MTR_tml_yuenlong, YL_Residence88, YL_YuenLongPark], 30).setNotes('經高埔村');
const KMB_68E_SOUTH = new Line('68E', lineType_KMB, '元朗公園', '青衣站', [YL_YuenLongPark, YL_Residence88, MTR_tml_yuenlong, KSR_KoPoTsuen, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TY_TingKauBridge, TY_TsingYiWest, MTR_tcl_tsingyi], 30).setNotes('經高埔村');
const KMB_68X_EAST = new Line('68X', lineType_KMB, '洪水橋(洪福邨)', '旺角(柏景灣)', [MTR_tml_hungshuikiu, KCR_lrt_4_hungshuikiu, KCR_lrt_4_pingshan, KCR_lrt_5_fungninroad, KCR_lrt_5_yuenlong, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TuenMunHighway_YauKomTau, TW_TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_tcl_olympic], 18).setNotes('每日05:25-00:25');
const KMB_68X_WEST = new Line('68X', lineType_KMB, '旺角(柏景灣)', '洪水橋(洪福邨)', [MTR_tcl_olympic, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, TW_TsuenWanRoad, TuenMunHighway_YauKomTau, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, KCR_lrt_5_yuenlong, KCR_lrt_5_fungninroad, KCR_lrt_4_pingshan, KCR_lrt_4_hungshuikiu, MTR_tml_hungshuikiu], 18).setNotes('每日06:00-01:05');
const KMB_69M_NORTH = new Line('69M', lineType_KMB, '葵芳鐵路站', '天水圍市中心', [MTR_twl_kwaifong, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_twl_tsuenking, TuenMunHighway_YauKomTau, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, YuenLongHighway, LongTinRoad, MTR_tml_tinshuiwai, KCR_lrt_4_tinshui, KCR_lrt_4_tinwing], 15).setNotes('星期一至日 06:15-00:45');
const KMB_69M_SOUTH = new Line('69M', lineType_KMB, '天水圍市中心', '葵芳鐵路站', [KCR_lrt_4_tinwing, KCR_lrt_4_tinshui, MTR_tml_tinshuiwai, LongTinRoad, YuenLongHighway, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TuenMunHighway_YauKomTau, MTR_twl_tsuenking, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, MTR_twl_kwaifong], 15).setNotes('星期一至日 05:10-23:55');
// All 06*
const KMB_NUM_06x_ALL = [KMB_64K_EAST, KMB_64K_WEST, KMB_67M_EAST, KMB_67M_WEST, KMB_68E_NORTH, KMB_68E_SOUTH, KMB_68X_EAST, KMB_68X_WEST, KMB_69M_NORTH, KMB_69M_SOUTH];
// 07*
const KMB_72_NORTH = new Line("72", lineType_KMB, "長沙灣", "大埔太和", [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, MTR_erl_shatin, ST_YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo], 20);
const KMB_72_SOUTH = new Line("72", lineType_KMB, "大埔太和", "長沙灣", [MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, ST_YuenWo, MTR_erl_shatin, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok], 20);
const KMB_72A_NORTH = new Line("72A", lineType_KMB, "大圍站", "大埔工業邨", [MTR_erl_taiwai, MTR_mos_chekungtemple, ST_JatMinChuen, ST_YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad], 30).setNotes("設有雙程分段收費");
const KMB_72A_SOUTH = new Line("72A", lineType_KMB, "大埔工業邨", "大圍站", [WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, ST_YuenWo, ST_JatMinChuen, MTR_erl_taiwai], 30).setNotes("設有雙程分段收費");
const KMB_72X_NORTH = new Line("72X", lineType_KMB, "旺角(柏景灣)", "大埔中心", [MTR_tcl_olympic, MTR_ktl_mongkok, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_72X_SOUTH = new Line("72X", lineType_KMB, "大埔中心", "旺角(柏景灣)", [WanTauKokLane, KwongFukEstate, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_ktl_mongkok, MTR_tcl_olympic]).setNotes("大埔特快");
const KMB_73_NORTH = new Line("73", lineType_KMB, "大埔工業邨", "粉嶺華明", [KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, FL_WahMing]).setNotes("非辦工時間不入工業邨");
const KMB_73_SOUTH = new Line("73", lineType_KMB, "粉嶺華明", "大埔工業邨", [FL_WahMing, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane]).setNotes("非辦工時間不入工業邨");
const KMB_73A_NORTH = new Line("73A", lineType_KMB, "愉翠苑", "粉嶺華明", [MTR_mos_cityone, MTR_erl_fotan, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, FL_WahMing], 30);
const KMB_73A_SOUTH = new Line("73A", lineType_KMB, "粉嶺華明", "愉翠苑", [FL_WahMing, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, MTR_erl_fotan, MTR_mos_cityone], 30).setNotes("設有雙程分段收費");
const KMB_73X_NORTH = new Line("73X", lineType_KMB, "荃灣(如心廣場)", "富善邨", [TW_NinaTowers, TW_ChungOnStreet, MTR_twl_taiwohau, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_73X_SOUTH = new Line("73X", lineType_KMB, "富善邨", "荃灣(如心廣場)", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_taiwohau, TW_ChungOnStreet, TW_NinaTowers]).setNotes("大埔特快");
const KMB_74A_NORTH = new Line("74A", lineType_KMB, "啟業", "太和", [KowloonBayCommercial, HungNgokHouse_ChoiHung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ST_JatMinChuen, ST_BelairGardens, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, MTR_erl_taiwo], 60).setNotes("班次疏落");
const KMB_74A_SOUTH = new Line("74A", lineType_KMB, "太和", "啟業", [MTR_erl_taiwo, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, ST_BelairGardens, ST_JatMinChuen, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, ChoiHungBusTerminus, KowloonBayCommercial], 60).setNotes("班次疏落");
// All 07*
const KMB_NUM_07x_ALL = [KMB_72_NORTH, KMB_72_SOUTH, KMB_72A_NORTH, KMB_72A_SOUTH, KMB_73_NORTH, KMB_73_SOUTH, KMB_73A_NORTH, KMB_73A_SOUTH, KMB_73X_NORTH, KMB_73X_SOUTH, KMB_74A_NORTH, KMB_74A_SOUTH];
// 08*
const KMB_80_NORTH = new Line('80', lineType_KMB, '觀塘碼頭', '美林', [KT_FerryPier, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnelHighway, ST_LungHangEstate, MTR_tml_hinkeng, MTR_erl_taiwai, TaiPoRoad_MeiLam], 10);
const KMB_80_SOUTH = new Line('80', lineType_KMB, '美林', '觀塘碼頭', [MTR_erl_taiwai, MTR_tml_hinkeng, ST_LungHangEstate, LionRockTunnelHighway, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KT_FerryPier], 10);
const KMB_80K_EAST = new Line("80K", lineType_KMB, "新翠", "愉翠苑", [MTR_erl_taiwai, TaiPoRoad_MeiLam, ST_ShatinTownCenter, ST_YuenWo, MTR_mos_cityone], 15);
const KMB_80K_WEST = new Line("80K", lineType_KMB, "愉翠苑", "新翠", [MTR_mos_cityone, ST_YuenWo, ST_ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai], 15);
const KMB_80M_NORTH = new Line("80M", lineType_KMB, "九龍塘站", "穗禾苑", [MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ST_ShatinTownCenter, ST_YuenWo, FoTanTsuen], 30);
const KMB_80M_SOUTH = new Line("80M", lineType_KMB, "穗禾苑", "九龍塘站", [FoTanTsuen, ST_YuenWo, ShatinTownHall, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong], 30);
const KMB_80X_EAST = new Line('80X', lineType_KMB, '沙田(秦石)', '觀塘碼頭', [MTR_mos_chekungtemple, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KT_FerryPier], 10).setNotes('經觀塘道、彩虹、大老山隧道');
const KMB_80X_WEST = new Line('80X', lineType_KMB, '觀塘碼頭', '沙田(秦石)', [KT_FerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_mos_chekungtemple], 10).setNotes('經觀塘道、彩虹、大老山隧道');
const KMB_81_NORTH = new Line("81", lineType_KMB, "西九龍站", "禾輋", [MTR_hsr_westkowloon, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, ST_ShatinTownCenter, ST_YuenWo]);
const KMB_81_SOUTH = new Line("81", lineType_KMB, "禾輋", "西九龍站", [ST_YuenWo, ST_ShatinTownCenter, TaiPoRoad_MeiLam, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_hsr_westkowloon]);
const KMB_81C_NORTH = new Line("81C", lineType_KMB, "尖東麼地道", "耀安", [MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, ST_JatMinChuen, ST_BelairGardens, ST_ShatinSeafood, MOS_ChevalierGarden, ST_ShatinHospital, MTR_mos_hengon, MOS_HengHongStreet], 15);
const KMB_81C_SOUTH = new Line("81C", lineType_KMB, "耀安", "尖東麼地道", [MOS_HengHongStreet, MTR_mos_hengon, MOS_ChevalierGarden, ST_ShatinHospital, ST_ShatinSeafood, ST_BelairGardens, ST_JatMinChuen, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui], 15);
const KMB_81K_NORTH = new Line("81K", lineType_KMB, "新田圍", "穗禾苑", [ST_SunTinWai, MTR_mos_chekungtemple, MTR_mos_shatinwai, ST_ShatinTownCenter, ST_YuenWo, FoTanTsuen], 10);
const KMB_81K_SOUTH = new Line("81K", lineType_KMB, "穗禾苑", "新田圍", [FoTanTsuen, ST_YuenWo, ST_ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple, ST_SunTinWai], 10);
const KMB_82X = new Line('82X', lineType_KMB, '濱景花園', '黃大仙', [MTR_mos_cityone, ST_KwongYuen, OldTatesTunnel_Interchange, OldTatesTunnel, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, OldTatesTunnel, OldTatesTunnel_Interchange, ST_KwongYuen, MTR_mos_cityone], 12).markCircular();
const KMB_83K = new Line("83K", lineType_KMB, "沙田黃泥頭", "沙田市中心", [ST_KwongYuen, HangSengUniversity, MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, ST_ShatinTownCenter, ST_YuenWo, MTR_mos_cityone, HangSengUniversity, ST_KwongYuen]).markCircular();
const KMB_84M_NORTH = new Line('84M', lineType_KMB, '樂富', '富安花園', [MTR_ktl_lokfu, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_cityone, ST_ShatinHospital, MOS_ChevalierGarden], 20);
const KMB_84M_SOUTH = new Line('84M', lineType_KMB, '富安花園', '樂富', [MOS_ChevalierGarden, ST_ShatinHospital, MTR_mos_cityone, OldTatesTunnel_Interchange, OldTatesTunnel, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, MTR_ktl_lokfu], 20);
const KMB_85A_NORTH = new Line('85A', lineType_KMB, '九龍城碼頭', '沙田廣源邨', [KLC_FerryPier, MTR_tml_sungwongtoi, BoundaryPrince, MTR_ktl_lokfu, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ST_SunTinWai, MTR_mos_shatinwai, ST_BelairGardens, MTR_mos_cityone, HangSengUniversity, ST_KwongYuen], 25).setNotes('經浸會大學');
const KMB_85A_SOUTH = new Line('85A', lineType_KMB, '沙田廣源邨', '九龍城碼頭', [ST_KwongYuen, HangSengUniversity, MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, MTR_mos_shatinwai, ST_SunTinWai, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_lokfu, BoundaryPrince, MTR_tml_sungwongtoi, KLC_FerryPier], 25).setNotes('經浸會大學');
const KMB_85K_NORTH = new Line("85K", lineType_KMB, "沙田站", "恆安", [MTR_erl_shatin, ST_YuenWo, ST_ShatinSeafood, ST_ShatinHospital, MOS_ChevalierGarden, MTR_mos_hengon], 15);
const KMB_85K_SOUTH = new Line("85K", lineType_KMB, "恆安", "沙田站", [MTR_mos_hengon, MOS_ChevalierGarden, ST_ShatinHospital, ST_ShatinSeafood, ST_YuenWo, MTR_erl_shatin], 15);
const KMB_86_EAST = new Line('86', lineType_KMB, '美孚', '沙田(黃泥頭)', [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_ktl_shekkipmei, ChingCheungRoad_BeaconHill, LionRockTunnel, LionRockTunnelHighway, ST_SunTinWai, ST_ShatinTownCenter, ST_YuenWo, ST_ShatinSeafood, MTR_mos_cityone, HangSengUniversity, ST_KwongYuen], 20).setNotes('經石硤尾、獅隧、沙田市中心、第一城');
const KMB_86_WEST = new Line('86', lineType_KMB, '沙田(黃泥頭)', '美孚', [ST_KwongYuen, HangSengUniversity, MTR_mos_cityone, ST_ShatinSeafood, ST_YuenWo, ShatinTownHall, ST_SunTinWai, LionRockTunnelHighway, LionRockTunnel, ChingCheungRoad_BeaconHill, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 20).setNotes('經深水埗、石硤尾、獅隧、沙田市中心、第一城');
const KMB_86A_NORTH = new Line('86A', lineType_KMB, '長沙灣(甘泉街)', '沙田圍', [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, ChingCheungRoad_BeaconHill, LionRockTunnel, LionRockTunnelHighway, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai], 20);
const KMB_86A_SOUTH = new Line('86A', lineType_KMB, '沙田圍', '長沙灣(甘泉街)', [MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnelHighway, LionRockTunnel, ChingCheungRoad_BeaconHill, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok], 20);
const KMB_86C_EAST = new Line('86C', lineType_KMB, '長沙灣', '馬鞍山(利安)', [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, KowloonTongCornwall, LionRockTunnel, LionRockTunnelHighway, ST_SunTinWai, ST_JatMinChuen, ST_BelairGardens, ST_ShatinSeafood, ST_ShatinHospital, MTR_mos_taishuihang, MOS_HengHongStreet, MTR_mos_maonshan, MOS_KamYingCourt, MOS_LeeOnEstate], 15).setNotes('經濱景花園、沙乙博、獅隧、歌和老街、石硤尾、深水埗');
const KMB_86C_WEST = new Line('86C', lineType_KMB, '馬鞍山(利安)', '長沙灣', [MOS_LeeOnEstate, MOS_KamYingCourt, MTR_mos_maonshan, MOS_HengHongStreet, MTR_mos_taishuihang, ST_ShatinHospital, ST_ShatinSeafood, ST_BelairGardens, ST_JatMinChuen, ST_SunTinWai, LionRockTunnelHighway, LionRockTunnel, KowloonTongCornwall, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok], 15).setNotes('經濱景花園、沙乙博、獅隧、歌和老街、石硤尾、深水埗');
const KMB_87D_NORTH = new Line("87D", lineType_KMB, "紅磡", "錦英苑", [MTR_erl_hunghom, MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_ktl_yaumatei, MTR_ktl_mongkok, MTR_ktl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ST_ShatinSeafood, ST_ShatinHospital, MTR_mos_taishuihang, MOS_HengHongStreet, MTR_mos_maonshan, MOS_KamYingCourt], 10);
const KMB_87D_SOUTH = new Line("87D", lineType_KMB, "錦英苑", "紅磡", [MOS_KamYingCourt, MTR_mos_maonshan, MOS_HengHongStreet, MTR_mos_taishuihang, ST_ShatinHospital, ST_ShatinSeafood, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui, MTR_erl_hunghom], 10);
const KMB_87K = new Line("87K", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, MOS_HengHongStreet, MTR_mos_maonshan, MOS_KamYingCourt, MTR_mos_maonshan, MOS_HengHongStreet, MTR_erl_university], 8).markCircular();
const KMB_87S = new Line("87S", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, MOS_KamYingCourt, MaOnShanRoad, MTR_erl_university], 10).markCircular();
const KMB_88K_NORTH = new Line("88K", lineType_KMB, "顯徑", "駿景園", [MTR_tml_hinkeng, ST_LungHangEstate, MTR_erl_taiwai, TaiPoRoad_MeiLam, ST_ShatinTownCenter, ST_YuenWo, MTR_erl_fotan, ST_RoyalAscot], 12);
const KMB_88K_SOUTH = new Line("88K", lineType_KMB, "駿景園", "顯徑", [ST_RoyalAscot, MTR_erl_fotan, ST_YuenWo, ST_ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai, ST_LungHangEstate, MTR_tml_hinkeng], 12);
const KMB_88X_MORNING = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, ST_YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, ST_YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("早晨模式，東九龍首站為九龍灣站");
const KMB_88X_AFTERNOON = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, ST_YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, ST_YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("黃昏模式，東九龍首站為平田");
const KMB_89_NORTH = new Line('89', lineType_KMB, '觀塘站', '瀝源', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, ST_SunTinWai, ST_ShatinTownCenter, ST_YuenWo], 12);
const KMB_89_SOUTH = new Line('89', lineType_KMB, '瀝源', '觀塘站', [ST_YuenWo, ShatinTownHall, ST_SunTinWai, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 12);
const KMB_89B_EAST = new Line('89B', lineType_KMB, '沙田圍', '觀塘站', [MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnelHighway, LionRockTunnel, MTR_ktl_wongtaisin, SunPoKong_Inside, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 17);
const KMB_89B_WEST = new Line('89B', lineType_KMB, '觀塘站', '沙田圍', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, SunPoKong_Inside, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnelHighway, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai], 17);
const KMB_89X_SOUTH = new Line('89X', lineType_KMB, '沙田站', '觀塘(翠屏道) ', [MTR_erl_shatin, ST_BelairGardens, MTR_mos_cityone, OldTatesTunnel_Interchange, OldTatesTunnel, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 15).setNotes('星期一至日 05:40-00:00');
const KMB_89X_NORTH = new Line('89X', lineType_KMB, '觀塘(翠屏道) ', '沙田站', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, MTR_erl_shatin], 15).setNotes('星期一至日 05:50-00:00');
// All 08*
const KMB_NUM_08x_ALL = [KMB_80_NORTH, KMB_80_SOUTH, KMB_80K_EAST, KMB_80K_WEST, KMB_80M_NORTH, KMB_80M_SOUTH, KMB_80X_EAST, KMB_80X_WEST, KMB_81_NORTH, KMB_81_SOUTH, KMB_81C_NORTH, KMB_81C_SOUTH, KMB_81K_NORTH, KMB_81K_SOUTH, KMB_82X, KMB_83K, KMB_84M_NORTH, KMB_84M_SOUTH, KMB_85A_NORTH, KMB_85A_NORTH, KMB_85K_NORTH, KMB_85K_SOUTH, KMB_86_EAST, KMB_86_WEST, KMB_86A_NORTH, KMB_86A_SOUTH, KMB_86C_EAST, KMB_86C_WEST, KMB_87D_NORTH, KMB_87D_SOUTH, KMB_87K, KMB_87S, KMB_88K_NORTH, KMB_88K_SOUTH, KMB_88X_MORNING, KMB_88X_AFTERNOON, KMB_89_NORTH, KMB_89_SOUTH, KMB_89B_EAST, KMB_89B_WEST, KMB_89X_NORTH, KMB_89X_SOUTH];

// 09*
const KMB_98A = new Line("98A", lineType_KMB, "坑口北", "牛頭角站", [MTR_tko_hanghau, MTR_tko_polam, KT_Anderson, KT_SauMauPing, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KT_SauMauPing, KT_Anderson, MTR_tko_polam, MTR_tko_hanghau], 12).markCircular();
const KMB_98C_EAST = new Line('98C', lineType_KMB, '美孚', '坑口北', [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_erl_mongkokeast, KowloonHospital, KLC_ArgyleStreet, PE_RegalOrientalHotel, PE_SunPoKong, KowloonBayFlyover, KwunTongBypass, KT_Anderson, TKO_HongSingGarden, MTR_tko_polam, MTR_tko_hanghau], 12).setNotes('經觀塘繞道 (不入觀塘)');
const KMB_98C_WEST = new Line('98C', lineType_KMB, '坑口北', '美孚', [MTR_tko_hanghau, MTR_tko_polam, TKO_HongSingGarden, KT_Anderson, KwunTongBypass, KowloonBayFlyover, PE_SunPoKong, PE_RegalOrientalHotel, KLC_ArgyleStreet, KowloonHospital, MTR_erl_mongkokeast, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 12).setNotes('經觀塘繞道 (不入觀塘)');
// All 09*
const KMB_NUM_09x_ALL = [KMB_98A, KMB_98C_EAST, KMB_98C_WEST];

// All 0**
const KMB_NUM_0xx_ALL = [].concat(KMB_NUM_00x_ALL, KMB_NUM_01x_ALL, KMB_NUM_03x_ALL, KMB_NUM_04x_ALL, KMB_NUM_06x_ALL, KMB_NUM_07x_ALL, KMB_NUM_08x_ALL, KMB_NUM_09x_ALL);

// 21*
const KMB_215X_EAST = new Line('215X', lineType_KMB, '九龍站', '藍田(廣田邨)', [MTR_tcl_kowloon, MTR_tml_austin, MTR_tml_easttsimshatsui, MTR_tml_hunghom, MTR_tml_homantin, ToKwaWanFlyover, KaiTakTunnel, HKITCE, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin], 10).setNotes('經觀塘、九龍灣展貿、機隧；繁忙時間不停何文田站');
const KMB_215X_WEST = new Line('215X', lineType_KMB, '藍田(廣田邨)', '九龍站', [MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, HKITCE, KaiTakTunnel, ToKwaWanFlyover, MTR_tml_homantin, MTR_tml_hunghom, MTR_tml_easttsimshatsui, MTR_tml_austin,  MTR_tcl_kowloon], 10).setNotes('經觀塘、九龍灣展貿、機隧；繁忙時間不停何文田站');
const KMB_216M = new Line('216M', lineType_KMB, '藍田站', '油塘', [MTR_ktl_lamtin, MTR_ktl_yautong], 15).markCircular().setNotes('雙向經碧雲道(藍田半山)');

// All 21*
const KMB_NUM_21x_ALL = [KMB_215X_EAST, KMB_215X_WEST, KMB_216M];

// 23*
const KMB_234X_NORTH = new Line("234X", lineType_KMB, "尖東麼地道", "灣景花園", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_tml_meifoo, LaiKingChokePoint, TW_TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking, TW_BelvedereGarden], 15); 
const KMB_234X_SOUTH = new Line("234X", lineType_KMB, "灣景花園", "尖東麼地道", [TW_BelvedereGarden, MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TW_TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_easttsimshatsui], 15); 

// All 23*
const KMB_NUM_23x_ALL = [KMB_234X_NORTH, KMB_234X_SOUTH];
// 24*
const KMB_249X_EAST = new Line('249X', lineType_KMB, '青衣站', '沙田 (博康)', [MTR_tcl_tsingyi, TY_TsingYiWest, TY_CheungTsingEstate, TY_SouthBridge, LaiKingChokePoint, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, MTR_erl_taiwai, MTR_mos_chekungtemple, ST_ShatinTownCenter, MTR_mos_shatinwai], 25).setNotes('經長青邨、青沙公路');
const KMB_249X_WEST = new Line('249X', lineType_KMB, '沙田 (博康)', '青衣站', [MTR_mos_shatinwai, ShatinTownHall, MTR_mos_chekungtemple, MTR_mos_taiwai, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, LaiKingChokePoint, TY_SouthBridge, TY_CheungTsingEstate, TY_TsingYiWest, MTR_tcl_tsingyi], 25).setNotes('經長青邨、青沙公路');
// All 24*
const KMB_NUM_24x_ALL = [KMB_249X_EAST, KMB_249X_WEST];
// 25*
const KMB_251A = new Line('251A', lineType_KMB, '錦上路站', '上村', [MTR_tml_kamsheungroad, TaiLamTunnel_Interchange, KSR_YuenKongTsuen, KSR_SheungTsuen, KSR_YuenKongTsuen, TaiLamTunnel_Interchange, MTR_tml_kamsheungroad], 20).markCircular().setNotes('繞經元崗村');
const KMB_251B = new Line('251B', lineType_KMB, '八鄉路', '上村', [TaiLamTunnel_Interchange, MTR_tml_kamsheungroad, KSR_KamTinCore, KSR_PatHeungPolice, KSR_SheungTsuen, KSR_PatHeungPolice, KSR_KamTinCore, MTR_tml_kamsheungroad, TaiLamTunnel_Interchange], 20).markCircular().setNotes('繞經錦田街市');
// All 25*
const KMB_NUM_25x_ALL = [KMB_251A, KMB_251B];
// 26*
const KMB_260X_EAST = new Line('260X', lineType_KMB, '寶田', '紅磡站', [KCR_lrt_3_tinking, KCR_lrt_2_taihing, KCR_lrt_2_primeview, TM_TuenMunTownCenter, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, WestKowloonHighway, MTR_tml_austin, MTR_tml_easttsimshatsui, MTR_tml_hunghom], 13).setNotes('特快線；經建生');
const KMB_260X_WEST = new Line('260X', lineType_KMB, '紅磡站', '寶田', [MTR_tml_hunghom, MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_tml_austin, WestKowloonHighway, TY_CheungTsingTunnel, TY_TingKauBridge, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, TM_TuenMunTownCenter, KCR_lrt_2_primeview, KCR_lrt_2_taihing, KCR_lrt_3_tinking], 13).setNotes('特快線；經建生');
const KMB_263_EAST = new Line("263", lineType_KMB, "屯門站", "沙田站", [MTR_tml_tuenmun, TM_TuenMunTownCenter, KCR_lrt_1_samshing, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, TW_CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, MTR_erl_shatin], 12).setNotes("經豐景圍、安定、市中心");
const KMB_263_WEST = new Line("263", lineType_KMB, "沙田站", "屯門站", [MTR_erl_shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_CheungPeiShanRoad, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_1_samshing, TM_TuenMunTownCenter, MTR_tml_tuenmun], 12).setNotes("經豐景圍、安定、市中心");
const KMB_263A_MORNING = new Line('263A', lineType_KMB, '屯門站', '香港科學園第三期', [MTR_tml_tuenmun, KCR_lrt_1_samshing, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ST_ShatinSeafood, MTR_erl_university, SciencePark], 1440).markCommuter().setNotes('單班車0725開出；經濱景花園、大學站，不停城門隧道轉車站');
const KMB_263A_AFTERNOON = new Line('263A', lineType_KMB, '香港科學園第三期', '屯門站', [SciencePark, MTR_erl_university, ST_ShatinSeafood, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_CheungPeiShanRoad, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_1_samshing, MTR_tml_tuenmun], 1440).markCommuter().setNotes('單班車1820開出；經、大學站、鄉議局大樓');
const KMB_269B_NORTH = new Line('269B', lineType_KMB, '紅磡(紅鸞道)', '天水圍市中心', [HH_FerryPier, MTR_tml_hunghom, MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_tml_austin, WestKowloonHighway, LaiKingChokePoint, TY_CheungTsingTunnel, TY_TingKauBridge, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, YuenLongHighway, LongTinRoad, MTR_tml_tinshuiwai, KCR_lrt_4_tinshui, KCR_lrt_4_tinwing], 20).setNotes('天水圍特快 (不經元朗)');
const KMB_269B_SOUTH = new Line('269B', lineType_KMB, '天水圍市中心', '紅磡(紅鸞道)', [KCR_lrt_4_tinwing, KCR_lrt_4_tinshui, MTR_tml_tinshuiwai, LongTinRoad, YuenLongHighway, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, WestKowloonHighway, MTR_tml_austin, MTR_tml_easttsimshatsui, HH_FerryPier], 20).setNotes('天水圍特快 (不經元朗)');
const KMB_269C_EAST = new Line('269C', lineType_KMB, '天水圍市中心', '觀塘碼頭', [KCR_lrt_4_tinwing, KCR_lrt_4_tinshui, MTR_tml_tinshuiwai, LongTinRoad, YuenLongHighway, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, ChingCheungRoad_Other, ChingCheungRoad_BeaconHill, MTR_ktl_wongtaisin, SunPoKong_Inside, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KT_FerryPier], 10).setNotes('天水圍特快 (不經元朗)');
const KMB_269C_WEST = new Line('269C', lineType_KMB, '觀塘碼頭', '天水圍市中心', [KT_FerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, ChingCheungRoad_BeaconHill, ChingCheungRoad_Other, LaiKingChokePoint, TY_CheungTsingTunnel, TY_TingKauBridge, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, YuenLongHighway, LongTinRoad, MTR_tml_tinshuiwai, KCR_lrt_4_tinshui, KCR_lrt_4_tinwing], 10).setNotes('天水圍特快 (不經元朗)');
const KMB_269D_EAST = new Line('269D', lineType_KMB, '天富', '瀝源', [KCR_lrt_4_tinwing, KCR_lrt_5A_tinyat, KCR_lrt_4_tinshui, MTR_tml_tinshuiwai, LongTinRoad, KCR_lrt_5_fungninroad, MTR_tml_yuenlong, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TuenMunHighway_YauKomTau, TW_CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, ST_YuenWo], 15).setNotes('經元朗');
const KMB_269D_WEST = new Line('269D', lineType_KMB, '瀝源', '天富', [ST_YuenWo, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_CheungPeiShanRoad, TuenMunHighway_YauKomTau, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, MTR_tml_yuenlong, KCR_lrt_5_fungninroad, LongTinRoad, MTR_tml_tinshuiwai, KCR_lrt_4_tinshui, KCR_lrt_5A_tinyat, KCR_lrt_4_tinwing], 15).setNotes('經元朗');
// All 26*
const KMB_NUM_26x_ALL = [KMB_260X_EAST, KMB_260X_WEST, KMB_263_EAST, KMB_263_WEST, KMB_263A_MORNING, KMB_263A_AFTERNOON, KMB_269B_NORTH, KMB_269B_SOUTH, KMB_269C_EAST, KMB_269C_WEST, KMB_269D_EAST, KMB_269D_WEST];

// 27*
const KMB_270A_NORTH = new Line("270A", lineType_KMB, "尖東麼地道", "上水", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, ToloHighway_TaiPo, FanlingHighway_LamTsuen, FL_WahMing, MTR_erl_fanling, MTR_erl_sheungshui]);
const KMB_270A_SOUTH = new Line("270A", lineType_KMB, "上水", "尖東麼地道", [MTR_erl_sheungshui, MTR_erl_fanling, FL_WahMing, FanlingHighway_Interchange, FanlingHighway_LamTsuen, ToloHighway_TaiPo, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui]);
const KMB_273 = new Line("273", lineType_KMB, "粉嶺華明", "粉嶺站", [FL_WahMing, MTR_erl_fanling, FL_WahMing]).markCircular();
const KMB_273A = new Line("273A", lineType_KMB, "彩園", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, FL_WahMing, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
const KMB_273D = new Line("273D", lineType_KMB, "上水", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, FL_WahMing, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
const KMB_278X_NORTH = new Line('278X', lineType_KMB, '荃灣（如心廣場）', '上水', [TW_NinaTowers, TW_ChungOnStreet, MTR_twl_taiwohau, TW_LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ToloHighway_Coastal, ToloHighway_TaiPo, FanlingHighway_LamTsuen, FL_WahMing, MTR_erl_fanling, MTR_erl_sheungshui], 10).setNotes('經華明');
const KMB_278X_SOUTH = new Line('278X', lineType_KMB, '上水', '荃灣（如心廣場）', [MTR_erl_sheungshui, MTR_erl_fanling, FL_WahMing, FanlingHighway_Interchange, FanlingHighway_LamTsuen, ToloHighway_TaiPo, ToloHighway_Coastal, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, TW_LeiMukShueEstate, MTR_twl_taiwohau, TW_ChungOnStreet, TW_NinaTowers], 10).setNotes('經華明');
// All 27*
const KMB_NUM_27x_ALL = [KMB_270A_NORTH, KMB_270A_SOUTH, KMB_273, KMB_273A, KMB_273D, KMB_278X_NORTH, KMB_278X_SOUTH];

// 28*
const KMB_280X_NORTH = new Line("280X", lineType_KMB, "尖東麼地道", "穗禾苑", [MTR_tml_easttsimshatsui, MTR_tml_austin, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, ST_ShatinTownCenter, ST_YuenWo, FoTanTsuen], 20).setNotes("經青沙公路");
const KMB_280X_SOUTH = new Line("280X", lineType_KMB, "穗禾苑", "尖東麼地道", [FoTanTsuen, ST_YuenWo, ShatinTownHall, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, NgaCheungRoad_WHTX, MTR_twl_tsimshatsui], 20).setNotes("經青沙公路");
const KMB_281A_NORTH = new Line("281A", lineType_KMB, "九龍站", "沙田廣源", [MTR_tcl_kowloon, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnelHighway, MTR_mos_cityone]).setNotes("獅隧特快");
const KMB_281A_SOUTH = new Line("281A", lineType_KMB, "沙田廣源", "九龍站", [MTR_mos_cityone, LionRockTunnelHighway, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tcl_kowloon]).setNotes("獅隧特快");
const KMB_281M_NORTH = new Line("281M", lineType_KMB, "九龍塘站", "新田圍", [MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ST_LungHangEstate, MTR_tml_hinkeng, MTR_erl_taiwai, MTR_mos_chekungtemple, ST_SunTinWai]);
const KMB_281M_SOUTH = new Line("281M", lineType_KMB, "新田圍", "九龍塘站", [ST_SunTinWai, MTR_mos_chekungtemple, MTR_erl_taiwai, MTR_tml_hinkeng, ST_LungHangEstate, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong]);
const KMB_282 = new Line("282", lineType_KMB, "沙田市中心", "新田圍", [ST_ShatinTownCenter, MTR_mos_chekungtemple, ST_SunTinWai, MTR_mos_chekungtemple, ST_ShatinTownCenter]).markCircular();
const KMB_284 = new Line("284", lineType_KMB, "沙田巿中心", "濱景花園", [ST_ShatinTownCenter, ST_BelairGardens, ST_ShatinSeafood, ST_BelairGardens, ST_ShatinTownCenter], 9).markCircular();
const KMB_286X = new Line('286X', lineType_KMB, '大圍顯徑邨', '深水埗', [MTR_tml_hinkeng, ST_LungHangEstate, MTR_erl_taiwai, ST_MeiLam_Inside, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, MTR_tcl_namcheong, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, EaglesNestTunnel, TsingShaInterchange, ST_MeiLam_Inside, MTR_erl_taiwai, ST_LungHangEstate, MTR_tml_hinkeng], 20).markCircular().setNotes('經青沙公路');
const KMB_287X = new Line("287X", lineType_KMB, "水泉澳", "佐敦", [ST_ShuiChuenO, MTR_mos_shatinwai, ST_JatMinChuen, MTR_mos_chekungtemple, MTR_mos_taiwai, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, WestKowloonHighway, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_tcl_olympic, WestKowloonHighway, EaglesNestTunnel, TsingShaInterchange, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, ST_ShuiChuenO], 13).markCircular().setNotes("經青沙公路");
const KMB_288 = new Line("288", lineType_KMB, "水泉澳", "沙田市中心", [MTR_mos_shatinwai, ShatinTownHall, MTR_mos_shatinwai]).markCircular();
const KMB_289K = new Line("289K", lineType_KMB, "大學站", "富安花園", [MTR_erl_university, MTR_mos_hengon, MOS_ChevalierGarden, MTR_mos_hengon, MTR_erl_university], 15).markCircular();

// All 28*
const KMB_NUM_28x_ALL = [KMB_280X_NORTH, KMB_280X_SOUTH, KMB_281A_NORTH, KMB_281A_SOUTH, KMB_281M_NORTH, KMB_281M_SOUTH, KMB_282, KMB_284,KMB_286X, KMB_287X, KMB_288, KMB_289K];

// 29*
const KMB_290_EAST = new Line('290', lineType_KMB, '荃灣西站', '調景嶺（彩明）', [MTR_tml_tsuenwanwest, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, TW_LowerLaiKing, LaiKingChokePoint, ChingCheungRoad_Other, ChingCheungRoad_BeaconHill, MTR_ktl_wongtaisin, MTR_ktl_choihung, KT_SauMauPing_NonStop, KT_PoTatEstate, TKO_HongSingGarden, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 20).setNotes('經將軍澳市中心、坑口、寶林、翠林、寶達邨、秀茂坪道、順利邨道、彩雲邨、彩虹、黃大仙、葵涌道、大窩口站、荃灣市中心');
const KMB_290_WEST = new Line('290', lineType_KMB, '調景嶺（彩明）', '荃灣西站', [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TKO_HongSingGarden, KT_PoTatEstate, KT_SauMauPing_NonStop, MTR_ktl_choihung, HungNgokHouse_ChoiHung, MTR_ktl_wongtaisin, ChingCheungRoad_BeaconHill, ChingCheungRoad_Other, LaiKingChokePoint, TW_LowerLaiKing, MTR_twl_kwaifong, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_tml_tsuenwanwest], 20).setNotes('經將軍澳市中心、坑口、寶林、翠林、寶達邨、秀茂坪道、順利邨道、彩雲邨、彩虹、黃大仙、葵涌道、大窩口站、荃灣市中心');
const KMB_290A_EAST = new Line('290A', lineType_KMB, '荃灣西站', '調景嶺（彩明）', [MTR_tml_tsuenwanwest, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, TW_LowerLaiKing, LaiKingChokePoint, ChingCheungRoad_Other, ChingCheungRoad_BeaconHill, MTR_ktl_wongtaisin, MTR_ktl_choihung, KT_ShunLeeEstate, KT_SauMauPing, KT_PoTatEstate, TKO_HongSingGarden, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 20).setNotes('經將軍澳市中心、坑口、寶林、翠林、秀茂坪、四順、彩雲邨、彩虹、黃大仙、葵涌道、大窩口站、荃灣市中心');
const KMB_290A_WEST = new Line('290A', lineType_KMB, '調景嶺（彩明）', '荃灣西站', [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TKO_HongSingGarden, KT_PoTatEstate, KT_SauMauPing, KT_ShunLeeEstate, MTR_ktl_choihung, HungNgokHouse_ChoiHung, MTR_ktl_wongtaisin, ChingCheungRoad_BeaconHill, ChingCheungRoad_Other, LaiKingChokePoint, TW_LowerLaiKing, MTR_twl_kwaifong, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_tml_tsuenwanwest], 20).setNotes('經將軍澳市中心、坑口、寶林、翠林、秀茂坪、四順、彩雲邨、彩虹、黃大仙、葵涌道、大窩口站、荃灣市中心');
const KMB_290B_WEST = new Line('290B', lineType_KMB, '將軍澳工業邨', '荃灣西站', [MTR_tko_lohaspark, MTR_tko_tseungkwano, MTR_tko_polam, TKO_HongSingGarden, KT_PoTatEstate, KT_SauMauPing_NonStop, MTR_ktl_choihung, HungNgokHouse_ChoiHung, MTR_ktl_wongtaisin, ChingCheungRoad_Other, LaiKingChokePoint, TW_LowerLaiKing, MTR_twl_kwaifong, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_tml_tsuenwanwest], 1440).markCommuter().setNotes('由將軍澳工業邨開出一班(17:15)單向前往荃灣西站。');
const KMB_290X_EAST = new Line('290X', lineType_KMB, '荃灣西站', '康城站', [MTR_tml_tsuenwanwest, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, TW_LowerLaiKing, LaiKingChokePoint, ChingCheungRoad_Other, ChingCheungRoad_BeaconHill, MTR_ktl_wongtaisin, MTR_ktl_choihung, KT_Anderson, TKO_HongSingGarden, MTR_tko_polam, MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_lohaspark], 30).setNotes('經百勝角、將軍澳市中心、調景嶺、寶林、翠林、安達/安泰、彩雲邨、彩虹、黃大仙、葵涌、大窩口站、荃灣市中心');
const KMB_290X_WEST = new Line('290X', lineType_KMB, '康城站', '荃灣西站', [MTR_tko_lohaspark, MTR_tko_tseungkwano, MTR_tko_tiukengleng, MTR_tko_polam, TKO_HongSingGarden, KT_Anderson, MTR_ktl_choihung, HungNgokHouse_ChoiHung, MTR_ktl_wongtaisin, ChingCheungRoad_BeaconHill, ChingCheungRoad_Other, LaiKingChokePoint, TW_LowerLaiKing, MTR_twl_kwaifong, MTR_twl_taiwohau, TW_ChungOnStreet, MTR_tml_tsuenwanwest], 30).setNotes('經百勝角、將軍澳市中心、調景嶺、寶林、翠林、安達/安泰、彩雲邨、彩虹、黃大仙、葵涌、大窩口站、荃灣市中心');
const KMB_296A = new Line('296A', lineType_KMB, '尚德', '牛頭角站', [MTR_tko_tseungkwano, TseungKwanOTunnel, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, TseungKwanOTunnel, MTR_tko_tseungkwano], 8).markCircular().setNotes('經創紀之城, 牛頭角站，apm, 觀塘泳池');
const KMB_296C_EAST = new Line('296C', lineType_KMB, '長沙灣海盈邨', '尚德', [MTR_tcl_namcheong, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_princeedward, MTR_ktl_mongkok, MTR_erl_mongkokeast, BoundaryPrince, PE_RegalOrientalHotel, PE_SunPoKong, PE_ChoiHung, MTR_ktl_kowloonbay, MTR_ktl_kwuntong, TseungKwanOTunnel, MTR_tko_tseungkwano], 20);
const KMB_296C_WEST = new Line('296C', lineType_KMB, '尚德', '長沙灣海盈邨', [MTR_tko_tseungkwano, TseungKwanOTunnel, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, PE_ChoiHung, PE_SunPoKong, KowloonHospital, MTR_erl_mongkokeast, MTR_ktl_mongkok, MTR_ktl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_tcl_namcheong], 20);
const KMB_296D_EAST = new Line('296D', lineType_KMB, '九龍站', '尚德', [MTR_tcl_kowloon, MTR_tml_austin, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_tml_homantin, ToKwaWanFlyover, KaiTakTunnel, HKITCE, KwunTongBypass, TseungKwanOTunnel, MTR_tko_tseungkwano], 20);
const KMB_296D_WEST = new Line('296D', lineType_KMB, '尚德', '九龍站', [MTR_tko_tseungkwano, TseungKwanOTunnel, KwunTongBypass, HKITCE, KaiTakTunnel, ToKwaWanFlyover, MTR_twl_jordan, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_austin, MTR_tcl_kowloon], 20);
const KMB_296M_EAST = new Line('296M', lineType_KMB, '康盛花園', '坑口站', [TKO_HongSingGarden, MTR_tko_polam, MTR_tko_tseungkwano, MTR_tko_hanghau], 25);
const KMB_296M_WEST = new Line('296M', lineType_KMB, '坑口站', '康盛花園', [MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_polam, TKO_HongSingGarden], 25);
const KMB_296P = new Line('296P', lineType_KMB, '尚德', '旺角', [MTR_tko_tseungkwano, TseungKwanOTunnel, KwunTongBypass, KowloonBayCommercial, PE_ChoiHung, MK_FlowerMarket, MTR_ktl_princeedward, MTR_ktl_mongkok, MTR_erl_mongkokeast, KowloonHospital, PE_RegalOrientalHotel, PE_SunPoKong, PE_ChoiHung, KowloonBayCommercial, KwunTongBypass, TseungKwanOTunnel, MTR_tko_tseungkwano], 1440).markCircular().markCommuter().setNotes('早上及下午各一班,早上開0745,下午開1720');
// All 29*
const KMB_NUM_29x_ALL = [KMB_290_EAST, KMB_290_WEST, KMB_290A_EAST, KMB_290A_WEST, KMB_290B_WEST, KMB_290X_EAST, KMB_290X_WEST, KMB_296A, KMB_296C_EAST, KMB_296C_WEST, KMB_296D_EAST, KMB_296D_WEST, KMB_296M_EAST, KMB_296M_WEST, KMB_296P];

// All 2**
const KMB_NUM_2xx_ALL = [].concat(KMB_NUM_21x_ALL, KMB_NUM_23x_ALL, KMB_NUM_24x_ALL, KMB_NUM_25x_ALL, KMB_NUM_26x_ALL, KMB_NUM_27x_ALL, KMB_NUM_28x_ALL, KMB_NUM_29x_ALL);

// Special Lines
const KMB_B1_NORTH = new Line('B1', lineType_KMB, '天慈', '落馬洲站', [KCR_lrt_4_tintsz, KCR_lrt_4_tinshuiwai, LongTinRoad, KCR_lrt_5_fungninroad, KCR_lrt_5_yuenlong, SunTinHighway, MTR_erl_lokmachau], 15);
const KMB_B1_SOUTH = new Line('B1', lineType_KMB, '落馬洲站', '天慈', [MTR_erl_lokmachau, SunTinHighway, KCR_lrt_5_yuenlong, KCR_lrt_5_fungninroad, LongTinRoad, KCR_lrt_4_tinshuiwai, KCR_lrt_4_tintsz], 15);
const KMB_W2_EAST = new Line('W2', lineType_KMB, '高鐵西九龍站', '觀塘站', [MTR_hsr_westkowloon, MTR_twl_jordan, ToKwaWanFlyover, KaiTakTunnel, HKITCE, KwunTongBypass, MTR_ktl_lamtin, MTR_ktl_kwuntong], 20).setNotes('西九特快，只停西九龍站、佐敦志和街、九展、藍田站');
const KMB_W2_WEST = new Line('W2', lineType_KMB, '觀塘站', '高鐵西九龍站', [MTR_ktl_kwuntong, MTR_ktl_lamtin, KwunTongBypass, HKITCE, KaiTakTunnel, ToKwaWanFlyover, MTR_twl_jordan, MTR_hsr_westkowloon], 20).setNotes('西九特快，只停藍田站、麗港公園、九展、九龍佑寧堂(佐敦)及西九龍站');
const KMB_W3_NORTH = new Line("W3", lineType_KMB, "西九龍站", "上水", [MTR_hsr_westkowloon, WestKowloonHighway, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, MTR_erl_shatin, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, FanlingHighway_LamTsuen, MTR_erl_sheungshui]).setNotes("高鐵特快；設有雙程分段收費");
const KMB_W3_SOUTH = new Line("W3", lineType_KMB, "上水", "西九龍站", [MTR_erl_sheungshui, FanlingHighway_LamTsuen, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, MTR_erl_shatin, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, WestKowloonHighway, MTR_hsr_westkowloon]).setNotes("高鐵特快");
// All Special Lines
const KMB_NUM_SPECIAL_ALL = [KMB_B1_NORTH, KMB_B1_SOUTH, KMB_W2_EAST, KMB_W2_WEST, KMB_W3_NORTH, KMB_W3_SOUTH];
/*
const test_w3_north = new Line("w3", lineType_KMB, "wkl", "ss", [MTR_erl_taipomarket, MTR_erl_sheungshui], "", "x", false);
const test_803k_north = new Line("803k", lineType_GMB_NT, "hk", "twa", [MTR_tml_hinkeng, MTR_erl_taiwai], "", "", false);
*/

// N2**
const KMB_N216_EAST = new Line('N216', lineType_KMB, '紅磡站', '油塘', [MTR_tml_hunghom, MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, KowloonHospital, PE_RegalOrientalHotel, SunPoKong_Inside, MTR_ktl_diamondhill, ChoiHungBusTerminus, MTR_ktl_choihung, KT_ShunLeeEstate, KT_SauMauPing, MTR_ktl_yautong], 20).markNightOnly().setNotes('經彌敦道、九龍城、新蒲崗、順利、秀茂坪、藍田半山');
const KMB_N216_WEST = new Line('N216', lineType_KMB, '油塘', '紅磡站', [MTR_ktl_yautong, KT_SauMauPing, KT_ShunLeeEstate, MTR_ktl_choihung, MTR_ktl_diamondhill, SunPoKong_Inside, PE_RegalOrientalHotel, BoundaryPrince, MTR_ktl_princeedward, MTR_ktl_mongkok, MTR_ktl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_easttsimshatsui, MTR_tml_hunghom], 20).markNightOnly().setNotes('經彌敦道、九龍城、新蒲崗、順利、秀茂坪、藍田半山');
const KMB_N290_EAST = new Line('N290', lineType_KMB, '荃灣西站', '康城站', [MTR_tml_tsuenwanwest, TW_ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, TW_LowerLaiKing, LaiKingChokePoint, ChingCheungRoad_Other, ChingCheungRoad_BeaconHill, MTR_ktl_wongtaisin, MTR_ktl_choihung, KT_ShunLeeEstate, KT_SauMauPing, KT_PoTatEstate, TKO_HongSingGarden, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_lohaspark], 1440).markNightOnly().setNotes('(00:50` 01:20)於深宵時份開出兩班由荃灣西站單向開往康城站，途經葵涌、大窩坪、黃大仙、牛池灣、四順、秀茂坪、馬游塘、翠林、寶林、坑口、將軍澳市中心、調景嶺及百勝角。');

// All N2**
const KMB_NUM_N2xx_ALL = [KMB_N216_EAST, KMB_N216_WEST, KMB_N290_EAST];

// All Nightly lines
const KMB_NUM_Nxxx_ALL = [].concat(KMB_NUM_N2xx_ALL);

const KMB_HK18_ALL = [].concat(KMB_NUM_0xx_ALL, KMB_NUM_2xx_ALL, KMB_NUM_SPECIAL_ALL, KMB_NUM_Nxxx_ALL);

/**
 * Long Wan Bus Section
 */

// A4*
const LWB_A41_EAST = new Line('A41', lineType_LWB, '機場', '愉翠苑', [MTR_aex_airport, Airport_HKZHMCBridgePort, LantauLink_SiuHoWan, LantauLink_YamO, LantauLink_Interchange, LantauLink_TsingMaBridge, TsingYiNorthHighway, TW_TexacoFlyover, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, ST_ShatinTownCenter, ST_JatMinChuen, ST_BelairGardens, MTR_mos_cityone], 20).setNotes('經大橋口岸');
const LWB_A41_WEST = new Line('A41', lineType_LWB, '愉翠苑', '機場', [MTR_mos_cityone, ST_BelairGardens, ST_JatMinChuen, ST_ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, TW_TexacoFlyover, TsingYiNorthHighway, LantauLink_TsingMaBridge, LantauLink_Interchange, LantauLink_YamO, LantauLink_SiuHoWan, MTR_aex_airport, Airport_HKZHMCBridgePort], 20).setNotes('經大橋口岸');

// All A4*
const LWB_NUM_A4x_ALL = [LWB_A41_EAST, LWB_A41_WEST];

// All A**
const LWB_NUM_Axx_ALL = [].concat(LWB_NUM_A4x_ALL);

// E3*
const LWB_E31_EAST = new Line('E31', lineType_LWB, '東涌(逸東)', '荃灣愉景新城', [TC_YatTungEstate, MTR_tcl_tungchung, LantauLink_SiuHoWan, LantauLink_YamO, LantauLink_Interchange, LantauLink_TsingMaBridge, TY_TsingYiWest, TY_CheungOnEstate, TW_TexacoFlyover, MTR_twl_tsuenwan, MTR_twl_tsuenking], 20);
const LWB_E31_WEST = new Line('E31', lineType_LWB, '荃灣愉景新城', '東涌(逸東)', [MTR_twl_tsuenking, MTR_twl_tsuenwan, MTR_twl_taiwohau, TW_TexacoFlyover, TY_CheungOnEstate, TY_TsingYiWest, LantauLink_TsingMaBridge, LantauLink_Interchange, LantauLink_YamO, LantauLink_SiuHoWan, MTR_tcl_tungchung, TC_YatTungEstate], 20);

// All E3*
const LWB_NUM_E3x_ALL = [LWB_E31_EAST, LWB_E31_WEST];

// E4*
const LWB_E42_EAST = new Line('E42', lineType_LWB, '機場', '博康', [MTR_aex_airport, Airport_CathayPacificCity, MTR_tcl_tungchung, LantauLink_SiuHoWan, LantauLink_YamO, LantauLink_Interchange, LantauLink_TsingMaBridge, TY_TsingYiWest, TW_TexacoFlyover, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_MeiLam, MTR_mos_taiwai, MTR_mos_chekungtemple, ST_ShatinTownCenter, MTR_mos_shatinwai], 16).setNotes('經機場南部設施');
const LWB_E42_WEST = new Line('E42', lineType_LWB, '博康', '機場', [MTR_mos_shatinwai, ST_ShatinTownCenter, MTR_mos_chekungtemple, MTR_mos_taiwai, TaiPoRoad_MeiLam, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, TW_TexacoFlyover, TY_TsingYiWest, LantauLink_TsingMaBridge, LantauLink_Interchange, LantauLink_YamO, LantauLink_SiuHoWan, MTR_tcl_tungchung, Airport_CathayPacificCity, MTR_aex_airport], 16).setNotes('經機場南部設施');

// All E4*
const LWB_NUM_E4x_ALL = [LWB_E42_EAST, LWB_E42_WEST];

// All E**
const LWB_NUM_Exx_ALL = [].concat(LWB_NUM_E3x_ALL, LWB_NUM_E4x_ALL);

// All S**
const LWB_S64 = new Line('S64', lineType_LWB, '東涌逸東邨', '機場客運大樓', [MTR_tcl_tungchung, Airport_CathayPacificCity, MTR_aex_airport, Airport_CathayPacificCity, MTR_tcl_tungchung], 12).markCircular().setNotes('經機場貨運區及機場航膳');
const LWB_NUM_Sxx_ALL = [LWB_S64];

// All LWB
const LWB_HK18_ALL = [].concat(LWB_NUM_Axx_ALL, LWB_NUM_Exx_ALL, LWB_NUM_Sxx_ALL);

/**
 * Citibus Section
 */

// 00*
const CTB_5X_EAST = new Line("5X", lineType_CTB, "堅尼地城", "銅鑼灣威菲路道", [MTR_ill_kennedytown, HKU_ShekTongTsui, ConnaughtRoadWest_Stop, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill]);
const CTB_5X_WEST = new Line("5X", lineType_CTB, "銅鑼灣威菲路道", "堅尼地城", [MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, HKU_ShekTongTsui, MTR_ill_kennedytown]);
const CTB_7_NORTH = new Line('7', lineType_CTB, '石排灣邨', '中環碼頭', [MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_tcl_hongkong], 15).setNotes("部分班次繞經華富邨內");
const CTB_7_SOUTH = new Line('7', lineType_CTB, '中環碼頭', '石排灣邨', [MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen], 15).setNotes("部分班次繞經華富邨內");
// All 00*
const CTB_NUM_00x_ALL = [CTB_5X_EAST, CTB_5X_WEST, CTB_7_NORTH, CTB_7_SOUTH];

// 03*
const CTB_37A_POSITIVE = new Line('37A', lineType_CTB, '置富花園', '中環', [PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_swil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_swil_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual], 15).markCircular();
const CTB_37B_NEGATIVE = new Line('37B', lineType_CTB, '置富花園', '金鐘東', [PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_swil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual], 15).markCircular();

// All 03*
const CTB_NUM_03x_ALL = [CTB_37A_POSITIVE, CTB_37B_NEGATIVE];

// 07*
const CTB_72_NORTH = new Line('72', lineType_CTB, '華貴邨', '銅鑼灣(摩頓台)', [MTR_swil_tinwan, MTR_swil_aberdeen, MTR_swil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, Moreton_CausewayBay], 7).setNotes('經香隧、崇光');
const CTB_72_SOUTH = new Line('72', lineType_CTB, '銅鑼灣(摩頓台)', '華貴邨', [Moreton_CausewayBay, MTR_ill_causewaybay, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_swil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan], 7).setNotes('經香隧、香港仔');
const CTB_77_EAST = new Line('77', lineType_CTB, '田灣', '筲箕灣', [MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, SKW_YiuTungEstate, MTR_ill_saukeiwan], 20).setNotes("經鯉景灣及耀東邨");
const CTB_77_WEST = new Line('77', lineType_CTB, '筲箕灣', '田灣', [MTR_ill_saukeiwan, SKW_YiuTungEstate, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan], 20).setNotes("經鯉景灣及耀東邨");

// All 07*
const CTB_NUM_07x_ALL = [CTB_72_NORTH, CTB_72_SOUTH, CTB_77_EAST, CTB_77_WEST];

// 09*
const CTB_96_NORTH = new Line('96', lineType_CTB, '利東邨', '銅鑼灣', [MTR_seil_leitung, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, Moreton_CausewayBay], 20).setNotes('經崇光百貨；下午繁忙時間部分班次不停香港仔隧道');
const CTB_96_SOUTH = new Line('96', lineType_CTB, '銅鑼灣', '利東邨', [Moreton_CausewayBay, MTR_ill_causewaybay, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_seil_leitung], 20);
const CTB_98_NORTH = new Line("98", lineType_CTB, "利東", "香港仔成都道", [MTR_seil_leitung, MTR_swil_aberdeen], 6);
const CTB_98_SOUTH = new Line("98", lineType_CTB, "香港仔成都道", "利東", [MTR_swil_aberdeen, MTR_seil_leitung], 6);

const CTB_NUM_09x_ALL = [CTB_96_NORTH, CTB_96_SOUTH, CTB_98_NORTH, CTB_98_SOUTH];

const CTB_NUM_0xx_ALL = [].concat(CTB_NUM_00x_ALL, CTB_NUM_03x_ALL, CTB_NUM_07x_ALL, CTB_NUM_09x_ALL);

// 59*
const CTB_592_NORTH = new Line('592', lineType_CTB, '海怡半島', '銅鑼灣', [MTR_seil_southhoriz, MTR_seil_leitung, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, Moreton_CausewayBay], 10).setNotes('繁忙時間不停黃竹坑道');
const CTB_592_SOUTH = new Line('592', lineType_CTB, '銅鑼灣', '海怡半島', [Moreton_CausewayBay, MTR_ill_causewaybay, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_seil_leitung, MTR_seil_southhoriz], 10);

const CTB_NUM_59x_ALL = [CTB_592_NORTH, CTB_592_SOUTH];

// 5**
const CTB_NUM_5xx_ALL = [].concat(CTB_NUM_59x_ALL);

// Special
// E2*
const CTB_E21_EAST = new Line('E21', lineType_CTB, '機場博覽館', '大角咀 (維港灣)', [MTR_aex_asiaworldexpo, MTR_aex_airport, Airport_CathayPacificCity, MTR_tcl_tungchung, LantauLink_SiuHoWan, LantauLink_YamO, LantauLink_Interchange, LantauLink_TsingMaBridge, TY_TsingYiWest, TW_TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_tcl_olympic], 20).setNotes('經國泰城');
const CTB_E21_WEST = new Line('E21', lineType_CTB, '大角咀 (維港灣)', '機場博覽館', [MTR_tcl_olympic, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_tml_meifoo, LaiKingChokePoint, TW_TsuenWanRoad, TY_TsingYiWest, LantauLink_TsingMaBridge, LantauLink_Interchange, LantauLink_YamO, LantauLink_SiuHoWan, MTR_tcl_tungchung, Airport_CathayPacificCity, MTR_aex_airport, MTR_aex_asiaworldexpo], 20).setNotes('經國泰城');
// All E2*
const CTB_NUM_E2x_ALL = [CTB_E21_EAST, CTB_E21_WEST];
// All E**
const CTB_NUM_Exx_ALL = [].concat(CTB_NUM_E2x_ALL);
// W**
const CTB_W1_NORTH = new Line('W1', lineType_CTB, '金鐘西', '高鐵西九龍站', [MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, MTR_hsr_westkowloon], 25).setNotes('西九特快');
const CTB_W1_SOUTH = new Line('W1', lineType_CTB, '高鐵西九龍站', '金鐘西', [MTR_hsr_westkowloon, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty], 25).setNotes('西九特快');
// All W**
const CTB_NUM_Wxx_ALL = [CTB_W1_NORTH, CTB_W1_SOUTH];
const CTB_NUM_SPECIAL_ALL = [].concat(CTB_NUM_Exx_ALL, CTB_NUM_Wxx_ALL);

const CTB_HK18_ALL = [].concat(CTB_NUM_0xx_ALL, CTB_NUM_5xx_ALL, CTB_NUM_SPECIAL_ALL);

/**
 * New World First Bus Section
 */

// 00*
const NWFB_2_EAST = new Line("2", lineType_NWFB, "上環港澳碼頭", "西灣河嘉亨灣", [MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const NWFB_2_WEST = new Line("2", lineType_NWFB, "西灣河嘉亨灣", "上環港澳碼頭", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
const NWFB_4_NORTH = new Line('4', lineType_NWFB, '華富(南)', '中環交易廣場', [MTR_swil_wahfoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central], 15).setNotes('有循環乘搭限制；經瑪麗醫院，HKU，西營盤，上環');
const NWFB_4_SOUTH = new Line('4', lineType_NWFB, '中環交易廣場', '華富(南)', [MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, MTR_swil_wahfoo], 15).setNotes('有循環乘搭限制；經瑪麗醫院，HKU，西營盤，上環');
const NWFB_8_EAST = new Line("8", lineType_NWFB, "灣仔北", "杏花邨", [WC_FerryPier, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, EasternCorridor, CW_ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_hengfachuen], 13).setNotes("東走特快");
const NWFB_8_WEST = new Line("8", lineType_NWFB, "杏花邨", "灣仔北", [MTR_ill_hengfachuen, MTR_ill_chaiwan, CW_ChaiWanRoad, EasternCorridor, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, WC_FerryPier], 13).setNotes("東走特快");

const NWFB_NUM_00x_ALL = [NWFB_2_EAST, NWFB_2_WEST, NWFB_4_NORTH, NWFB_4_SOUTH, NWFB_8_EAST, NWFB_8_WEST];

// 01*
const NWFB_18P_EAST = new Line('18P', lineType_NWFB, '堅尼地城 (卑路乍灣)', '北角 (健康中街)', [MTR_ill_kennedytown, HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_wanchai, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint], 12).setNotes('特快線');
const NWFB_18P_WEST = new Line('18P', lineType_NWFB, '北角 (健康中街)', '堅尼地城 (卑路乍灣)', [MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_causewaybay, MTR_erl_exhibition, MTR_ill_central, MTR_ill_saiyingpun, HKU_ShekTongTsui, MTR_ill_kennedytown], 12).setNotes('特快線');
const NWFB_18X_EAST = new Line('18X', lineType_NWFB, '堅尼地城 (卑路乍灣)', '筲箕灣', [MTR_ill_kennedytown, HKU_ShekTongTsui, ConnaughtRoadFlyover, MTR_ill_wanchai, EasternCorridor, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan], 20);
const NWFB_18X_WEST = new Line('18X', lineType_NWFB, '筲箕灣', '堅尼地城 (卑路乍灣)', [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, EasternCorridor, MTR_ill_central, ConnaughtRoadFlyover, MTR_ill_saiyingpun, HKU_ShekTongTsui, MTR_ill_kennedytown], 20);
// All 01*
const NWFB_NUM_01x_ALL = [NWFB_18P_EAST, NWFB_18P_WEST, NWFB_18X_EAST, NWFB_18X_WEST];
// 03*
const NWFB_30X_NORTH = new Line("30X", lineType_NWFB, "數碼港", "中環交易廣場", [MTR_swil_cyberport, MTR_swil_wahfoo, MTR_swil_queenmary, PokFuLam_Actual, MTR_swil_hku, MTR_tcl_hongkong, MTR_ill_central], 20);
const NWFB_30X_SOUTH = new Line("30X", lineType_NWFB, "中環交易廣場", "數碼港", [MTR_tcl_hongkong, MTR_ill_central, MTR_ill_saiyingpun, MTR_swil_hku, MTR_swil_queenmary, PokFuLam_Actual, MTR_swil_wahfoo, MTR_swil_cyberport], 20);

const NWFB_NUM_03x_ALL = [NWFB_30X_NORTH, NWFB_30X_SOUTH];
// 09*
const NWFB_91_NORTH = new Line("91", lineType_NWFB, "鴨脷洲邨", "中環渡輪碼頭", [MTR_seil_southhoriz, MTR_seil_leitung, MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_tcl_hongkong], 18);
const NWFB_91_SOUTH = new Line("91", lineType_NWFB, "中環渡輪碼頭", "鴨脷洲邨", [MTR_tcl_hongkong, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_leitung, MTR_seil_southhoriz], 18);
const NWFB_94_NORTH = new Line('94', lineType_NWFB, '利東邨', '中環碼頭', [MTR_seil_leitung, MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_tcl_hongkong], 15).markCommuter();
const NWFB_94_SOUTH = new Line('94', lineType_NWFB, '中環碼頭', '利東邨', [MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_leitung], 15).markCommuter();

const NWFB_NUM_09x_ALL = [NWFB_91_NORTH, NWFB_91_SOUTH, NWFB_94_NORTH, NWFB_94_SOUTH];

const NWFB_NUM_0xx_ALL = [].concat(NWFB_NUM_00x_ALL, NWFB_NUM_01x_ALL, NWFB_NUM_03x_ALL, NWFB_NUM_09x_ALL);

// 79*
const NWFB_798_EAST = new Line("798", lineType_NWFB, "火炭山尾街", "調景嶺站", [FoTanTsuen, ST_YuenWo, ST_ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 15).setNotes("將軍澳特快");
const NWFB_798_WEST = new Line("798", lineType_NWFB, "調景嶺站", "火炭山尾街", [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, ST_YuenWo, FoTanTsuen], 15).setNotes("沙田特快；沙田站只准落客");
const NWFB_798A_MORNING = new Line('798A', lineType_NWFB, '將軍澳(康盛花園)', '沙田站', [TKO_HongSingGarden, MTR_tko_polam, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin], 1440).markCommuter().setNotes('單班車0705開出；經寶琳北');
const NWFB_798A_AFTERNOON = new Line('798A', lineType_NWFB, '沙田市中心', '將軍澳(康盛花園)', [ST_ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_polam, TKO_HongSingGarden], 1440).markCommuter().setNotes('單班車1815開出；經寶琳北');
const NWFB_798B_MORNING = new Line('798B', lineType_NWFB, '日出康城', '沙田站', [MTR_tko_lohaspark, MTR_tko_tseungkwano, MTR_tko_hanghau, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin], 1440).markCommuter().setNotes('單班車0705開出；經尚德');
const NWFB_798B_AFTERNOON = new Line('798B', lineType_NWFB, '沙田市中心', '日出康城', [ST_ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_lohaspark], 1440).markCommuter().setNotes('單班車1830開出；經尚德');

const NWFB_NUM_79x_ALL = [NWFB_798_EAST, NWFB_798_WEST, NWFB_798A_MORNING, NWFB_798A_AFTERNOON, NWFB_798B_MORNING, NWFB_798B_AFTERNOON];

// 7**
const NWFB_NUM_7xx_ALL = [].concat(NWFB_NUM_79x_ALL);

const NWFB_HK18_ALL = [].concat(NWFB_NUM_0xx_ALL, NWFB_NUM_7xx_ALL);

// GMB Section

// Kowloon section
// 00*
const GMB_KL_8_NORTH = new Line('8', lineType_GMB_KL, '尖沙咀 漢口道', '何文田', [MTR_tml_easttsimshatsui, MTR_tml_hunghom, MTR_tml_homantin, HMT_OiManEstate, HMT_HoManTinEstate], 6).setNotes('經愛民邨');
const GMB_KL_8_SOUTH = new Line('8', lineType_GMB_KL, '何文田', '尖沙咀 漢口道', [HMT_HoManTinEstate, HMT_OiManEstate, MTR_tml_homantin, MTR_tml_hunghom, MTR_tml_easttsimshatsui], 6).setNotes('經愛民邨');
// All 00*
const GMB_KL_NUM_00x_ALL = [GMB_KL_8_NORTH, GMB_KL_8_SOUTH];
// All 0**
const GMB_KL_NUM_0xx_ALL = [].concat(GMB_KL_NUM_00x_ALL);
/**
 * All Kowloon minibus routes
 */
const GMB_KL_ALL = [].concat(GMB_KL_NUM_0xx_ALL);

// New Territories section
// 01*
const GMB_NT_10M_EAST = new Line('10M', lineType_GMB_NT, '觀塘 同仁街', '將軍澳 慧安園', [MTR_ktl_kwuntong, TseungKwanOTunnel, MTR_tko_polam], 5).setNotes('由觀塘站直逹寶琳');
const GMB_NT_10M_WEST = new Line('10M', lineType_GMB_NT, '將軍澳 慧安園', '觀塘 同仁街', [MTR_tko_polam, TseungKwanOTunnel, MTR_ktl_kwuntong], 5).setNotes('由寶琳站直達觀塘');
// All 01*
const GMB_NT_NUM_01x_ALL = [GMB_NT_10M_EAST, GMB_NT_10M_WEST];
// 02*
const GMB_NT_26_EAST = new Line("26", lineType_GMB_NT, "香港教育大學", "海柏花園", [KwongFukEstate, ToloHighway_Coastal, MOS_HengHongStreet, MTR_mos_maonshan], 8).setNotes("大埔特快");
const GMB_NT_26_WEST = new Line("26", lineType_GMB_NT, "海柏花園", "香港教育大學", [MTR_mos_maonshan, MOS_HengHongStreet, ToloHighway_Coastal, KwongFukEstate], 8).setNotes("大埔特快");
const GMB_NT_28K = new Line("28K", lineType_GMB_NT, "大埔墟站", "新城市廣場", [MTR_erl_taipomarket, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, ST_RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, ST_RoyalAscot, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, MTR_erl_taipomarket], 9).markCircular();
const GMB_NT_28S = new Line("28S", lineType_GMB_NT, "白石角", "新城市廣場", [PakShekKok, CheungShueTan, TaiPoRoad_CUHK, ST_RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, ST_RoyalAscot, TaiPoRoad_CUHK, CheungShueTan, PakShekKok], 35).markCircular();
// All 02*
const GMB_NT_NUM_02x_ALL = [GMB_NT_26_EAST, GMB_NT_26_WEST, GMB_NT_28K, GMB_NT_28S];
// 03*
const GMB_NT_34_EAST = new Line('34', lineType_GMB_NT, '流浮山', '元朗', [KCR_lrt_4_tinshuiwai, KCR_lrt_4_pingshan, KCR_lrt_5_fungninroad, KCR_lrt_5_yuenlong], 15).setNotes('經水邊圍');
const GMB_NT_34_WEST = new Line('34', lineType_GMB_NT, '元朗', '流浮山', [KCR_lrt_5_yuenlong, KCR_lrt_5_fungninroad, KCR_lrt_4_pingshan, KCR_lrt_4_tinshuiwai], 15).setNotes('經水邊圍');
// All 03*
const GMB_NT_NUM_03x_ALL = [GMB_NT_34_EAST, GMB_NT_34_WEST];
// 04*
const GMB_NT_44_NORTH = new Line('44', lineType_GMB_NT, '屯門碼頭', '上水站', [KCR_lrt_1_tuenmunferrypier, KCR_lrt_1_lungmun, KCR_lrt_1_samshing, TM_TuenMunTownCenter, KCR_lrt_2_primeview, YuenLongHighway, SunTinHighway, FanlingHighway_KwuTung, MTR_erl_sheungshui], 4).setNotes('上水特快；經屯門公路；設特別車沿線開出/直往上水');
const GMB_NT_44_SOUTH = new Line('44', lineType_GMB_NT, '上水站', '屯門碼頭', [MTR_erl_sheungshui, FanlingHighway_KwuTung, SunTinHighway, YuenLongHighway, KCR_lrt_2_primeview, TM_TuenMunTownCenter, KCR_lrt_1_samshing, KCR_lrt_1_lungmun, KCR_lrt_1_tuenmunferrypier], 4).setNotes('上水特快；經經屯門公路、市中心');
const GMB_NT_46_NORTH = new Line('46', lineType_GMB_NT, '屯門市中心', '富泰邨', [TM_TuenMunTownCenter, MTR_tml_tuenmun, KCR_lrt_2_primeview, MTR_tml_siuhong, LingNanUniversity], 5).setNotes('經景峰，新墟');
const GMB_NT_46_SOUTH = new Line('46', lineType_GMB_NT, '富泰邨', '屯門市中心', [LingNanUniversity, MTR_tml_siuhong, KCR_lrt_2_primeview, MTR_tml_tuenmun, TM_TuenMunTownCenter], 5).setNotes('經景峰，新墟');
// All 04*
const GMB_NT_NUM_04x_ALL = [GMB_NT_44_NORTH, GMB_NT_44_SOUTH, GMB_NT_46_NORTH, GMB_NT_46_SOUTH];
// 06*
const GMB_NT_65A_EAST = new Line("65A", lineType_GMB_NT, "沙田大會堂", "黃泥頭", [ShatinTownHall, ST_BelairGardens, MTR_mos_cityone, HangSengUniversity, ST_KwongYuen], 7);
const GMB_NT_65A_WEST = new Line("65A", lineType_GMB_NT, "黃泥頭", "沙田大會堂", [ST_KwongYuen, HangSengUniversity, MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, ShatinTownHall], 7);
const GMB_NT_65K_NORTH = new Line("65K", lineType_GMB_NT, "黃泥頭", "火炭站", [MTR_mos_cityone, ST_ShatinSeafood, MTR_erl_fotan]);
const GMB_NT_65K_SOUTH = new Line("65K", lineType_GMB_NT, "火炭站", "黃泥頭", [MTR_erl_fotan, MTR_mos_cityone]);
const GMB_NT_67A_EAST = new Line("67A", lineType_GMB_NT, "沙田站", "碩門邨", [MTR_erl_shatin, ST_BelairGardens, ST_ShatinSeafood, MTR_mos_shekmun], 12);
const GMB_NT_67A_WEST = new Line("67A", lineType_GMB_NT, "碩門邨", "沙田站", [MTR_mos_shekmun, ST_ShatinSeafood, ST_BelairGardens, MTR_erl_shatin], 12);
const GMB_NT_67K_NORTH = new Line("67K", lineType_GMB_NT, "沙田站", "亞公角", [MTR_erl_shatin, ST_BelairGardens, ST_ShatinSeafood, ST_ShatinHospital], 15);
const GMB_NT_67K_SOUTH = new Line("67K", lineType_GMB_NT, "亞公角", "沙田站", [ST_ShatinHospital, ST_ShatinSeafood, ST_BelairGardens, MTR_erl_shatin], 15);
const GMB_NT_68K_EAST = new Line("68K", lineType_GMB_NT, "瑞峰花園", "沙田站", [ST_LungHangEstate, MTR_mos_taiwai, MTR_mos_chekungtemple, ST_ShatinTownCenter, MTR_erl_shatin], 8);
const GMB_NT_68K_WEST = new Line("68K", lineType_GMB_NT, "沙田站", "瑞峰花園", [MTR_erl_shatin, ShatinTownHall, MTR_mos_chekungtemple, MTR_mos_taiwai, ST_LungHangEstate], 8);
// All 06*
const GMB_NT_NUM_06x_ALL = [GMB_NT_65A_EAST, GMB_NT_65A_WEST, GMB_NT_65K_NORTH, GMB_NT_65K_SOUTH, GMB_NT_67A_EAST, GMB_NT_67A_WEST, GMB_NT_67K_NORTH, GMB_NT_67K_SOUTH, GMB_NT_68K_EAST, GMB_NT_68K_WEST];
// All 0**
const GMB_NT_NUM_0xx_ALL = [].concat(GMB_NT_NUM_01x_ALL, GMB_NT_NUM_02x_ALL, GMB_NT_NUM_03x_ALL, GMB_NT_NUM_04x_ALL, GMB_NT_NUM_06x_ALL);
// 48*
const GMB_NT_481_EAST = new Line('481', lineType_GMB_NT, '荃灣街市街', '火炭山尾街', [TsuenWanMarket, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, FoTanTsuen], 5);
const GMB_NT_481_WEST = new Line('481', lineType_GMB_NT, '火炭山尾街', '荃灣街市街', [FoTanTsuen, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 5);
const GMB_NT_481A_EAST = new Line('481A', lineType_GMB_NT, '荃灣街市街', '沙田大會堂', [TsuenWanMarket, TsuenWanTownHall, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownHall], 10);
const GMB_NT_481A_WEST = new Line('481A', lineType_GMB_NT, '沙田大會堂', '荃灣街市街', [ShatinTownHall, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 10);
const GMB_NT_481B_EAST = new Line('481B', lineType_GMB_NT, '荃灣街市街', '大圍銅鑼灣山', [TsuenWanMarket, TsuenWanTownHall, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_MeiLam, MTR_erl_taiwai], 10).setNotes('部分班次只往大圍站');
const GMB_NT_481B_WEST = new Line('481B', lineType_GMB_NT, '大圍銅鑼灣山', '荃灣街市街', [TaiPoRoad_MeiLam, MTR_erl_taiwai, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 10).setNotes('部分班次由大圍站開出');
const GMB_NT_482_EAST = new Line('482', lineType_GMB_NT, '荃灣街市街', '沙田大會堂', [TsuenWanMarket, TW_CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_MeiLam, TaiPoRoad_Shatin, ShatinTownHall], 15).markNightOnly();
const GMB_NT_482_WEST = new Line('482', lineType_GMB_NT, '沙田大會堂', '荃灣街市街', [ShatinTownHall, TaiPoRoad_Shatin, TaiPoRoad_MeiLam, ShingMunTunnelHighway, ShingMunTunnel, TW_CheungPeiShanRoad, TsuenWanMarket], 15).markNightOnly();
// All 48*
const GMB_NT_NUM_48x_ALL = [GMB_NT_481_EAST, GMB_NT_481_WEST, GMB_NT_481A_EAST, GMB_NT_481A_WEST, GMB_NT_481B_EAST, GMB_NT_481B_WEST, GMB_NT_482_EAST, GMB_NT_482_WEST];
// All 4**
const GMB_NT_NUM_4xx_ALL = [].concat(GMB_NT_NUM_48x_ALL);
// 80*
const GMB_NT_803_NORTH = new Line("803", lineType_GMB_NT, "顯徑", "利安", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, ST_JatMinChuen, ST_BelairGardens, ST_ShatinSeafood, ST_ShatinHospital, MTR_mos_taishuihang, MOS_HengHongStreet, MTR_mos_maonshan, MOS_LeeOnEstate], 15).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803_SOUTH = new Line("803", lineType_GMB_NT, "利安", "顯徑", [MOS_LeeOnEstate, MTR_mos_maonshan, MOS_HengHongStreet, MTR_mos_taishuihang, ST_ShatinHospital, ST_ShatinSeafood, ST_BelairGardens, ST_JatMinChuen, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng], 15).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803K_EAST = new Line("803K", lineType_GMB_NT, "顯徑", "大圍站", [MTR_tml_hinkeng, MTR_mos_taiwai]);
const GMB_NT_803K_WEST = new Line("803K", lineType_GMB_NT, "大圍站", "顯徑", [MTR_mos_taiwai, MTR_tml_hinkeng]);
const GMB_NT_804_EAST = new Line("804", lineType_GMB_NT, "顯徑", "廣源", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, ST_JatMinChuen, ST_BelairGardens, MTR_mos_cityone]);
const GMB_NT_804_WEST = new Line("804", lineType_GMB_NT, "廣源", "顯徑", [MTR_mos_cityone, ST_ShatinSeafood, ST_BelairGardens, ST_JatMinChuen, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng]);
const GMB_NT_807A_EAST = new Line("807A", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_hengon, MTR_mos_maonshan], 8);
const GMB_NT_807A_WEST = new Line("807A", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university], 8);
const GMB_NT_807B_EAST = new Line("807B", lineType_GMB_NT, "海柏花園", "黃竹灣", [MTR_mos_maonshan, MTR_mos_wukaisha]);
const GMB_NT_807B_WEST = new Line("807B", lineType_GMB_NT, "黃竹灣", "海柏花園", [MTR_mos_wukaisha, MTR_mos_maonshan]);
const GMB_NT_807C_EAST = new Line("807C", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_maonshan]);
const GMB_NT_807C_WEST = new Line("807C", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MTR_mos_hengon, MTR_erl_university]);
const GMB_NT_807K_EAST = new Line("807K", lineType_GMB_NT, "大學站", "井頭", [MTR_erl_university, MaOnShanRoad, MTR_mos_maonshan, MTR_mos_wukaisha]);
const GMB_NT_807K_WEST = new Line("807K", lineType_GMB_NT, "井頭", "大學站", [MTR_mos_wukaisha, MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university]);
const GMB_NT_807X = new Line("807X", lineType_GMB_NT, "大學站", "烏溪沙站", [MTR_erl_university, MTR_mos_wukaisha, MTR_erl_university]).markCircular();
// All 80*
const GMB_NT_NUM_80x_ALL = [GMB_NT_803_NORTH, GMB_NT_803_SOUTH, GMB_NT_803K_EAST, GMB_NT_803K_WEST, GMB_NT_804_EAST, GMB_NT_804_WEST, GMB_NT_807A_EAST, GMB_NT_807A_WEST, GMB_NT_807B_EAST, GMB_NT_807B_WEST, GMB_NT_807C_EAST, GMB_NT_807C_WEST, GMB_NT_807K_EAST, GMB_NT_807K_WEST, GMB_NT_807X];
// 81*
const GMB_NT_810_NORTH = new Line('810', lineType_GMB_NT, '沙田 偉華中心', '馬鞍山 雅典居', [ST_ShatinTownCenter, ST_YuenWo, ST_ShatinSeafood, ST_ShatinHospital, MTR_mos_taishuihang, MTR_mos_hengon, MTR_mos_maonshan], 10);
const GMB_NT_810_SOUTH = new Line('810', lineType_GMB_NT, '馬鞍山 雅典居', '沙田 偉華中心', [MTR_mos_maonshan, MTR_mos_hengon, MTR_mos_taishuihang, ST_ShatinHospital, ST_ShatinSeafood, ST_YuenWo, ST_ShatinTownCenter], 10);
// All 81*
const GMB_NT_NUM_81x_ALL = [GMB_NT_810_NORTH, GMB_NT_810_SOUTH];
// All 8**
const GMB_NT_NUM_8xx_ALL = [].concat(GMB_NT_NUM_80x_ALL, GMB_NT_NUM_81x_ALL);
// 90* (currently 1 line but still)

// All NT
const GMB_NT_ALL = [].concat(GMB_NT_NUM_0xx_ALL, GMB_NT_NUM_4xx_ALL, GMB_NT_NUM_8xx_ALL);

/**
 * All Green Minibus routes
 */
const GMB_HK18_ALL = [].concat(GMB_KL_ALL, GMB_NT_ALL);

// Cross-Harbour Lines
// 10*
const CHT_101_EAST = new Line('101', lineType_HARBOUR, '堅尼地城', '觀塘(裕民坊)', [MTR_ill_kennedytown, HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, PE_SunPoKong, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 5);
const CHT_101_WEST = new Line('101', lineType_HARBOUR, '觀塘(裕民坊)', '堅尼地城', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, PE_ChoiHung, PE_SunPoKong, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, HKU_ShekTongTsui, MTR_ill_kennedytown], 5);
const CHT_102_NORTH = new Line("102", lineType_HARBOUR, "筲箕灣", "美孚", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 8);
const CHT_102_SOUTH = new Line("102", lineType_HARBOUR, "美孚", "筲箕灣", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan], 8);
const CHT_107_NORTH = new Line('107', lineType_HARBOUR, '華貴邨', '九龍灣', [MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, PE_SunPoKong, PE_ChoiHung, KowloonBayCommercial], 15).setNotes('經黃竹坑；假日部分班次經海洋公園');
const CHT_107_SOUTH = new Line('107', lineType_HARBOUR, '九龍灣', '華貴邨', [KowloonBayCommercial, PE_ChoiHung, PE_SunPoKong, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo], 15).setNotes('經黃竹坑；假日部分班次經海洋公園');
// All 10*
const CHT_NUM_10x_ALL = [CHT_101_EAST, CHT_101_WEST, CHT_102_NORTH, CHT_102_SOUTH, CHT_107_NORTH, CHT_107_SOUTH];
// 11*
const CHT_110 = new Line('110', lineType_HARBOUR, '筲箕灣', '尖沙咀', [MTR_ill_saukeiwan, SKW_YiuTungEstate, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_northpoint, EasternCorridor, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_tml_austin, MTR_tml_easttsimshatsui, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_taikoo, MTR_ill_saiwanho, SKW_YiuTungEstate, MTR_ill_saukeiwan], 15).markCircular().setNotes('繁忙時間設有短途班次');
const CHT_111_EAST = new Line('111', lineType_HARBOUR, '中環 (港澳碼頭)', '坪石 (彩虹站)', [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, SunPoKong_Inside, MTR_ktl_diamondhill, MTR_ktl_choihung], 5).setNotes('經新蒲崗、土瓜灣上路、紅隧、灣仔、金鐘');
const CHT_111_WEST = new Line('111', lineType_HARBOUR, '坪石 (彩虹站)', '中環 (港澳碼頭)', [MTR_ktl_choihung, MTR_ktl_diamondhill, SunPoKong_Inside, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan], 5).setNotes('經新蒲崗、土瓜灣上路、紅隧、灣仔、金鐘');
const CHT_112_NORTH = new Line('112', lineType_HARBOUR, '北角(百福道)', '長沙灣(蘇屋邨)', [MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 5);
const CHT_112_SOUTH = new Line('112', lineType_HARBOUR, '長沙灣(蘇屋邨)', '北角(百福道)', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint], 5);
const CHT_113_NORTH = new Line('113', lineType_HARBOUR, '堅尼地城 (卑路乍灣)', '彩虹', [MTR_ill_kennedytown, HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_wanchai, HappyValley, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, HMT_OiManEstate, KowloonHospital, MK_FlowerMarket, BoundaryPrince, MTR_ktl_lokfu, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, ChoiHungBusTerminus], 15).setNotes('經中環、灣仔合和、紅隧、愛民邨、窩打老道、花墟、喇沙、東頭村、黃大仙');
const CHT_113_SOUTH = new Line('113', lineType_HARBOUR, '彩虹', '堅尼地城 (卑路乍灣)', [ChoiHungBusTerminus, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, MTR_ktl_lokfu, BoundaryPrince, KowloonHospital, HMT_OiManEstate, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, HappyValley, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, HKU_ShekTongTsui, MTR_ill_kennedytown], 15).setNotes('經黃大仙、東頭村、喇沙、窩打老道、愛民邨、紅隧、灣仔合和、金鐘、中環、西環電車路');
const CHT_116_NORTH = new Line('116', lineType_HARBOUR, '鰂魚涌(佑民街)', '慈雲山中', [MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, SunPoKong_Inside, MTR_ktl_diamondhill], 7).setNotes('經富山');
const CHT_116_SOUTH = new Line('116', lineType_HARBOUR, '慈雲山中', '鰂魚涌(佑民街)', [MTR_ktl_diamondhill, SunPoKong_Inside, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay], 7).setNotes('經富山');
// All 11*
const CHT_NUM_11x_ALL = [CHT_110, CHT_111_EAST, CHT_111_WEST, CHT_112_NORTH, CHT_112_SOUTH, CHT_113_NORTH, CHT_113_SOUTH, CHT_116_NORTH, CHT_116_SOUTH];
// 17*
const CHT_170_NORTH = new Line("170", lineType_HARBOUR, "華富(中)", "沙田站", [MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_erl_shatin]);
const CHT_170_SOUTH = new Line("170", lineType_HARBOUR, "沙田站", "華富(中)", [MTR_erl_shatin, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo]);
const CHT_171_NORTH = new Line('171', lineType_HARBOUR, '海怡半島', '荔枝角', [MTR_seil_southhoriz, MTR_seil_leitung, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 11).setNotes('星期一至日 06:05-00:00；經堅拿道西');
const CHT_171_SOUTH = new Line('171', lineType_HARBOUR, '荔枝角', '海怡半島', [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_seil_leitung, MTR_seil_southhoriz], 11).setNotes('星期一至日 06:05-00:00');
// All 17*
const CHT_NUM_17x_ALL = [CHT_170_NORTH, CHT_170_SOUTH, CHT_171_NORTH, CHT_171_SOUTH];
// 18*
const CHT_182_NORTH = new Line("182", lineType_HARBOUR, "港澳瑪頭", "愉翠苑", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_mos_cityone]).setNotes("另有城巴邨巴88R來往第一城及中環");
const CHT_182_SOUTH = new Line("182", lineType_HARBOUR, "愉翠苑", "港澳瑪頭", [MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central]).setNotes("另有城巴邨巴88R來往第一城及中環");
// All 18*
const CHT_NUM_18x_ALL = [CHT_182_NORTH, CHT_182_SOUTH];

// All 1**
const CHT_NUM_1xx_ALL = [].concat(CHT_NUM_10x_ALL, CHT_NUM_11x_ALL, CHT_NUM_17x_ALL, CHT_NUM_18x_ALL);

// 30*
const CHT_307_NORTH = new Line("307", lineType_HARBOUR, "中環渡輪碼頭", "大埔中心", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_tinhau, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("特快來往大埔、大老山、東隧、東廊");
const CHT_307_SOUTH = new Line("307", lineType_HARBOUR, "大埔中心", "中環渡輪碼頭", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]).setNotes("特快來往大埔、大老山、東隧、東廊");
// All 30*
const CHT_NUM_30x_ALL = [CHT_307_NORTH, CHT_307_SOUTH];
// 37*
const CHT_373_MORNING = new Line('373', lineType_HARBOUR, '上水', '中環（香港站）', [MTR_erl_sheungshui, FL_TinPing, FL_LuenWoMarket, MTR_erl_fanling, TaiPoRoad_KiuTau, ToloHighway_TaiPo, ToloHighway_Coastal, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, CEN_FerryPier, MTR_tcl_hongkong], 20).markCommuter().setNotes('星期一至六（公眾假期除外） 經聯和墟 大窩西支路 東隧 灣仔 金鐘 中環 上環');
const CHT_373_AFTERNOON = new Line('373', lineType_HARBOUR, '中環（香港站）', '上水', [MTR_tcl_hongkong, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ToloHighway_Coastal, ToloHighway_TaiPo, TaiPoRoad_KiuTau, FL_WahMing, MTR_erl_fanling, FL_LuenWoMarket, FL_TinPing, MTR_erl_sheungshui], 20).markCommuter().setNotes('星期一至六（公眾假期除外） 經上環 中環 金鐘 灣仔  東隧  大窩西支路   聯和墟 石湖墟');
// All 37*
const CHT_NUM_37x_ALL = [CHT_373_MORNING, CHT_373_AFTERNOON];
// All 3**
const CHT_NUM_3xx_ALL = [].concat(CHT_NUM_30x_ALL, CHT_NUM_37x_ALL);
// 60*
const CHT_601_EAST = new Line('601', lineType_HARBOUR, '金鐘(東)', '寶達', [MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, MTR_ktl_kwuntong, KT_SauMauPing, KT_PoTatEstate], 13).setNotes('經秀茂坪');
const CHT_601_WEST = new Line('601', lineType_HARBOUR, '寶達', '金鐘(東)', [KT_PoTatEstate, KT_SauMauPing, MTR_ktl_kwuntong, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty], 13).setNotes('經銅鑼灣禮頓、秀茂坪');
const CHT_603_EAST = new Line('603', lineType_HARBOUR, '平田', '中環渡輪碼頭', [MTR_ktl_lamtin, MTR_ktl_yautong, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_wanchai, MTR_ill_central, MTR_ill_sheungwan, CEN_FerryPier], 15);
const CHT_603_WEST = new Line('603', lineType_HARBOUR, '中環渡輪碼頭', '平田', [CEN_FerryPier, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_yautong, MTR_ktl_lamtin], 15);
const CHT_606_NORTH = new Line('606', lineType_HARBOUR, '小西灣(藍灣半島)', '彩雲(豐盛街)', [MTR_ill_siusaiwan, MTR_ill_chaiwan, CW_ChaiWanRoad, SKW_YiuTungEstate, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, KowloonBayCommercial, MTR_ktl_choihung], 20).setNotes('經九龍灣商貿區');
const CHT_606_SOUTH = new Line('606', lineType_HARBOUR, '彩雲(豐盛街)', '小西灣(藍灣半島)', [MTR_ktl_choihung, KowloonBayCommercial, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, SKW_YiuTungEstate, CW_ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_siusaiwan], 20).setNotes('經九龍灣商貿區');
// All 60*
const CHT_NUM_60x_ALL = [CHT_601_EAST, CHT_601_WEST, CHT_603_EAST, CHT_603_WEST, CHT_606_NORTH, CHT_606_SOUTH];
// 61*
const CHT_619_NEGATIVE = new Line('619', lineType_HARBOUR, '順利', '中環(港澳碼頭)', [KT_ShunLeeEstate, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan], 13);
const CHT_619_POSITIVE = new Line('619', lineType_HARBOUR, '中環(港澳碼頭)', '順利', [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, KT_ShunLeeEstate], 13);
// All 61*
const CHT_NUM_61x_ALL = [CHT_619_NEGATIVE, CHT_619_POSITIVE];
// 67*
const CHT_671_NORTH = new Line('671', lineType_HARBOUR, '鴨脷洲 (利樂街)', '鑽石山站', [MTR_seil_southhoriz, MTR_seil_leitung, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, MTR_ktl_diamondhill], 30).setNotes('星期一至六 06:25-20:15 (星期日為 07:30-19:45)');
const CHT_671_SOUTH = new Line('671', lineType_HARBOUR, '鑽石山站', '鴨脷洲 (利樂街)', [MTR_ktl_diamondhill, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_seil_leitung, MTR_seil_southhoriz], 30).setNotes('星期一至六 06:30-20:15 (星期日為 07:30-19:45)');
const CHT_673_NORTH = new Line('673', lineType_HARBOUR, '中環（香港站 )', '上水', [MTR_tcl_hongkong, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ToloHighway_Coastal, ToloHighway_TaiPo, FanlingHighway_LamTsuen, MTR_erl_fanling, FL_LuenWoMarket, FL_TinPing, MTR_erl_sheungshui], 30).setNotes('星期一至日 10:30-23:30 經香港站 中環 金鐘 灣仔 銅鑼灣 東隧 大老山隧道 粉嶺 上水');
const CHT_673_SOUTH = new Line('673', lineType_HARBOUR, '上水', '中環（林士街 )', [MTR_erl_sheungshui, FL_TinPing, FL_LuenWoMarket, MTR_erl_fanling, FanlingHighway_Interchange, FanlingHighway_LamTsuen, ToloHighway_TaiPo, ToloHighway_Coastal, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_tinhau ,MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, CEN_FerryPier, MTR_tcl_hongkong], 30).setNotes('星期一至日 09:00-20:30 經上水 粉嶺 大老山隧道 東隧 銅鑼灣 灣仔 中環 香港站');
// All 67*
const CHT_NUM_67x_ALL = [CHT_671_NORTH, CHT_671_SOUTH, CHT_673_NORTH, CHT_673_SOUTH];
// 68*
const CHT_682_NORTH = new Line('682', lineType_HARBOUR, '柴灣(東)', '烏溪沙', [MTR_ill_siusaiwan, MTR_ill_chaiwan, CW_ChaiWanRoad, MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ST_SiuLekYuenPlayground, ST_ShatinHospital, MTR_mos_taishuihang, MOS_HengHongStreet, MTR_mos_maonshan, MOS_KamYingCourt, MTR_mos_wukaisha], 15).setNotes('經東隧、大隧、沙田第一城、濱景花園、富安花園、恆安/耀安、馬鞍山市中心、錦英苑、利安');
const CHT_682_SOUTH = new Line('682', lineType_HARBOUR, '烏溪沙', '柴灣(東)', [MTR_mos_wukaisha, MOS_KamYingCourt, MTR_mos_maonshan, MOS_HengHongStreet, MTR_mos_taishuihang, ST_ShatinHospital, ST_SiuLekYuenPlayground, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan, CW_ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_siusaiwan], 15).setNotes('經大隧、東隧、健康邨、太古、西灣河、筲箕灣、柴灣道、漁灣邨、小西灣');
// All 68*
const CHT_NUM_68x_ALL = [CHT_682_NORTH, CHT_682_SOUTH];
// 69*
const CHT_690_EAST = new Line('690', lineType_HARBOUR, '中環 (交易廣場)', '康盛花園', [MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, TseungKwanOTunnel, MTR_tko_polam, TKO_HongSingGarden], 30).setNotes('經中環至北角沿途各站（MTR)，往藍田、寶林、翠林邨');
const CHT_690_WEST = new Line('690', lineType_HARBOUR, '康盛花園', '中環 (交易廣場)', [TKO_HongSingGarden, MTR_tko_polam, TseungKwanOTunnel, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central], 30).setNotes('經翠林邨、寶林、啟田道、北角、炮台山、銅鑼灣至中環沿途各站（MTR)');
const CHT_694_NORTH = new Line('694', lineType_HARBOUR, '小西灣邨', '調景嶺站', [MTR_ill_siusaiwan, MTR_ill_chaiwan, CW_ChaiWanRoad, MTR_ill_saukeiwan, MTR_ill_saiwanho, EastHarbourTunnel, EastHarbourTunnel_Interchange, MTR_ktl_lamtin, TseungKwanOTunnel, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 25).setNotes('特快線，設有分段收費');
const CHT_694_SOUTH = new Line('694', lineType_HARBOUR, '調景嶺站', '小西灣邨', [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TseungKwanOTunnel, MTR_ktl_lamtin, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_saiwanho, MTR_ill_saukeiwan, CW_ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_siusaiwan], 25).setNotes('特快線，設有分段收費');
// All 69*
const CHT_NUM_69x_ALL = [CHT_690_EAST, CHT_690_WEST, CHT_694_NORTH, CHT_694_SOUTH];
// All 6**
const CHT_NUM_6xx_ALL = [].concat(CHT_NUM_60x_ALL, CHT_NUM_61x_ALL, CHT_NUM_67x_ALL, CHT_NUM_68x_ALL, CHT_NUM_69x_ALL);
// 90*
const CHT_904_NORTH = new Line('904', lineType_HARBOUR, '堅尼地城(卑路乍灣)', '荔枝角', [MTR_ill_kennedytown, HKU_ShekTongTsui, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tcl_olympic, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 17);
const CHT_904_SOUTH = new Line('904', lineType_HARBOUR, '荔枝角', '堅尼地城(卑路乍灣)', [MTR_tml_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_tcl_olympic, WestHarbourTunnel_Interchange, WestHarbourTunnel, HKU_ShekTongTsui, MTR_ill_kennedytown], 17);
const CHT_905_NORTH = new Line('905', lineType_HARBOUR, '灣仔北', '荔枝角', [WC_FerryPier, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, HKU_ShekTongTsui, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tcl_olympic, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 10);
const CHT_905_SOUTH = new Line('905', lineType_HARBOUR, '荔枝角', '灣仔北', [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_tcl_olympic, WestHarbourTunnel_Interchange, WestHarbourTunnel, HKU_ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_erl_exhibition, WC_FerryPier], 10);
// All 90*
const CHT_NUM_90x_ALL = [CHT_904_NORTH, CHT_904_SOUTH, CHT_905_NORTH, CHT_905_SOUTH];
// 91*
const CHT_914_SOUTH = new Line('914', lineType_HARBOUR, '長沙灣(海麗邨)', '銅鑼灣(天后)', [MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tml_austin, MTR_tcl_olympic, MTR_tcl_namcheong], 18).setNotes('經富昌邨、南昌邨、荔枝角道、大角咀道、海富苑、富榮花園/柏景灣、佐敦、西隧、中環、金鐘、灣仔、崇光百貨');
const CHT_914_NORTH = new Line('914', lineType_HARBOUR, '銅鑼灣(天后)', '長沙灣(海麗邨)', [MTR_tcl_namcheong, MTR_tcl_olympic, MTR_tml_austin, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau], 18).setNotes('經大坑、銅鑼灣、灣仔、金鐘、中環、西隧、佐敦、富榮花園、柏景灣、大角咀、深水埗(海壇街)、南昌邨、富昌邨');
const CHT_914P_MORNING = new Line('914P', lineType_HARBOUR, '海麗邨', '銅鑼灣(天后)', [MTR_tcl_namcheong, MTR_tcl_olympic, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_admiralty, MTR_erl_exhibition, MTR_ill_causewaybay, MTR_ill_tinhau], 1440).markCommuter().setNotes('平日早上只開一班，經富昌邨、港灣豪庭、維港灣、海富苑、富榮花園/柏景灣、西隧、港澳碼頭、中環、政府總部、會展、維園');
const CHT_914X_MORNING = new Line('914X', lineType_HARBOUR, '海麗邨', '銅鑼灣(天后)', [MTR_tcl_namcheong, MTR_tcl_olympic, MTR_tml_austin, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_admiralty, MTR_erl_exhibition, MTR_ill_causewaybay, MTR_ill_tinhau], 1440).markCommuter().setNotes('平日開三班車；經富昌邨、南昌邨、深水埗(海壇街)、大角咀、海富苑、富榮花園/柏景灣、佐敦、西隧、港澳碼頭、IFC、會展、維園');
// All 91*
const CHT_NUM_91x_ALL = [CHT_914_NORTH, CHT_914_SOUTH, CHT_914P_MORNING, CHT_914X_MORNING];
// 93*
const CHT_930_NORTH = new Line('930', lineType_HARBOUR, '灣仔(北)', '荃灣西站', [WC_FerryPier, MTR_erl_exhibition, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, WestKowloonHighway, LaiKingChokePoint, MTR_twl_kwaifong, MTR_twl_kwaihing, TW_KwaiChungEstate, TW_Citywalk, MTR_tml_tsuenwanwest], 15).setNotes('部分班次以愉景新城為尾站；經金鐘、中環、上環、西隧、葵芳、葵涌邨、大窩口邨、沙咀道');
const CHT_930_SOUTH = new Line('930', lineType_HARBOUR, '荃灣西站', '灣仔(北)', [MTR_tml_tsuenwanwest, TW_Citywalk, TW_KwaiChungEstate, MTR_twl_kwaihing, MTR_twl_kwaifong, LaiKingChokePoint, WestKowloonHighway, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_erl_exhibition, WC_FerryPier], 15).setNotes('經楊屋道街市、大窩口邨、葵涌邨、葵芳、西隧、港澳碼頭、怡和大廈、金鐘、灣仔');
const CHT_930X_NORTH = new Line('930X', lineType_HARBOUR, '銅鑼灣(摩頓臺)', '荃灣(愉景新城)', [Moreton_CausewayBay, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, WestKowloonHighway, LaiKingChokePoint, TW_TsuenWanRoad, TW_Citywalk, MTR_twl_tsuenking], 20).setNotes('經崇光百貨、灣仔、金鐘、中環、上環、西隧、海濱花園、德士古道、沙咀道');
const CHT_930X_SOUTH = new Line('930X', lineType_HARBOUR, '荃灣(愉景新城)', '銅鑼灣(摩頓臺)', [MTR_twl_tsuenking, TW_Citywalk, TW_TsuenWanRoad, LaiKingChokePoint, WestKowloonHighway, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, Moreton_CausewayBay], 20).setNotes('經沙咀道、海濱花園、西隧、港澳碼頭、怡和大廈、金鐘、入境事務大樓、百德新街');
// All 93*
const CHT_NUM_93x_ALL = [CHT_930_NORTH, CHT_930_SOUTH, CHT_930X_NORTH, CHT_930X_SOUTH];
// 96*
const CHT_960_NORTH = new Line('960', lineType_HARBOUR, '灣仔北', '屯門建生邨', [WC_FerryPier, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, WestKowloonHighway, LaiKingChokePoint, TY_CheungTsingTunnel, TY_TingKauBridge, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, TM_TuenMunTownCenter, KCR_lrt_2_primeview, KCR_lrt_2_taihing, KCR_lrt_3_tinking], 15).setNotes('經屯門公路、石排站');
const CHT_960_SOUTH = new Line('960', lineType_HARBOUR, '屯門建生邨', '灣仔北', [KCR_lrt_3_tinking, KCR_lrt_2_taihing, KCR_lrt_2_primeview, TM_TuenMunTownCenter, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, WestKowloonHighway, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_erl_exhibition, WC_FerryPier], 15).setNotes('經屯門公路、石排站');
const CHT_961_NORTH = new Line('961', lineType_HARBOUR, '灣仔會展', '屯門山景邨', [MTR_erl_exhibition, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, WestKowloonHighway, LaiKingChokePoint, TY_CheungTsingTunnel, TY_TingKauBridge, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_1_samshing, TM_TuenMunTownCenter, MTR_tml_tuenmun, KCR_lrt_2_shanking], 20).setNotes('經豐景圍、安定、市中心');
const CHT_961_SOUTH = new Line('961', lineType_HARBOUR, '屯門山景邨', '灣仔會展', [KCR_lrt_2_shanking, MTR_tml_tuenmun, TM_TuenMunTownCenter, KCR_lrt_1_samshing, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, WestKowloonHighway, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_erl_exhibition], 20).setNotes('經豐景圍、安定、市中心');
// All 96*
const CHT_NUM_96x_ALL = [CHT_960_NORTH, CHT_960_SOUTH, CHT_961_NORTH, CHT_961_SOUTH];
// 97*
const CHT_970_NORTH = new Line('970', lineType_HARBOUR, '數碼港', '長沙灣(蘇屋邨)', [MTR_swil_cyberport, MTR_swil_wahfoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 12).setNotes('經華富、瑪麗醫院、港大、西營盤、西隧、西九龍站、彌敦道、深水埗');
const CHT_970_SOUTH = new Line('970', lineType_HARBOUR, '長沙灣(蘇屋邨)', '數碼港', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_hsr_westkowloon, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, MTR_swil_wahfoo, MTR_swil_cyberport], 12).setNotes('經深水埗、彌敦道、佐敦、西九龍站、西隧、港大、瑪麗醫院、');
const CHT_970X_NORTH = new Line('970X', lineType_HARBOUR, '香港仔', '長沙灣(蘇屋邨)', [MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 12).setNotes('經置富、瑪麗醫院、港大、山道天橋、西隧、西九龍站、佐敦、彌敦道、深水埗');
const CHT_970X_SOUTH = new Line('970X', lineType_HARBOUR, '長沙灣(蘇屋邨)', '香港仔', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_hsr_westkowloon, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen], 12).setNotes('經深水埗、彌敦道、佐敦、西九龍站、西隧、港大、瑪麗醫院、置富');
const KMB_978_NORTH = new Line('978', lineType_KMB, '灣仔北', '華明總站', [WC_FerryPier, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, WestHarbourTunnel, WestHarbourTunnel_Interchange, WestKowloonHighway, LaiKingChokePoint, TY_CheungTsingTunnel, TY_TingKauBridge, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, SunTinHighway, FanlingHighway_KwuTung, MTR_erl_sheungshui, MTR_erl_fanling, FL_WahMing], 20).setNotes('星期一至日 10:00-23:30；經大欖隧道、西隧');
const KMB_978_SOUTH = new Line('978', lineType_KMB, '華明總站', '灣仔北', [FL_WahMing, MTR_erl_fanling, MTR_erl_sheungshui, FanlingHighway_KwuTung, SunTinHighway, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TY_TingKauBridge, TY_CheungTsingTunnel, LaiKingChokePoint, WestKowloonHighway, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_admiralty, MTR_erl_exhibition, WC_FerryPier], 20).setNotes('星期一至日 06:00-23:00；經大欖隧道、西隧');

// All 97*
const CHT_NUM_97x_ALL = [CHT_970_NORTH, CHT_970_SOUTH, CHT_970X_NORTH, CHT_970X_SOUTH, KMB_978_NORTH, KMB_978_SOUTH];

// All 9**
const CHT_NUM_9xx_ALL = [].concat(CHT_NUM_90x_ALL, CHT_NUM_91x_ALL, CHT_NUM_93x_ALL, CHT_NUM_96x_ALL, CHT_NUM_97x_ALL);

// N1**
const CHT_N121_EAST = new Line('N121', lineType_HARBOUR, '中環(港澳碼頭)', '牛頭角', [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, SunPoKong_Inside, MTR_ktl_diamondhill, PE_ChoiHung, MTR_ktl_kowloonbay], 15).markNightOnly().setNotes('經金鐘、灣仔、紅隧、土瓜灣上路、九龍城、新蒲崗、彩虹');
const CHT_N121_WEST = new Line('N121', lineType_HARBOUR, '牛頭角', '中環(港澳碼頭)', [MTR_ktl_kowloonbay, MTR_ktl_choihung, MTR_ktl_diamondhill, SunPoKong_Inside, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan], 15).markNightOnly().setNotes('經金鐘、灣仔、紅隧、土瓜灣上路、九龍城、新蒲崗、彩虹');

// All N1**
const CHT_NUM_N1xx_ALL = [CHT_N121_EAST, CHT_N121_WEST];

// All Nightly CHT bus
const CHT_NUM_Nxxx_ALL = [].concat(CHT_NUM_N1xx_ALL);

// All Cross-Harbour Bus
const CHT_HK18_ALL = [].concat(CHT_NUM_1xx_ALL, CHT_NUM_3xx_ALL, CHT_NUM_6xx_ALL, CHT_NUM_9xx_ALL, CHT_NUM_Nxxx_ALL);

// All Section

const HK18_ALL_LINES: Array<Line> = [].concat(WALK_HK18_ALL, TRAM_ALL, FERRY_HK18_ALL, GMB_HK18_ALL, KMB_HK18_ALL, LWB_HK18_ALL, CTB_HK18_ALL, NWFB_HK18_ALL, CHT_HK18_ALL);