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

const WALK_HKI_CENTRAL_ALL = [WALK_HKI_WC_Ex, WALK_HKI_Ex_WC, WALK_HKI_Ce_Ad, WALK_HKI_Ad_Ce];

// HKU "The Stronghold"
const WALK_HKI_HKU_ToShore = new Line("", lineType_WALK, "HKU Centennial", "西寶城", [MTR_ill_hku, WestWood_HKU]);
const WALK_HKI_HKU_ToStronghold = new Line("", lineType_WALK, "西寶城", "HKU Centennial", [WestWood_HKU, MTR_ill_hku]);

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

const WALK_KLP_HMT_ALL = [WALK_KLP_HMT_HMT_WMP, WALK_KLP_HMT_WMP_HMT, WALK_KLP_HMT_HMT_HHM, WALK_KLP_HMT_HHM_HMT, WALK_KLP_HMT_HHM_WMP, WALK_KLP_HMT_WMP_HHM];

// West Kowloon Chain
const WALK_KLP_WKL_CHAIN_EAST = new Line("西九四站連環", lineType_WALK, "九龍站", "佐敦站", [MTR_tcl_kowloon, MTR_hsr_westkowloon, MTR_tml_austin, MTR_twl_jordan]);
const WALK_KLP_WKL_CHAIN_WEST = new Line("西九四站連環", lineType_WALK, "佐敦站", "九龍站", [MTR_twl_jordan, MTR_tml_austin, MTR_hsr_westkowloon, MTR_tcl_kowloon]);

const WALK_KLP_WKL_ALL = [WALK_KLP_WKL_CHAIN_EAST, WALK_KLP_WKL_CHAIN_WEST];

// Sham Shui Po
const WALK_KLP_SSP_SSP_NC = new Line("", lineType_WALK, "深水埗", "南昌站", [MTR_twl_shamshuipo, MTR_tml_namcheong]);
const WALK_KLP_SSP_NC_SSP = new Line("", lineType_WALK, "南昌站", "深水埗", [MTR_tml_namcheong, MTR_twl_shamshuipo]);

const WALK_KLP_SSP_ALL = [WALK_KLP_SSP_SSP_NC, WALK_KLP_SSP_NC_SSP];

// Wong Tai Sin
const WALK_KLP_WTS_Uphill = new Line("", lineType_WALK, "黃大仙", "竹園", [MTR_ktl_wongtaisin, ChukYuen]);
const WALK_KLP_WTS_Downhill = new Line("", lineType_WALK, "竹園", "黃大仙", [ChukYuen, MTR_ktl_wongtaisin]);

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
const WALK_NTE_ST_STW = new Line("瀝源橋", lineType_WALK, "沙田市中心", "乙明邨", [MTR_erl_shatin, JatMinEstate]);
const WALK_NTE_STW_ST = new Line("瀝源橋", lineType_WALK, "乙明邨", "沙田市中心", [JatMinEstate, MTR_erl_shatin]);
const WALK_NTE_ST_LY_SK = new Line("沙燕橋", lineType_WALK, "瀝源邨", "沙角邨", [YuenWo, MTR_mos_shatinwai]);
const WALK_NTE_ST_SK_LY = new Line("沙燕橋", lineType_WALK, "沙角邨", "瀝源邨", [MTR_mos_shatinwai, YuenWo]);
const WALK_NTE_ST_LY_Cen = new Line("", lineType_WALK, "瀝源邨/禾輋邨", "沙田市中心", [YuenWo, ShatinTownCenter]);
const WALK_NTE_ST_Cen_LY = new Line("", lineType_WALK, "沙田市中心", "瀝源邨/禾輋邨", [ShatinTownCenter, YuenWo]);
const WALK_NTE_ST_WC_Sea = new Line("翠榕橋", lineType_WALK, "禾輋邨", "沙田海鮮舫", [ShatinSeafood, YuenWo]);
const WALK_NTE_ST_Sea_WC = new Line("翠榕橋", lineType_WALK, "沙田海鮮舫", "禾輋邨", [YuenWo, ShatinSeafood]);
const WALK_NTE_ST_CS = new Line("", lineType_WALK, "沙田市中心", "秦石邨", [MTR_erl_shatin, MTR_mos_chekungtemple]);
const WALK_NTE_CS_ST = new Line("", lineType_WALK, "秦石邨", "沙田市中心", [MTR_mos_chekungtemple, MTR_erl_shatin]);
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

const WALK_NTW_CO_TY = new Line("", lineType_WALK, "長安邨", "青衣站", [CheungOn, MTR_tcl_tsingyi]);
const WALK_NTW_TY_CO = new Line("", lineType_WALK, "青衣站", "長安邨", [MTR_tcl_tsingyi, CheungOn]);

const WALK_NTW_TSUENKWAITSING_ALL = [WALK_NTW_TKT_TWSYS_NORTH, WALK_NTW_TKT_TWSYS_SOUTH, WALK_NTW_CO_TY, WALK_NTW_TY_CO];

// Yuen Long
const WALK_NTW_YL_FTR_LP = new Line("", lineType_WALK, "豐年路", "朗屏站", [KCR_lrt_fungninroad, MTR_tml_longping]);
const WALK_NTW_YL_LP_FTR = new Line("", lineType_WALK, "豐年路", "朗屏站", [MTR_tml_longping, KCR_lrt_fungninroad]);

const WALK_NTW_YL_ALL = [WALK_NTW_YL_FTR_LP, WALK_NTW_YL_LP_FTR]

const WALK_NTW_ALL = [].concat(WALK_NTW_TSUENKWAITSING_ALL, WALK_NTW_YL_ALL);

const WALK_HK18_ALL = [].concat(WALK_HKI_ALL, WALK_KLP_ALL, WALK_NTE_ALL, WALK_NTW_ALL);

/**
 * Tram Section
 * Tram lines have no explicit name; they simply mark their destination, and off they go.
 */

const TRAM_1_EAST = new Line("", lineType_TRAM, "上環西港城", "筲箕灣", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const TRAM_1_WEST = new Line("", lineType_TRAM, "筲箕灣", "上環西港城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
const TRAM_6_EAST = new Line("", lineType_TRAM, "堅尼地城", "筲箕灣", [MTR_ill_kennedytown, ShekTongTsui, ConnaughtRoadWest_Stop, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const TRAM_6_WEST = new Line("", lineType_TRAM, "筲箕灣", "堅尼地城", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, ConnaughtRoadWest_Stop, ShekTongTsui, MTR_ill_kennedytown]);

const TRAM_ALL = [TRAM_1_EAST, TRAM_1_WEST, TRAM_6_EAST, TRAM_6_WEST];

/**
 * Ferry Section
 * Ferry lines travel on water, so it is technically impossible to say that they follow a certain path.
 */

/**
 * Central -> Tsim Sha Tsui ferry.
 * 
 * Internal pathing marks Central instead of Hong Kong station for historical preservation.
 */
const FERRY_HARB_1_NORTH = new Line("天星尖中", lineType_FERRY, "中環碼頭", "尖沙咀碼頭", [MTR_ill_central, MTR_twl_tsimshatsui], 7).markFerryTravelCost(2);
const FERRY_HARB_1_SOUTH = new Line("天星尖中", lineType_FERRY, "尖沙咀碼頭", "中環碼頭", [MTR_twl_tsimshatsui, MTR_ill_central], 7).markFerryTravelCost(2);

const FERRY_HARB_ALL = [FERRY_HARB_1_NORTH, FERRY_HARB_1_SOUTH];

const FERRY_HK18_ALL = [].concat(FERRY_HARB_ALL);

// KMB Section

// 00*
const KMB_1_NORTH = new Line('1', lineType_KMB, '尖沙咀碼頭', '竹園邨', [MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MongKokFlowerMarket, BoundaryPrince, MTR_ktl_lokfu, ChukYuen], 10).setNotes('經彌敦道、喇沙、九龍城、東頭邨');
const KMB_1_SOUTH = new Line('1', lineType_KMB, '竹園邨', '尖沙咀碼頭', [ChukYuen, MTR_ktl_lokfu, BoundaryPrince, MongKokFlowerMarket, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui], 10).setNotes('經彌敦道、喇沙、九龍城、東頭邨');
const KMB_6_NORTH = new Line("6", lineType_KMB, "尖沙咀碼頭", "荔枝角", [MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 8);
const KMB_6_SOUTH = new Line("6", lineType_KMB, "荔枝角", "尖沙咀碼頭", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui], 8);
const KMB_6D_EAST = new Line("6D", lineType_KMB, "美孚", "牛頭角", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, MongKokFlowerMarket, BoundaryPrince, PE_RegalOrientalHotel, SunPoKong, MTR_ktl_choihung, MTR_ktl_kowloonbay], 15);
const KMB_6D_WEST = new Line("6D", lineType_KMB, "牛頭角", "美孚", [MTR_ktl_kowloonbay, MTR_ktl_choihung, SunPoKong, PE_RegalOrientalHotel, BoundaryPrince, MongKokFlowerMarket, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 15);

// All 00*
const KMB_NUM_00x_ALL = [KMB_1_NORTH, KMB_1_SOUTH, KMB_6_NORTH, KMB_6_SOUTH, KMB_6D_EAST, KMB_6D_WEST];

// 01*
const KMB_11D_EAST = new Line("11D", lineType_KMB, "樂富", "觀塘碼頭", [MTR_ktl_lokfu, BoundaryPrince, PE_RegalOrientalHotel, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KwunTongFerryPier], 20);
const KMB_11D_WEST = new Line("11D", lineType_KMB, "觀塘碼頭", "樂富", [KwunTongFerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, PE_RegalOrientalHotel, BoundaryPrince, MTR_ktl_lokfu], 20);

// All 01*
const KMB_NUM_01x_ALL = [KMB_11D_EAST, KMB_11D_WEST];

// 03*
const KMB_30X_NORTH = new Line("30X", lineType_KMB, "黃埔花園", "荃威花園", [MTR_ktl_whampoa, MTR_ktl_homantin, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking], 20);
const KMB_30X_SOUTH = new Line("30X", lineType_KMB, "荃威花園", "黃埔花園", [MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_ktl_homantin, MTR_ktl_whampoa], 20);
const KMB_36A_NORTH = new Line("36A", lineType_KMB, "長沙灣深旺道", "梨木樹", [MTR_tml_namcheong, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo, LaiKingChokePoint, MTR_twl_laiking, MTR_twl_kwaifong, LeiMukShueEstate], 20);
const KMB_36A_SOUTH = new Line("36A", lineType_KMB, "梨木樹", "長沙灣深旺道", [LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_laiking, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_tml_namcheong], 20);

// All 03*
const KMB_NUM_03x_ALL = [KMB_30X_NORTH, KMB_30X_SOUTH, KMB_36A_NORTH, KMB_36A_SOUTH];

// 04*
// Negative rotation vector -> clockwise path
const KMB_40X_EAST = new Line("40X", lineType_KMB, "葵涌邨", "烏溪沙站", [KwaiChungEstate, MTR_twl_kwaihing, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, YuenWo, ShatinSeafood, ShatinHospital, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, KamYingCourt, MTR_mos_wukaisha], 13);
const KMB_40X_WEST = new Line("40X", lineType_KMB, "烏溪沙站", "葵涌邨", [MTR_mos_wukaisha, KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinHospital, ShatinSeafood, YuenWo, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, KwaiChungEstate], 13);
const KMB_43X_EAST = new Line("43X", lineType_KMB, "荃灣西站", "耀安", [MTR_tml_tsuenwanwest, ChungOnStreet, YiPeiChuen, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinSeafood, ShatinHospital, ChevalierGarden, MTR_mos_hengon, HengHongStreet], 13);
const KMB_43X_WEST = new Line("43X", lineType_KMB, "耀安", "荃灣西站", [HengHongStreet, MTR_mos_hengon, ChevalierGarden, ShatinHospital, ShatinSeafood, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, YiPeiChuen, ChungOnStreet, MTR_tml_tsuenwanwest], 13);
const KMB_46X_NEGATIVE = new Line("46X", lineType_KMB, "美孚", "顯徑", [MTR_twl_meifoo, MTR_twl_laiking, MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, MTR_mos_taiwai, MTR_tml_hinkeng], 6);
const KMB_46X_POSITIVE = new Line("46X", lineType_KMB, "顯徑", "美孚", [MTR_tml_hinkeng, MTR_mos_taiwai, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong, MTR_twl_laiking, MTR_twl_meifoo], 6);
const KMB_47A_EAST = new Line("47A", lineType_KMB, "葵芳南", "水泉澳", [MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, MTR_mos_shatinwai, ShuiChuenO], 30);
const KMB_47A_WEST = new Line("47A", lineType_KMB, "水泉澳", "葵芳南", [ShuiChuenO, MTR_mos_shatinwai, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 30).setNotes("早繁時間不經沙田市中心");
const KMB_47X_EAST = new Line("47X", lineType_KMB, "葵盛東", "秦石", [MTR_twl_kwaifong, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple], 8);
const KMB_47X_WEST = new Line("47X", lineType_KMB, "秦石", "葵盛東", [MTR_mos_chekungtemple, MTR_mos_shatinwai, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_kwaihing, MTR_twl_kwaifong], 8).setNotes("早繁時間不經沙田市中心");
const KMB_48X_EAST = new Line("48X", lineType_KMB, "灣景花園", "禾輋邨", [BelvedereGarden, MTR_twl_tsuenking, MTR_twl_tsuenwan, MTR_twl_taiwohau, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, YuenWo], 5);
const KMB_48X_WEST = new Line("48X", lineType_KMB, "禾輋邨", "灣景花園", [YuenWo, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_taiwohau, MTR_twl_tsuenwan, MTR_twl_tsuenking, BelvedereGarden], 5);
const KMB_49X_EAST = new Line("49X", lineType_KMB, "青衣碼頭", "沙田廣源", [TsingYiFerryPier, CheungOn, NinaTowers, MTR_twl_tsuenwan, CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, BelairGardens, MTR_mos_cityone], 8);
const KMB_49X_WEST = new Line("49X", lineType_KMB, "沙田廣源", "青衣碼頭", [MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, CheungPeiShanRoad, MTR_twl_tsuenwan, NinaTowers, CheungOn, TsingYiFerryPier], 8);

// All 04*
const KMB_NUM_04x_ALL = [KMB_40X_EAST, KMB_40X_WEST, KMB_43X_EAST, KMB_43X_WEST, KMB_46X_NEGATIVE, KMB_46X_POSITIVE, KMB_47A_EAST, KMB_47A_WEST, KMB_47X_EAST, KMB_47X_WEST, KMB_48X_EAST, KMB_48X_WEST, KMB_49X_EAST, KMB_49X_WEST];
// 06*
const KMB_64K_EAST = new Line("64K", lineType_KMB, "元朗(西)", "大埔墟站", [KCR_lrt_fungninroad, MTR_tml_yuenlong, KSR_KoPoTsuen, MTR_tml_kamsheungroad, KSR_PatHeung, KSR_SheugnChuen, Rural_Kadoorie, TaiPo_LamChuen, MTR_erl_taiwo, WanTauKokLane, MTR_erl_taipomarket]).setNotes("途經林錦公路");
const KMB_64K_WEST = new Line("64K", lineType_KMB, "大埔墟站", "元朗(西)", [MTR_erl_taipomarket,  MTR_erl_taiwo, TaiPo_LamChuen, Rural_Kadoorie, KSR_SheugnChuen, KSR_PatHeung, MTR_tml_kamsheungroad, KSR_KoPoTsuen, MTR_tml_yuenlong, KCR_lrt_fungninroad]).setNotes("途經林錦公路");
const KMB_67M_EAST = new Line("67M", lineType_KMB, "兆康苑", "葵芳站", [MTR_tml_siuhong, LingNamUniversity, KCR_lrt_primeview, KCR_lrt_puito, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, MTR_twl_tsuenking, ChungOnStreet, MTR_twl_taiwohau, MTR_twl_kwaihing, MTR_twl_kwaifong], 10);
const KMB_67M_WEST = new Line("67M", lineType_KMB, "葵芳站", "兆康苑", [MTR_twl_kwaifong, KwongFaiWai, MTR_twl_taiwohau, ChungOnStreet, MTR_twl_tsuenking, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_puito, KCR_lrt_primeview, LingNamUniversity, MTR_tml_siuhong], 10);
// All 06*
const KMB_NUM_06x_ALL = [KMB_64K_EAST, KMB_64K_WEST, KMB_67M_EAST, KMB_67M_WEST];
// 07*
const KMB_72_NORTH = new Line("72", lineType_KMB, "長沙灣", "大埔太和", [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, MTR_erl_shatin, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo], 20);
const KMB_72_SOUTH = new Line("72", lineType_KMB, "大埔太和", "長沙灣", [MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, MTR_erl_shatin, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok], 20);
const KMB_72A_NORTH = new Line("72A", lineType_KMB, "大圍站", "大埔工業邨", [MTR_erl_taiwai, MTR_mos_chekungtemple, JatMinEstate, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad], 30).setNotes("設有雙程分段收費");
const KMB_72A_SOUTH = new Line("72A", lineType_KMB, "大埔工業邨", "大圍站", [WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, JatMinEstate, MTR_erl_taiwai], 30).setNotes("設有雙程分段收費");
const KMB_72X_NORTH = new Line("72X", lineType_KMB, "旺角(柏景灣)", "大埔中心", [MTR_tcl_olympic, MTR_ktl_mongkok, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_72X_SOUTH = new Line("72X", lineType_KMB, "大埔中心", "旺角(柏景灣)", [WanTauKokLane, KwongFukEstate, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_ktl_mongkok, MTR_tcl_olympic]).setNotes("大埔特快");
const KMB_73_NORTH = new Line("73", lineType_KMB, "大埔工業邨", "粉嶺華明", [KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, WahMingTerminus]).setNotes("非辦工時間不入工業邨");
const KMB_73_SOUTH = new Line("73", lineType_KMB, "粉嶺華明", "大埔工業邨", [WahMingTerminus, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane]).setNotes("非辦工時間不入工業邨");
const KMB_73A_NORTH = new Line("73A", lineType_KMB, "愉翠苑", "粉嶺華明", [MTR_mos_cityone, MTR_erl_fotan, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_HongLokYuen, TaiPoRoad_KiuTau, WahMingTerminus], 30);
const KMB_73A_SOUTH = new Line("73A", lineType_KMB, "粉嶺華明", "愉翠苑", [WahMingTerminus, TaiPoRoad_KiuTau, TaiPoRoad_HongLokYuen, MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, MTR_erl_fotan, MTR_mos_cityone], 30).setNotes("設有雙程分段收費");
const KMB_73X_NORTH = new Line("73X", lineType_KMB, "荃灣(如心廣場)", "富善邨", [NinaTowers, ChungOnStreet, MTR_twl_taiwohau, LeiMukShueEstate, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_73X_SOUTH = new Line("73X", lineType_KMB, "富善邨", "荃灣(如心廣場)", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, LeiMukShueEstate, MTR_twl_taiwohau, ChungOnStreet, NinaTowers]).setNotes("大埔特快");
const KMB_74A_NORTH = new Line("74A", lineType_KMB, "啟業", "太和", [KowloonBayCommercial, HungNgokHouse_ChoiHung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, JatMinEstate, BelairGardens, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, MTR_erl_taiwo], 60).setNotes("班次疏落");
const KMB_74A_SOUTH = new Line("74A", lineType_KMB, "太和", "啟業", [MTR_erl_taiwo, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, BelairGardens, JatMinEstate, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, ChoiHungBusTerminus, KowloonBayCommercial], 60).setNotes("班次疏落");
// All 07*
const KMB_NUM_07x_ALL = [KMB_72_NORTH, KMB_72_SOUTH, KMB_72A_NORTH, KMB_72A_SOUTH, KMB_73_NORTH, KMB_73_SOUTH, KMB_73A_NORTH, KMB_73A_SOUTH, KMB_73X_NORTH, KMB_73X_SOUTH, KMB_74A_NORTH, KMB_74A_SOUTH];
// 08*
const KMB_80K_EAST = new Line("80K", lineType_KMB, "新翠", "愉翠苑", [MTR_erl_taiwai, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo, MTR_mos_cityone], 15);
const KMB_80K_WEST = new Line("80K", lineType_KMB, "愉翠苑", "新翠", [MTR_mos_cityone, YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai], 15);
const KMB_80M_NORTH = new Line("80M", lineType_KMB, "九龍塘站", "穗禾苑", [MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ShatinTownCenter, YuenWo, FoTanTsuen], 30);
const KMB_80M_SOUTH = new Line("80M", lineType_KMB, "穗禾苑", "九龍塘站", [FoTanTsuen, YuenWo, ShatinTownHall, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong], 30);
const KMB_80X_EAST = new Line('80X', lineType_KMB, '沙田(秦石)', '觀塘碼頭', [MTR_mos_chekungtemple, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, KwunTongFerryPier], 10).setNotes('經觀塘道、彩虹、大老山隧道');
const KMB_80X_WEST = new Line('80X', lineType_KMB, '觀塘碼頭', '沙田(秦石)', [KwunTongFerryPier, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_mos_chekungtemple], 10).setNotes('經觀塘道、彩虹、大老山隧道');
const KMB_81_NORTH = new Line("81", lineType_KMB, "西九龍站", "禾輋", [MTR_hsr_westkowloon, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo]);
const KMB_81_SOUTH = new Line("81", lineType_KMB, "禾輋", "西九龍站", [YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_hsr_westkowloon]);
const KMB_81C_NORTH = new Line("81C", lineType_KMB, "尖東麼地道", "耀安", [MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, ChevalierGarden, ShatinHospital, MTR_mos_hengon, HengHongStreet], 15);
const KMB_81C_SOUTH = new Line("81C", lineType_KMB, "耀安", "尖東麼地道", [HengHongStreet, MTR_mos_hengon, ChevalierGarden, ShatinHospital, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui], 15);
const KMB_81K_NORTH = new Line("81K", lineType_KMB, "新田圍", "穗禾苑", [SunTinWai, MTR_mos_chekungtemple, MTR_mos_shatinwai, ShatinTownCenter, YuenWo, FoTanTsuen], 10);
const KMB_81K_SOUTH = new Line("81K", lineType_KMB, "穗禾苑", "新田圍", [FoTanTsuen, YuenWo, ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple, SunTinWai], 10);
const KMB_83K = new Line("83K", lineType_KMB, "沙田黃泥頭", "沙田市中心", [HangSengUniversity, MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownCenter, YuenWo, MTR_mos_cityone, HangSengUniversity]).markCircular();
const KMB_85K_NORTH = new Line("85K", lineType_KMB, "沙田站", "恆安", [MTR_erl_shatin, YuenWo, ShatinSeafood, ShatinHospital, ChevalierGarden, MTR_mos_hengon], 15);
const KMB_85K_SOUTH = new Line("85K", lineType_KMB, "恆安", "沙田站", [MTR_mos_hengon, ChevalierGarden, ShatinHospital, ShatinSeafood, YuenWo, MTR_erl_shatin], 15);
const KMB_86_EAST = new Line('86', lineType_KMB, '美孚', '沙田(黃泥頭)', [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_ktl_shekkipmei, ChingCheungRoad_BeaconHill, LionRockTunnel, LionRockTunnelHighway, SunTinWai, ShatinTownCenter, YuenWo, ShatinSeafood, MTR_mos_cityone, HangSengUniversity], 20).setNotes('經石硤尾、獅隧、沙田市中心、第一城');
const KMB_86_WEST = new Line('86', lineType_KMB, '沙田(黃泥頭)', '美孚', [HangSengUniversity, MTR_mos_cityone, ShatinSeafood, YuenWo, ShatinTownHall, SunTinWai, LionRockTunnelHighway, LionRockTunnel, ChingCheungRoad_BeaconHill, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 20).setNotes('經深水埗、石硤尾、獅隧、沙田市中心、第一城');
const KMB_86C_EAST = new Line('86C', lineType_KMB, '長沙灣', '馬鞍山(利安)', [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_ktl_shekkipmei, KowloonTongCornwall, LionRockTunnel, LionRockTunnelHighway, SunTinWai, JatMinEstate, BelairGardens, ShatinSeafood, ShatinHospital, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, KamYingCourt, LeeOnEstate], 15).setNotes('經濱景花園、沙乙博、獅隧、歌和老街、石硤尾、深水埗');
const KMB_86C_WEST = new Line('86C', lineType_KMB, '馬鞍山(利安)', '長沙灣', [LeeOnEstate, KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinHospital, ShatinSeafood, BelairGardens, JatMinEstate, SunTinWai, LionRockTunnelHighway, LionRockTunnel, KowloonTongCornwall, MTR_ktl_shekkipmei, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok], 15).setNotes('經濱景花園、沙乙博、獅隧、歌和老街、石硤尾、深水埗');
const KMB_87D_NORTH = new Line("87D", lineType_KMB, "紅磡", "錦英苑", [MTR_erl_hunghom, MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_ktl_yaumatei, MTR_ktl_mongkok, MTR_ktl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, LionRockTunnelHighway, ShatinSeafood, ShatinHospital, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, KamYingCourt], 10);
const KMB_87D_SOUTH = new Line("87D", lineType_KMB, "錦英苑", "紅磡", [KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinHospital, ShatinSeafood, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui, MTR_erl_hunghom], 10);
const KMB_87K = new Line("87K", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, HengHongStreet, MTR_mos_maonshan, KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_erl_university], 8).markCircular();
const KMB_87S = new Line("87S", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, KamYingCourt, MaOnShanRoad, MTR_erl_university], 10).markCircular();
const KMB_88K_NORTH = new Line("88K", lineType_KMB, "顯徑", "駿景園", [MTR_tml_hinkeng, MTR_erl_taiwai, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo, MTR_erl_fotan, RoyalAscot], 12);
const KMB_88K_SOUTH = new Line("88K", lineType_KMB, "駿景園", "顯徑", [RoyalAscot, MTR_erl_fotan, YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai, MTR_tml_hinkeng], 12);
const KMB_88X_MORNING = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("早晨模式，東九龍首站為九龍灣站");
const KMB_88X_AFTERNOON = new Line("88X", lineType_KMB, "火炭站", "平田", [MTR_erl_fotan, FoTanTsuen, YuenWo, MTR_erl_shatin, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen, MTR_erl_fotan], 25).markCircular().setNotes("黃昏模式，東九龍首站為平田");
const KMB_89_NORTH = new Line('89', lineType_KMB, '觀塘站', '瀝源', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, SunTinWai, ShatinTownCenter, YuenWo], 12);
const KMB_89_SOUTH = new Line('89', lineType_KMB, '瀝源', '觀塘站', [YuenWo, ShatinTownHall, SunTinWai, LionRockTunnelHighway, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, MTR_ktl_choihung, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 12);
const KMB_89B_EAST = new Line('89B', lineType_KMB, '沙田圍', '觀塘站', [MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnelHighway, LionRockTunnel, MTR_ktl_wongtaisin, SunPoKong, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 17);
const KMB_89B_WEST = new Line('89B', lineType_KMB, '觀塘站', '沙田圍', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, HungNgokHouse_ChoiHung, SunPoKong, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnelHighway, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai], 17);

// All 08*
const KMB_NUM_08x_ALL = [KMB_80K_EAST, KMB_80K_WEST, KMB_80M_NORTH, KMB_80M_SOUTH, KMB_80X_EAST, KMB_80X_WEST, KMB_81_NORTH, KMB_81_SOUTH, KMB_81C_NORTH, KMB_81C_SOUTH, KMB_81K_NORTH, KMB_81K_SOUTH, KMB_83K, KMB_85K_NORTH, KMB_85K_SOUTH, KMB_86_EAST, KMB_86_WEST, KMB_86C_EAST, KMB_86C_WEST, KMB_87D_NORTH, KMB_87D_SOUTH, KMB_87K, KMB_87S, KMB_88K_NORTH, KMB_88K_SOUTH, KMB_88X_MORNING, KMB_88X_AFTERNOON, KMB_89_NORTH, KMB_89_SOUTH, KMB_89B_EAST, KMB_89B_WEST];

// 09*
const KMB_98A = new Line("98A", lineType_KMB, "坑口北將軍澳醫院", "牛頭角站", [MTR_tko_hanghau, MTR_tko_polam, Anderson, SauMauPing, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, SauMauPing, Anderson, MTR_tko_polam, MTR_tko_hanghau], 12).markCircular();

// All 09*
const KMB_NUM_09x_ALL = [KMB_98A];

// All 0**
const KMB_NUM_0xx_ALL = [].concat(KMB_NUM_00x_ALL, KMB_NUM_01x_ALL, KMB_NUM_03x_ALL, KMB_NUM_04x_ALL, KMB_NUM_06x_ALL, KMB_NUM_07x_ALL, KMB_NUM_08x_ALL, KMB_NUM_09x_ALL);

// 21*
const KMB_215X_EAST = new Line('215X', lineType_KMB, '九龍站', '藍田(廣田邨)', [MTR_tcl_kowloon, MTR_tml_austin, MTR_tml_easttsimshatsui, MTR_tml_hunghom, MTR_tml_homantin, ToKwaWanFlyover, KaiTakTunnel, HKITCE, MTR_ktl_ngautaukok, MTR_ktl_kwuntong, MTR_ktl_lamtin], 10).setNotes('經觀塘、九龍灣展貿、機隧；繁忙時間不停何文田站');
const KMB_215X_WEST = new Line('215X', lineType_KMB, '藍田(廣田邨)', '九龍站', [MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, HKITCE, KaiTakTunnel, ToKwaWanFlyover, MTR_tml_homantin, MTR_tml_hunghom, MTR_tml_easttsimshatsui, MTR_tml_austin,  MTR_tcl_kowloon], 10).setNotes('經觀塘、九龍灣展貿、機隧；繁忙時間不停何文田站');
const KMB_216M = new Line('216M', lineType_KMB, '藍田站', '油塘', [MTR_ktl_lamtin, MTR_ktl_yautong], 15).markCircular().setNotes('雙向經碧雲道(藍田半山)');

// All 21*
const KMB_NUM_21x_ALL = [KMB_215X_EAST, KMB_215X_WEST, KMB_216M];

// 23*
const KMB_234X_NORTH = new Line("234X", lineType_KMB, "尖東麼地道", "灣景花園", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_tml_meifoo, LaiKingChokePoint, TsuenWanRoad, ClagueGardenEstate, MTR_twl_tsuenwan, MTR_twl_tsuenking, BelvedereGarden], 15); 
const KMB_234X_SOUTH = new Line("234X", lineType_KMB, "灣景花園", "尖東麼地道", [BelvedereGarden, MTR_twl_tsuenking, MTR_twl_tsuenwan, ClagueGardenEstate, TsuenWanRoad, LaiKingChokePoint, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tml_easttsimshatsui], 15); 

// All 23*
const KMB_NUM_23x_ALL = [KMB_234X_NORTH, KMB_234X_SOUTH];

// 26*
const KMB_263_EAST = new Line("263", lineType_KMB, "屯門站", "沙田站", [MTR_tml_tuenmun, KCR_lrt_samshing, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, MTR_erl_shatin], 12);
const KMB_263_WEST = new Line("263", lineType_KMB, "沙田站", "屯門站", [MTR_erl_shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, CheungPeiShanRoad, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_samshing, MTR_tml_tuenmun], 12);
const KMB_263A_MORNING = new Line('263A', lineType_KMB, '屯門站', '香港科學園第三期', [MTR_tml_tuenmun, KCR_lrt_samshing, TuenMunHighway_SoKwunWat, TuenMunHighway_InterchangeEast, TuenMunHighway_TsingLungTau, TuenMunHighway_YauKomTau, CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, ShatinSeafood, MTR_erl_university, SciencePark], 1440).markCommuter().setNotes('單班車0725開出；經濱景花園、大學站，不停城門隧道轉車站');
const KMB_263A_AFTERNOON = new Line('263A', lineType_KMB, '香港科學園第三期', '屯門站', [SciencePark, MTR_erl_university, ShatinSeafood, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, CheungPeiShanRoad, TuenMunHighway_YauKomTau, TuenMunHighway_TsingLungTau, TuenMunHighway_InterchangeWest, TuenMunHighway_SoKwunWat, KCR_lrt_samshing, MTR_tml_tuenmun], 1440).markCommuter().setNotes('單班車1820開出；經、大學站、鄉議局大樓');
const KMB_269D_EAST = new Line('269D', lineType_KMB, '天富', '瀝源', [TinShui, MTR_tml_tinshuiwai, LongTinRoad, KCR_lrt_fungninroad, MTR_tml_yuenlong, TsingLongHighway, TaiLamTunnel_Interchange, TaiLamTunnel, TuenMunHighway_YauKomTau, CheungPeiShanRoad, ShingMunTunnel_Interchange_East, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownCenter, YuenWo], 15);
const KMB_269D_WEST = new Line('269D', lineType_KMB, '瀝源', '天富', [YuenWo, ShatinTownCenter, ShingMunTunnelHighway, ShingMunTunnel, ShingMunTunnel_Interchange_West, CheungPeiShanRoad, TuenMunHighway_YauKomTau, TaiLamTunnel, TaiLamTunnel_Interchange, TsingLongHighway, MTR_tml_yuenlong, KCR_lrt_fungninroad, LongTinRoad, MTR_tml_tinshuiwai, TinShui], 15);

const KMB_NUM_26x_ALL = [KMB_263_EAST, KMB_263_WEST, KMB_263A_MORNING, KMB_263A_AFTERNOON, KMB_269D_EAST, KMB_269D_WEST];

// 27*
const KMB_270A_NORTH = new Line("270A", lineType_KMB, "尖東麼地道", "上水", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, ToloHighway_TaiPo, FanlingHighway, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]);
const KMB_270A_SOUTH = new Line("270A", lineType_KMB, "上水", "尖東麼地道", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, FanlingHighway_Interchange, FanlingHighway, ToloHighway_TaiPo, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui]);
const KMB_273 = new Line("273", lineType_KMB, "粉嶺華明", "粉嶺站", [WahMingTerminus, MTR_erl_fanling, WahMingTerminus]).markCircular();
const KMB_273A = new Line("273A", lineType_KMB, "彩園", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
const KMB_273D = new Line("273D", lineType_KMB, "上水", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();

// All 27*
const KMB_NUM_27x_ALL = [KMB_270A_NORTH, KMB_270A_SOUTH, KMB_273, KMB_273A, KMB_273D];

// 28*
const KMB_280X_NORTH = new Line("280X", lineType_KMB, "尖東麼地道", "穗禾苑", [MTR_tml_easttsimshatsui, MTR_tml_austin, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, ShatinTownCenter, YuenWo, FoTanTsuen], 20);
const KMB_280X_SOUTH = new Line("280X", lineType_KMB, "穗禾苑", "尖東麼地道", [FoTanTsuen, YuenWo, ShatinTownHall, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, NgaCheungRoad_WHTX, MTR_twl_tsimshatsui], 20);
const KMB_281A_NORTH = new Line("281A", lineType_KMB, "九龍站", "沙田廣源", [MTR_tcl_kowloon, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnelHighway, MTR_mos_cityone]).setNotes("獅隧特快");
const KMB_281A_SOUTH = new Line("281A", lineType_KMB, "沙田廣源", "九龍站", [MTR_mos_cityone, LionRockTunnelHighway, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tcl_kowloon]).setNotes("獅隧特快");
const KMB_281M_NORTH = new Line("281M", lineType_KMB, "九龍塘站", "新田圍", [MTR_erl_kowloontong, MTR_tml_hinkeng, MTR_erl_taiwai, MTR_mos_chekungtemple, SunTinWai]);
const KMB_281M_SOUTH = new Line("281M", lineType_KMB, "新田圍", "九龍塘站", [SunTinWai, MTR_mos_chekungtemple, MTR_erl_taiwai, MTR_tml_hinkeng, MTR_erl_kowloontong]);
const KMB_282 = new Line("282", lineType_KMB, "沙田市中心", "新田圍", [ShatinTownCenter, MTR_mos_chekungtemple, SunTinWai, MTR_mos_chekungtemple, ShatinTownCenter]).markCircular();
const KMB_284 = new Line("284", lineType_KMB, "沙田巿中心", "濱景花園", [ShatinTownCenter, BelairGardens, ShatinSeafood, BelairGardens, ShatinTownCenter], 9).markCircular();
const KMB_287X = new Line("287X", lineType_KMB, "水泉澳", "佐敦", [ShuiChuenO, MTR_mos_shatinwai, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, WestKowloonHighway, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_tcl_olympic, WestKowloonHighway, EaglesNestTunnel, TsingShaInterchange, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, ShuiChuenO], 13).markCircular();
const KMB_288 = new Line("288", lineType_KMB, "水泉澳", "沙田市中心", [MTR_mos_shatinwai, ShatinTownHall, MTR_mos_shatinwai]).markCircular();
const KMB_289K = new Line("289K", lineType_KMB, "大學站", "富安花園", [MTR_erl_university, MTR_mos_hengon, ChevalierGarden, MTR_mos_hengon, MTR_erl_university], 15).markCircular();

// All 28*
const KMB_NUM_28x_ALL = [KMB_280X_NORTH, KMB_280X_SOUTH, KMB_281A_NORTH, KMB_281A_SOUTH, KMB_281M_NORTH, KMB_281M_SOUTH, KMB_282, KMB_284, KMB_287X, KMB_288, KMB_289K];

// All 2**
const KMB_NUM_2xx_ALL = [].concat(KMB_NUM_21x_ALL, KMB_NUM_23x_ALL, KMB_NUM_26x_ALL, KMB_NUM_27x_ALL, KMB_NUM_28x_ALL);

// Special Lines
const KMB_W3_NORTH = new Line("W3", lineType_KMB, "西九龍站", "上水", [MTR_hsr_westkowloon, WestKowloonHighway, EaglesNestTunnel, TsingShaInterchange, ShatinHeightsTunnel, MTR_erl_shatin, TaiPoRoad_Shatin, ToloHighway_Coastal, KwongFukEstate, FanlingHighway, MTR_erl_sheungshui]).setNotes("高鐵特快；設有雙程分段收費");
const KMB_W3_SOUTH = new Line("W3", lineType_KMB, "上水", "西九龍站", [MTR_erl_sheungshui, FanlingHighway, KwongFukEstate, ToloHighway_Coastal, TaiPoRoad_Shatin, MTR_erl_shatin, ShatinHeightsTunnel, TsingShaInterchange, EaglesNestTunnel, WestKowloonHighway, MTR_hsr_westkowloon]).setNotes("高鐵特快");
// All Special Lines
const KMB_NUM_SPECIAL = [KMB_W3_NORTH, KMB_W3_SOUTH];
/*
const test_w3_north = new Line("w3", lineType_KMB, "wkl", "ss", [MTR_erl_taipomarket, MTR_erl_sheungshui], "", "x", false);
const test_803k_north = new Line("803k", lineType_GMB_NT, "hk", "twa", [MTR_tml_hinkeng, MTR_erl_taiwai], "", "", false);
*/

const KMB_HK18_ALL = [].concat(KMB_NUM_0xx_ALL, KMB_NUM_2xx_ALL, KMB_NUM_SPECIAL);

/**
 * Citibus Section
 */

// 00*
const CTB_5X_EAST = new Line("5X", lineType_CTB, "堅尼地城", "銅鑼灣威菲路道", [MTR_ill_kennedytown, ShekTongTsui, ConnaughtRoadWest_Stop, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill]);
const CTB_5X_WEST = new Line("5X", lineType_CTB, "銅鑼灣威菲路道", "堅尼地城", [MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, ShekTongTsui, MTR_ill_kennedytown]);
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
const CTB_77_EAST = new Line('77', lineType_CTB, '田灣', '筲箕灣', [MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, YiuTungEstate, MTR_ill_saukeiwan], 20).setNotes("經鯉景灣及耀東邨");
const CTB_77_WEST = new Line('77', lineType_CTB, '筲箕灣', '田灣', [MTR_ill_saukeiwan, YiuTungEstate, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, HappyValley, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan], 20).setNotes("經鯉景灣及耀東邨");

// All 07*
const CTB_NUM_07x_ALL = [CTB_77_EAST, CTB_77_WEST];

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

const CTB_HK18_ALL = [].concat(CTB_NUM_0xx_ALL, CTB_NUM_5xx_ALL);

/**
 * New World First Bus Section
 */

// 00*
const NWFB_2_EAST = new Line("2", lineType_NWFB, "上環港澳碼頭", "西灣河嘉亨灣", [MTR_ill_sheungwan, MTR_tcl_hongkong, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan]);
const NWFB_2_WEST = new Line("2", lineType_NWFB, "西灣河嘉亨灣", "上環港澳碼頭", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]);
const NWFB_8_EAST = new Line("8", lineType_NWFB, "灣仔北", "杏花邨", [WanChaiFerryPier, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, EasternCorridor, ChaiWanRoad, MTR_ill_chaiwan, MTR_ill_hengfachuen], 13).setNotes("東走特快");
const NWFB_8_WEST = new Line("8", lineType_NWFB, "杏花邨", "灣仔北", [MTR_ill_hengfachuen, MTR_ill_chaiwan, ChaiWanRoad, EasternCorridor, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, MTR_ill_wanchai, WanChaiFerryPier], 13).setNotes("東走特快");

const NWFB_NUM_00x_ALL = [NWFB_2_EAST, NWFB_2_WEST, NWFB_8_EAST, NWFB_8_WEST];

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

const NWFB_NUM_0xx_ALL = [].concat(NWFB_NUM_00x_ALL, NWFB_NUM_03x_ALL, NWFB_NUM_09x_ALL);

// 79*
const NWFB_798_EAST = new Line("798", lineType_NWFB, "火炭山尾街", "調景嶺站", [FoTanTsuen, YuenWo, ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_tiukengleng], 15).setNotes("將軍澳特快");
const NWFB_798_WEST = new Line("798", lineType_NWFB, "調景嶺站", "火炭山尾街", [MTR_tko_tiukengleng, MTR_tko_tseungkwano, MTR_tko_hanghau, MTR_tko_polam, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin, YuenWo, FoTanTsuen], 15).setNotes("沙田特快；沙田站只准落客");
const NWFB_798A_MORNING = new Line('798A', lineType_NWFB, '將軍澳(康盛花園)', '沙田站', [MTR_tko_polam, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin], ).markCommuter().setNotes('單班車0705開出；經寶琳北');
const NWFB_798A_AFTERNOON = new Line('798A', lineType_NWFB, '沙田市中心', '將軍澳(康盛花園)', [ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_polam], ).markCommuter().setNotes('單班車1815開出；經寶琳北');
const NWFB_798B_MORNING = new Line('798B', lineType_NWFB, '日出康城', '沙田站', [MTR_tko_lohaspark, MTR_tko_tseungkwano, MTR_tko_hanghau, TseungKwanOTunnel, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, MTR_mos_shatinwai, MTR_erl_shatin], 1440).markCommuter().setNotes('單班車0705開出；經尚德');
const NWFB_798B_AFTERNOON = new Line('798B', lineType_NWFB, '沙田市中心', '日出康城', [ShatinTownCenter, MTR_mos_shatinwai, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, TseungKwanOTunnel, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_lohaspark], 1440).markCommuter().setNotes('單班車1830開出；經尚德');

const NWFB_NUM_79x_ALL = [NWFB_798_EAST, NWFB_798_WEST, NWFB_798A_MORNING, NWFB_798A_AFTERNOON, NWFB_798B_MORNING, NWFB_798B_AFTERNOON];

// 7**
const NWFB_NUM_7xx_ALL = [].concat(NWFB_NUM_79x_ALL);

const NWFB_HK18_ALL = [].concat(NWFB_NUM_0xx_ALL, NWFB_NUM_7xx_ALL);

// GMB Section

// New Territories section
// 02*
const GMB_NT_26_EAST = new Line("26", lineType_GMB_NT, "香港教育大學", "海柏花園", [KwongFukEstate, ToloHighway_Coastal, HengHongStreet, MTR_mos_maonshan], 8).setNotes("大埔特快");
const GMB_NT_26_WEST = new Line("26", lineType_GMB_NT, "海柏花園", "香港教育大學", [MTR_mos_maonshan, HengHongStreet, ToloHighway_Coastal, KwongFukEstate], 8).setNotes("大埔特快");
const GMB_NT_28K = new Line("28K", lineType_GMB_NT, "大埔墟站", "新城市廣場", [MTR_erl_taipomarket, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, MTR_erl_taipomarket], 9).markCircular();
const GMB_NT_28S = new Line("28S", lineType_GMB_NT, "白石角", "新城市廣場", [PakShekKok, CheungShueTan, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, CheungShueTan, PakShekKok], 35).markCircular();
// All 02*
const GMB_NT_NUM_02x = [GMB_NT_26_EAST, GMB_NT_26_WEST, GMB_NT_28K, GMB_NT_28S];
// 06*
const GMB_NT_65A_EAST = new Line("65A", lineType_GMB_NT, "沙田大會堂", "黃泥頭", [ShatinTownHall, BelairGardens, MTR_mos_cityone, HangSengUniversity], 7);
const GMB_NT_65A_WEST = new Line("65A", lineType_GMB_NT, "黃泥頭", "沙田大會堂", [HangSengUniversity, MTR_mos_cityone, ShatinSeafood, BelairGardens, ShatinTownHall], 7);
const GMB_NT_65K_NORTH = new Line("65K", lineType_GMB_NT, "黃泥頭", "火炭站", [MTR_mos_cityone, ShatinSeafood, MTR_erl_fotan]);
const GMB_NT_65K_SOUTH = new Line("65K", lineType_GMB_NT, "火炭站", "黃泥頭", [MTR_erl_fotan, MTR_mos_cityone]);
const GMB_NT_67A_EAST = new Line("67A", lineType_GMB_NT, "沙田站", "碩門邨", [MTR_erl_shatin, BelairGardens, ShatinSeafood, MTR_mos_shekmun], 12);
const GMB_NT_67A_WEST = new Line("67A", lineType_GMB_NT, "碩門邨", "沙田站", [MTR_mos_shekmun, ShatinSeafood, BelairGardens, MTR_erl_shatin], 12);
const GMB_NT_67K_NORTH = new Line("67K", lineType_GMB_NT, "沙田站", "亞公角", [MTR_erl_shatin, BelairGardens, ShatinSeafood, ShatinHospital], 15);
const GMB_NT_67K_SOUTH = new Line("67K", lineType_GMB_NT, "亞公角", "沙田站", [ShatinHospital, ShatinSeafood, BelairGardens, MTR_erl_shatin], 15);
const GMB_NT_68K_EAST = new Line("68K", lineType_GMB_NT, "瑞峰花園", "沙田站", [MTR_mos_taiwai, MTR_mos_chekungtemple, ShatinTownCenter, MTR_erl_shatin], 8);
const GMB_NT_68K_WEST = new Line("68K", lineType_GMB_NT, "沙田站", "瑞峰花園", [MTR_erl_shatin, ShatinTownHall, MTR_mos_chekungtemple, MTR_mos_taiwai], 8);
// All 06*
const GMB_NT_NUM_06x = [GMB_NT_65A_EAST, GMB_NT_65A_WEST, GMB_NT_65K_NORTH, GMB_NT_65K_SOUTH, GMB_NT_67A_EAST, GMB_NT_67A_WEST, GMB_NT_67K_NORTH, GMB_NT_67K_SOUTH, GMB_NT_68K_EAST, GMB_NT_68K_WEST];
// All 0**
const GMB_NT_NUM_0xx_ALL = [].concat(GMB_NT_NUM_02x, GMB_NT_NUM_06x);
// 48*
const GMB_NT_481_EAST = new Line('481', lineType_GMB_NT, '荃灣街市街', '火炭山尾街', [TsuenWanMarket, CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_Shatin, FoTanTsuen], 5);
const GMB_NT_481_WEST = new Line('481', lineType_GMB_NT, '火炭山尾街', '荃灣街市街', [FoTanTsuen, TaiPoRoad_Shatin, ShingMunTunnelHighway, ShingMunTunnel, CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 5);
const GMB_NT_481A_EAST = new Line('481A', lineType_GMB_NT, '荃灣街市街', '沙田大會堂', [TsuenWanMarket, TsuenWanTownHall, CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, ShatinTownHall], 10);
const GMB_NT_481A_WEST = new Line('481A', lineType_GMB_NT, '沙田大會堂', '荃灣街市街', [ShatinTownHall, ShingMunTunnelHighway, ShingMunTunnel, CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 10);
const GMB_NT_481B_EAST = new Line('481B', lineType_GMB_NT, '荃灣街市街', '大圍銅鑼灣山', [TsuenWanMarket, TsuenWanTownHall, CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_MeiLam, MTR_erl_taiwai], 10).setNotes('部分班次只往大圍站');
const GMB_NT_481B_WEST = new Line('481B', lineType_GMB_NT, '大圍銅鑼灣山', '荃灣街市街', [TaiPoRoad_MeiLam, MTR_erl_taiwai, ShingMunTunnelHighway, ShingMunTunnel, CheungPeiShanRoad, MTR_twl_tsuenwan, TsuenWanMarket], 10).setNotes('部分班次由大圍站開出');
const GMB_NT_482_EAST = new Line('482', lineType_GMB_NT, '荃灣街市街', '沙田大會堂', [TsuenWanMarket, CheungPeiShanRoad, ShingMunTunnel, ShingMunTunnelHighway, TaiPoRoad_MeiLam, TaiPoRoad_Shatin, ShatinTownHall], 15).markNightOnly();
const GMB_NT_482_WEST = new Line('482', lineType_GMB_NT, '沙田大會堂', '荃灣街市街', [ShatinTownHall, TaiPoRoad_Shatin, TaiPoRoad_MeiLam, ShingMunTunnelHighway, ShingMunTunnel, CheungPeiShanRoad, TsuenWanMarket], 15).markNightOnly();
// All 48*
const GMB_NT_NUM_48x_ALL = [GMB_NT_481_EAST, GMB_NT_481_WEST, GMB_NT_481A_EAST, GMB_NT_481A_WEST, GMB_NT_481B_EAST, GMB_NT_481B_WEST, GMB_NT_482_EAST, GMB_NT_482_WEST];
// All 4**
const GMB_NT_NUM_4xx_ALL = [].concat(GMB_NT_NUM_48x_ALL);
// 80*
const GMB_NT_803_NORTH = new Line("803", lineType_GMB_NT, "顯徑", "利安", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, ShatinHospital, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, LeeOnEstate], 15).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803_SOUTH = new Line("803", lineType_GMB_NT, "利安", "顯徑", [LeeOnEstate, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinHospital, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng], 15).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803K_EAST = new Line("803K", lineType_GMB_NT, "顯徑", "大圍站", [MTR_tml_hinkeng, MTR_mos_taiwai]);
const GMB_NT_803K_WEST = new Line("803K", lineType_GMB_NT, "大圍站", "顯徑", [MTR_mos_taiwai, MTR_tml_hinkeng]);
const GMB_NT_804_EAST = new Line("804", lineType_GMB_NT, "顯徑", "廣源", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, MTR_mos_cityone]);
const GMB_NT_804_WEST = new Line("804", lineType_GMB_NT, "廣源", "顯徑", [MTR_mos_cityone, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng]);
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

// All 81*
// 90* (currently 1 line but still)
// All 8**
const GMB_NT_NUM_8xx_ALL = [].concat(GMB_NT_NUM_80x_ALL);
// All NT
const GMB_NT_ALL = [].concat(GMB_NT_NUM_0xx_ALL, GMB_NT_NUM_4xx_ALL, GMB_NT_NUM_8xx_ALL);

const GMB_HK18_ALL = GMB_NT_ALL;

// Cross-Harbour Lines
// 10*
const CHT_101_EAST = new Line('101', lineType_HARBOUR, '堅尼地城', '觀塘(裕民坊)', [MTR_ill_kennedytown, ShekTongTsui, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, PE_SunPoKong, ChoiHungBusTerminus, MTR_ktl_kowloonbay, MTR_ktl_ngautaukok, MTR_ktl_kwuntong], 5);
const CHT_101_WEST = new Line('101', lineType_HARBOUR, '觀塘(裕民坊)', '堅尼地城', [MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, PE_ChoiHung, PE_SunPoKong, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan, MTR_ill_saiyingpun, ShekTongTsui, MTR_ill_kennedytown], 5);
const CHT_102_NORTH = new Line("102", lineType_HARBOUR, "筲箕灣", "美孚", [MTR_ill_saukeiwan, MTR_ill_saiwanho, MTR_ill_taikoo, MTR_ill_quarrybay, MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok, MTR_twl_meifoo], 8);
const CHT_102_SOUTH = new Line("102", lineType_HARBOUR, "美孚", "筲箕灣", [MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan], 8);
const CHT_107_NORTH = new Line('107', lineType_HARBOUR, '華貴邨', '九龍灣', [MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, HappyValley, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_tml_homantin, MTR_tml_tokwawan, MTR_tml_sungwongtoi, PE_RegalOrientalHotel, PE_SunPoKong, PE_ChoiHung, KowloonBayCommercial], 15).setNotes('經黃竹坑；假日部分班次經海洋公園');
const CHT_107_SOUTH = new Line('107', lineType_HARBOUR, '九龍灣', '華貴邨', [KowloonBayCommercial, PE_ChoiHung, PE_SunPoKong, PE_RegalOrientalHotel, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo], 15).setNotes('經黃竹坑；假日部分班次經海洋公園');
// All 10*
const CHT_NUM_10x_ALL = [CHT_101_EAST, CHT_101_WEST, CHT_102_NORTH, CHT_102_SOUTH, CHT_107_NORTH, CHT_107_SOUTH];
// 11*
const CHT_112_NORTH = new Line('112', lineType_HARBOUR, '北角(百福道)', '長沙灣(蘇屋邨)', [MTR_ill_northpoint, MTR_ill_fortresshill, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 5);
const CHT_112_SOUTH = new Line('112', lineType_HARBOUR, '長沙灣(蘇屋邨)', '北角(百福道)', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint], 5);
// All 11*
const CHT_NUM_11x_ALL = [CHT_112_NORTH, CHT_112_SOUTH];
// 17*
const CHT_170_NORTH = new Line("170", lineType_HARBOUR, "華富(中)", "沙田站", [MTR_swil_wahfoo, MTR_swil_tinwan, MTR_swil_aberdeen, MTR_seil_wongchukhang, AberdeenTunnel_Interchange, AberdeenTunnel, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_causewaybay, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_erl_shatin]);
const CHT_170_SOUTH = new Line("170", lineType_HARBOUR, "沙田站", "華富(中)", [MTR_erl_shatin, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, AberdeenTunnel, AberdeenTunnel_Interchange, MTR_seil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo]);
// All 17*
const CHT_NUM_17x_ALL = [CHT_170_NORTH, CHT_170_SOUTH];
// 18*
const CHT_182_NORTH = new Line("182", lineType_HARBOUR, "港澳瑪頭", "愉翠苑", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, CrossHarbourTunnel, CrossHarbourTunnel_Interchange, PrincessMargaretRoad, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_mos_cityone]).setNotes("另有城巴邨巴88R來往第一城及中環");
const CHT_182_SOUTH = new Line("182", lineType_HARBOUR, "愉翠苑", "港澳瑪頭", [MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, PrincessMargaretRoad, CrossHarbourTunnel_Interchange, CrossHarbourTunnel, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central]).setNotes("另有城巴邨巴88R來往第一城及中環");
// All 18*
const CHT_NUM_18x_ALL = [CHT_182_NORTH, CHT_182_SOUTH];

// All 1**
const CHT_NUM_1xx_ALL = [].concat(CHT_NUM_10x_ALL, CHT_NUM_11x_ALL, CHT_NUM_17x_ALL, CHT_NUM_18x_ALL);

// 30*
const CHT_307_NORTH = new Line("307", lineType_HARBOUR, "中環渡輪碼頭", "大埔中心", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_tinhau, EasternCorridor, EastHarbourTunnel, EastHarbourTunnel_Interchange, KwunTongBypass, KowloonBayFlyover, OldTatesTunnel, OldTatesTunnel_Interchange, ToloHighway_Coastal, KwongFukEstate, KwongFukRoad]).setNotes("東走特快；東隧特快；大老山特快；大埔特快");
const CHT_307_SOUTH = new Line("307", lineType_HARBOUR, "大埔中心", "中環渡輪碼頭", [WanTauKokLane, KwongFukEstate, ToloHighway_Coastal, OldTatesTunnel_Interchange, OldTatesTunnel, KowloonBayFlyover, KwunTongBypass, EastHarbourTunnel_Interchange, EastHarbourTunnel, EasternCorridor, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]).setNotes("大埔特快；大老山特快；東隧特快；東走特快");

// All 30*
const CHT_NUM_30x_ALL = [CHT_307_NORTH, CHT_307_SOUTH];

// All 3**
const CHT_NUM_3xx_ALL = [].concat(CHT_NUM_30x_ALL);

// 97*
const CHT_970_NORTH = new Line('970', lineType_HARBOUR, '數碼港', '長沙灣(蘇屋邨)', [MTR_swil_cyberport, MTR_swil_wahfoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, MTR_ill_saiyingpun, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 12).setNotes('經華富、瑪麗醫院、港大、西營盤、西隧、西九龍站、彌敦道、深水埗');
const CHT_970_SOUTH = new Line('970', lineType_HARBOUR, '長沙灣(蘇屋邨)', '數碼港', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_hsr_westkowloon, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, MTR_swil_wahfoo, MTR_swil_cyberport], 12).setNotes('經深水埗、彌敦道、佐敦、西九龍站、西隧、港大、瑪麗醫院、');
const CHT_970X_NORTH = new Line('970X', lineType_HARBOUR, '香港仔', '長沙灣(蘇屋邨)', [MTR_swil_aberdeen, MTR_swil_tinwan, OuterWahFoo, PokFuLam_Actual, MTR_swil_queenmary, UpperKennedyTown, MTR_ill_hku, WestHarbourTunnel, WestHarbourTunnel_Interchange, MTR_tml_austin, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, MTR_twl_cheungshawan, SoUkEstate], 12).setNotes('經置富、瑪麗醫院、港大、山道天橋、西隧、西九龍站、佐敦、彌敦道、深水埗');
const CHT_970X_SOUTH = new Line('970X', lineType_HARBOUR, '長沙灣(蘇屋邨)', '香港仔', [SoUkEstate, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_hsr_westkowloon, WestHarbourTunnel_Interchange, WestHarbourTunnel, MTR_ill_saiyingpun, MTR_ill_hku, UpperKennedyTown, MTR_swil_queenmary, PokFuLam_Actual, OuterWahFoo, MTR_swil_tinwan, MTR_swil_aberdeen], 12).setNotes('經深水埗、彌敦道、佐敦、西九龍站、西隧、港大、瑪麗醫院、置富');

// All 97*
const CHT_NUM_97x_ALL = [CHT_970_NORTH, CHT_970_SOUTH, CHT_970X_NORTH, CHT_970X_SOUTH];

// All 9**
const CHT_NUM_9xx_ALL = [].concat(CHT_NUM_97x_ALL);

// All Cross-Harbour Bus
const CHT_HK18_ALL = [].concat(CHT_NUM_1xx_ALL, CHT_NUM_3xx_ALL, CHT_NUM_9xx_ALL);

// All Section

const HK18_ALL_LINES: Array<Line> = [].concat(WALK_HK18_ALL, TRAM_ALL, FERRY_HK18_ALL, KMB_HK18_ALL, CTB_HK18_ALL, NWFB_HK18_ALL, GMB_HK18_ALL, CHT_HK18_ALL);