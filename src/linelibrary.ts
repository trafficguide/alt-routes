// Walking Section

// Hong Kong Island
const WALK_HKI_WC_Ex = new Line("", lineType_WALK, "灣仔", "會展", [MTR_ill_wanchai, MTR_erl_exhibition]);
const WALK_HKI_Ex_WC = new Line("", lineType_WALK, "會展", "灣仔", [MTR_erl_exhibition, MTR_ill_wanchai]);
const WALK_HKI_Ce_Ad = new Line("", lineType_WALK, "中環", "金鐘", [MTR_ill_central, MTR_ill_admiralty]);
const WALK_HKI_Ad_Ce = new Line("", lineType_WALK, "金鐘", "中環", [MTR_ill_admiralty, MTR_ill_central]);

const WALK_HKI_CENTRAL_ALL = [WALK_HKI_WC_Ex, WALK_HKI_Ex_WC, WALK_HKI_Ce_Ad, WALK_HKI_Ad_Ce];

const WALK_HKI_ALL = [].concat(WALK_HKI_CENTRAL_ALL);
// Kowloon Peninsula

const WALK_KLP_MK_MKE_KLH = new Line("", lineType_WALK, "旺角東站", "九龍醫院", [MTR_erl_mongkokeast, KowloonHospital]);
const WALK_KLP_MK_KLH_MKE = new Line("", lineType_WALK, "九龍醫院", "旺角東站", [KowloonHospital, MTR_erl_mongkokeast]);

const WALK_KLP_MK_ALL = [WALK_KLP_MK_MKE_KLH, WALK_KLP_MK_KLH_MKE];

const WALK_KLP_ALL = [].concat(WALK_KLP_MK_ALL);

// New Territories (East)

const WALK_NTE_ST_STW = new Line("", lineType_WALK, "沙田市中心", "沙角邨", [MTR_erl_shatin, MTR_mos_shatinwai]);
const WALK_NTE_STW_ST = new Line("", lineType_WALK, "沙角邨", "沙田市中心", [MTR_mos_shatinwai, MTR_erl_shatin]);
const WALK_NTE_ST_CS = new Line("", lineType_WALK, "沙田市中心", "秦石邨", [MTR_erl_shatin, MTR_mos_chekungtemple]);
const WALK_NTE_CS_ST = new Line("", lineType_WALK, "秦石邨", "沙田市中心", [MTR_mos_chekungtemple, MTR_erl_shatin]);
const WALK_NTE_CS_YM = new Line("", lineType_WALK, "秦石邨", "乙明邨", [MTR_mos_chekungtemple, MTR_mos_shatinwai]);
const WALK_NTE_YM_CS = new Line("", lineType_WALK, "乙明邨", "秦石邨", [MTR_mos_shatinwai, MTR_mos_chekungtemple]);
const WALK_NTE_CS_SC = new Line("", lineType_WALK, "秦石邨", "新翠邨", [MTR_mos_chekungtemple, MTR_mos_taiwai]);
const WALK_NTE_SC_CS = new Line("", lineType_WALK, "新翠邨", "秦石邨", [MTR_mos_taiwai, MTR_mos_chekungtemple]);

const WALK_NTE_SHATIN_ALL = [WALK_NTE_ST_STW, WALK_NTE_STW_ST, WALK_NTE_ST_CS, WALK_NTE_CS_ST, WALK_NTE_CS_YM, WALK_NTE_YM_CS, WALK_NTE_CS_SC, WALK_NTE_SC_CS];

const WALK_NTE_ALL = WALK_NTE_SHATIN_ALL;

const WALK_HK18_ALL = [].concat(WALK_HKI_ALL, WALK_KLP_ALL, WALK_NTE_ALL);

// KMB Section

// 06*
const KMB_64K_EAST = new Line("64K", lineType_KMB, "元朗(西)", "大埔墟站", [MTR_tml_longping, MTR_tml_yuenlong, MTR_tml_kamsheungroad, MTR_erl_taiwo, WanTauKokLane, MTR_erl_taipomarket]).setNotes("途經林錦公路");
const KMB_64K_WEST = new Line("64K", lineType_KMB, "大埔墟站", "元朗(西)", [MTR_erl_taipomarket, MTR_erl_taiwo, MTR_tml_kamsheungroad, MTR_tml_yuenlong, MTR_tml_longping]).setNotes("途經林錦公路");
// All 06*
const KMB_NUM_06x_ALL = [KMB_64K_EAST, KMB_64K_WEST];
// 07*
const KMB_72_NORTH = new Line("72", lineType_KMB, "長沙灣", "大埔太和", [MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, MTR_erl_shatin, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo]);
const KMB_72_SOUTH = new Line("72", lineType_KMB, "大埔太和", "長沙灣", [MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, MTR_erl_shatin, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_cheungshawan, MTR_twl_laichikok]);
const KMB_72A_NORTH = new Line("72A", lineType_KMB, "大圍站", "大埔工業邨", [MTR_erl_taiwai, MTR_mos_chekungtemple, JatMinEstate, YuenWo, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad]).setNotes("設有雙程分段收費");
const KMB_72A_SOUTH = new Line("72A", lineType_KMB, "大埔工業邨", "大圍站", [WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, YuenWo, JatMinEstate, MTR_erl_taiwai]).setNotes("設有雙程分段收費");
const KMB_72X_NORTH = new Line("72X", lineType_KMB, "旺角(柏景灣)", "大埔中心", [MTR_tcl_olympic, MTR_ktl_mongkok, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_72X_SOUTH = new Line("72X", lineType_KMB, "大埔中心", "旺角(柏景灣)", [WanTauKokLane, KwongFukEstate, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_ktl_mongkok, MTR_tcl_olympic]).setNotes("大埔特快");
const KMB_73_NORTH = new Line("73", lineType_KMB, "大埔工業邨", "粉嶺華明", [KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_TaiWoSupport, WahMingTerminus]).setNotes("非辦工時間不入工業邨");
const KMB_73_SOUTH = new Line("73", lineType_KMB, "粉嶺華明", "大埔工業邨", [WahMingTerminus, TaiPoRoad_TaiWoSupport, MTR_erl_taiwo, WanTauKokLane]).setNotes("非辦工時間不入工業邨");
const KMB_73A_NORTH = new Line("73A", lineType_KMB, "愉翠苑", "粉嶺華明", [MTR_mos_cityone, MTR_erl_fotan, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, KwongFukRoad, MTR_erl_taiwo, TaiPoRoad_TaiWoSupport, WahMingTerminus]);
const KMB_73A_SOUTH = new Line("73A", lineType_KMB, "粉嶺華明", "愉翠苑", [WahMingTerminus, TaiPoRoad_TaiWoSupport, MTR_erl_taiwo, WanTauKokLane, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, MTR_erl_fotan, MTR_mos_cityone]).setNotes("設有雙程分段收費");
const KMB_73X_NORTH = new Line("73X", lineType_KMB, "荃灣(如心廣場)", "富善邨", [NinaTowers, ChungOnStreet, MTR_twl_taiwohau, LeiMukShueEstate, ShingMunTunnel_Interchange, ShingMunTunnel, TaiPoRoad_Shatin, KwongFukEstate, KwongFukRoad]).setNotes("大埔特快");
const KMB_73X_SOUTH = new Line("73X", lineType_KMB, "富善邨", "荃灣(如心廣場)", [WanTauKokLane, KwongFukEstate, TaiPoRoad_Shatin, ShingMunTunnel, ShingMunTunnel_Interchange, LeiMukShueEstate, MTR_twl_taiwohau, ChungOnStreet, NinaTowers]).setNotes("大埔特快");
const KMB_74A_NORTH = new Line("74A", lineType_KMB, "啟業", "太和", [MTR_ktl_choihung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, LionRockTunnel, LionRockTunnel_Interchange, JatMinEstate, BelairGardens, TaiPoRoad_Shatin, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, KwongFukEstate, MTR_erl_taiwo]).setNotes("班次疏落");
const KMB_74A_SOUTH = new Line("74A", lineType_KMB, "太和", "啟業", [MTR_erl_taiwo, KwongFukEstate, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, TaiPoRoad_Shatin, BelairGardens, JatMinEstate, LionRockTunnel_Interchange, LionRockTunnel, MTR_ktl_wongtaisin, MTR_ktl_diamondhill, PikHoiHouse]).setNotes("班次疏落");
// All 07*
const KMB_NUM_07x_ALL = [KMB_72_NORTH, KMB_72_SOUTH, KMB_72A_NORTH, KMB_72A_SOUTH, KMB_73_NORTH, KMB_73_SOUTH, KMB_73A_NORTH, KMB_73A_SOUTH, KMB_73X_NORTH, KMB_73X_SOUTH, KMB_74A_NORTH, KMB_74A_SOUTH];
// 08*
const KMB_80M_NORTH = new Line("80M", lineType_KMB, "九龍塘站", "穗禾苑", [MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, ShatinTownCenter, YuenWo, FoTanTsuen]);
const KMB_80M_SOUTH = new Line("80M", lineType_KMB, "穗禾苑", "九龍塘站", [FoTanTsuen, YuenWo, ShatinTownHall, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong]);
const KMB_81_NORTH = new Line("81", lineType_KMB, "西九龍站", "禾輋", [MTR_hsr_westkowloon, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_twl_shamshuipo, TaiPoRoad_KowloonReservoir, TaiPoRoad_ShatinHeights, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo]);
const KMB_81_SOUTH = new Line("81", lineType_KMB, "禾輋", "西九龍站", [YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, TaiPoRoad_ShatinHeights, TaiPoRoad_KowloonReservoir, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_hsr_westkowloon]);
const KMB_81C_NORTH = new Line("81C", lineType_KMB, "尖東麼地道", "耀安", [MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, ChevalierGarden, MTR_mos_hengon, HengHongStreet]);
const KMB_81C_SOUTH = new Line("81C", lineType_KMB, "耀安", "尖東麼地道", [HengHongStreet, MTR_mos_hengon, ChevalierGarden, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui]);
const KMB_81K_NORTH = new Line("81K", lineType_KMB, "新田圍", "穗禾苑", [MTR_mos_chekungtemple, MTR_mos_shatinwai, ShatinTownCenter, FoTanTsuen]);
const KMB_81K_SOUTH = new Line("81K", lineType_KMB, "穗禾苑", "新田圍", [FoTanTsuen, ShatinTownCenter, MTR_mos_shatinwai, MTR_mos_chekungtemple]);
const KMB_85K_NORTH = new Line("85K", lineType_KMB, "沙田站", "恆安", [MTR_erl_shatin, YuenWo, ShatinSeafood, ChevalierGarden, MTR_mos_hengon]);
const KMB_85K_SOUTH = new Line("85K", lineType_KMB, "恆安", "沙田站", [MTR_mos_hengon, ChevalierGarden, ShatinSeafood, YuenWo, MTR_erl_shatin]);
const KMB_87D_NORTH = new Line("87D", lineType_KMB, "紅磡", "錦英苑", [MTR_erl_hunghom, MTR_tml_easttsimshatsui, MTR_twl_jordan, MTR_ktl_yaumatei, MTR_ktl_mongkok, MTR_ktl_princeedward, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, ShatinSeafood, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan]);
const KMB_87D_SOUTH = new Line("87D", lineType_KMB, "錦英苑", "紅磡", [MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinSeafood, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui, MTR_erl_hunghom]);
const KMB_87K = new Line("87K", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, HengHongStreet, MTR_mos_maonshan, KamYingCourt, MTR_mos_maonshan, HengHongStreet, MTR_erl_university]).markCircular();
const KMB_87S = new Line("87S", lineType_KMB, "大學站", "錦英苑", [MTR_erl_university, KamYingCourt, MaOnShanRoad, MTR_erl_university]);
const KMB_88K_NORTH = new Line("88K", lineType_KMB, "顯徑", "駿景園", [MTR_tml_hinkeng, MTR_erl_taiwai, TaiPoRoad_MeiLam, ShatinTownCenter, YuenWo, MTR_erl_fotan, RoyalAscot]);
const KMB_88K_SOUTH = new Line("88K", lineType_KMB, "駿景園", "顯徑", [RoyalAscot, MTR_erl_fotan, YuenWo, ShatinTownCenter, TaiPoRoad_MeiLam, MTR_erl_taiwai, MTR_tml_hinkeng]);

// All 08*
const KMB_NUM_08x_ALL = [KMB_80M_NORTH, KMB_80M_SOUTH, KMB_81_NORTH, KMB_81_SOUTH, KMB_81C_NORTH, KMB_81C_SOUTH, KMB_81K_NORTH, KMB_81K_SOUTH, KMB_85K_NORTH, KMB_85K_SOUTH, KMB_87D_NORTH, KMB_87D_SOUTH, KMB_87K, KMB_87S, KMB_88K_NORTH, KMB_88K_SOUTH];
// All 0**
const KMB_NUM_0xx_ALL = [].concat(KMB_NUM_06x_ALL, KMB_NUM_07x_ALL, KMB_NUM_08x_ALL);

// 27*
const KMB_270A_NORTH = new Line("270A", lineType_KMB, "尖東麼地道", "上水", [MTR_tml_easttsimshatsui, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, KowloonHospital, MTR_erl_kowloontong, LionRockTunnel, LionRockTunnel_Interchange, TaiPoRoad_Shatin, ToloHighway_TaiPo, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]);
const KMB_270A_SOUTH = new Line("270A", lineType_KMB, "上水", "尖東麼地道", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, FanlingHighway_Interchange, ToloHighway_TaiPo, TaiPoRoad_Shatin, LionRockTunnel_Interchange, LionRockTunnel, MTR_erl_kowloontong, KowloonHospital, MTR_twl_yaumatei, MTR_twl_jordan, MTR_tml_easttsimshatsui]);
const KMB_273 = new Line("273", lineType_KMB, "粉嶺華明", "粉嶺站", [WahMingTerminus, MTR_erl_fanling, WahMingTerminus]).markCircular();
const KMB_273A = new Line("273A", lineType_KMB, "彩園", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();
const KMB_273D = new Line("273D", lineType_KMB, "上水", "粉嶺華明", [MTR_erl_sheungshui, MTR_erl_fanling, WahMingTerminus, MTR_erl_fanling, MTR_erl_sheungshui]).markCircular();

// All 27*
const KMB_NUM_27x_ALL = [KMB_270A_NORTH, KMB_270A_SOUTH, KMB_273, KMB_273A, KMB_273D];

// 28*
const KMB_281A_NORTH = new Line("281A", lineType_KMB, "九龍站", "沙田廣源", [MTR_tcl_kowloon, MTR_twl_tsimshatsui, MTR_twl_jordan, MTR_twl_yaumatei, MTR_twl_mongkok, MTR_twl_princeedward, MTR_erl_kowloontong, LionRockTunnel, MTR_mos_cityone]).setNotes("獅隧特快");
const KMB_281A_SOUTH = new Line("281A", lineType_KMB, "沙田廣源", "九龍站", [MTR_mos_cityone, LionRockTunnel, MTR_erl_kowloontong, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_tcl_kowloon]).setNotes("獅隧特快");
const KMB_281M_NORTH = new Line("281M", lineType_KMB, "九龍塘站", "新田圍", [MTR_erl_kowloontong, MTR_tml_hinkeng, MTR_erl_taiwai, MTR_mos_chekungtemple]);
const KMB_281M_SOUTH = new Line("281M", lineType_KMB, "新田圍", "九龍塘站", [MTR_mos_chekungtemple, MTR_erl_taiwai, MTR_tml_hinkeng, MTR_erl_kowloontong]);
const KMB_282 = new Line("282", lineType_KMB, "沙田市中心", "新田圍", [ShatinTownCenter, MTR_mos_chekungtemple, ShatinTownCenter]).markCircular();
const KMB_288 = new Line("288", lineType_KMB, "水泉澳", "沙田市中心", [MTR_mos_shatinwai, ShatinTownHall, MTR_mos_shatinwai]).markCircular();
const KMB_289K = new Line("289K", lineType_KMB, "大學站", "富安花園", [MTR_erl_university, MTR_mos_hengon, ChevalierGarden, MTR_erl_university]).markCircular();

// All 28*
const KMB_NUM_28x_ALL = [KMB_281A_NORTH, KMB_281A_SOUTH, KMB_281M_NORTH, KMB_281M_SOUTH, KMB_282, KMB_288, KMB_289K];

// All 2**
const KMB_NUM_2xx_ALL = [].concat(KMB_NUM_27x_ALL, KMB_NUM_28x_ALL);

// Special Lines
const KMB_W3_NORTH = new Line("W3", lineType_KMB, "西九龍站", "上水", [MTR_hsr_westkowloon, MTR_erl_shatin, KwongFukEstate, MTR_erl_sheungshui]).setNotes("高鐵特快；設有雙程分段收費");
const KMB_W3_SOUTH = new Line("W3", lineType_KMB, "上水", "西九龍站", [MTR_erl_sheungshui, KwongFukEstate, MTR_erl_shatin, MTR_hsr_westkowloon]).setNotes("高鐵特快；設有雙程分段收費");
// All Special Lines
const KMB_NUM_SPECIAL = [KMB_W3_NORTH, KMB_W3_SOUTH];
/*
const test_w3_north = new Line("w3", lineType_KMB, "wkl", "ss", [MTR_erl_taipomarket, MTR_erl_sheungshui], "", "x", false);
const test_803k_north = new Line("803k", lineType_GMB_NT, "hk", "twa", [MTR_tml_hinkeng, MTR_erl_taiwai], "", "", false);
*/

const KMB_PURE_HK18_ALL = [].concat(KMB_NUM_0xx_ALL, KMB_NUM_2xx_ALL, KMB_NUM_SPECIAL);

// GMB Section

// New Territories section
// 02*
const GMB_NT_26_EAST = new Line("26", lineType_GMB_NT, "香港教育大學", "海柏花園", [MTR_erl_taipomarket, HengHongStreet, MTR_mos_maonshan]).setNotes("大埔特快");
const GMB_NT_26_WEST = new Line("26", lineType_GMB_NT, "海柏花園", "香港教育大學", [MTR_mos_maonshan, HengHongStreet, MTR_erl_taipomarket]).setNotes("大埔特快");
const GMB_NT_28K = new Line("28K", lineType_GMB_NT, "大埔墟站", "沙田市中心", [MTR_erl_taipomarket, TaiPoRoad_TaiPoKau, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, TaiPoRoad_TaiPoKau, MTR_erl_taipomarket]).markCircular();
const GMB_NT_28S = new Line("28S", lineType_GMB_NT, "白石角", "沙田市中心", [PakShekKok, CheungShueTan, TaiPoRoad_CUHK, RoyalAscot, MTR_erl_fotan, MTR_erl_shatin, MTR_erl_fotan, RoyalAscot, TaiPoRoad_CUHK, CheungShueTan, PakShekKok]).markCircular();
// All 02*
const GMB_NT_NUM_02x = [GMB_NT_26_EAST, GMB_NT_26_WEST, GMB_NT_28K, GMB_NT_28S];
// 06*
const GMB_NT_65K_NORTH = new Line("65K", lineType_GMB_NT, "黃泥頭", "火炭站", [MTR_mos_cityone, ShatinSeafood, MTR_erl_fotan]);
const GMB_NT_65K_SOUTH = new Line("65K", lineType_GMB_NT, "火炭站", "黃泥頭", [MTR_erl_fotan, MTR_mos_cityone]);
// All 06*
const GMB_NT_NUM_06x = [GMB_NT_65K_NORTH, GMB_NT_65K_SOUTH];
// All 0**
const GMB_NT_NUM_0xx = [].concat(GMB_NT_NUM_02x, GMB_NT_NUM_06x);
// 80*
const GMB_NT_803_NORTH = new Line("803", lineType_GMB_NT, "顯徑", "利安", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, ShatinSeafood, MTR_mos_taishuihang, HengHongStreet, MTR_mos_maonshan, LeeOnEstate]).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803_SOUTH = new Line("803", lineType_GMB_NT, "利安", "顯徑", [LeeOnEstate, MTR_mos_maonshan, HengHongStreet, MTR_mos_taishuihang, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng]).setNotes("繁忙時間不停大水坑站");
const GMB_NT_803K_EAST = new Line("803K", lineType_GMB_NT, "顯徑", "大圍站", [MTR_tml_hinkeng, MTR_mos_taiwai]);
const GMB_NT_803K_WEST = new Line("803K", lineType_GMB_NT, "大圍站", "顯徑", [MTR_mos_taiwai, MTR_tml_hinkeng]);
const GMB_NT_804_EAST = new Line("804", lineType_GMB_NT, "顯徑", "廣源", [MTR_tml_hinkeng, MTR_mos_taiwai, MTR_mos_chekungtemple, JatMinEstate, BelairGardens, MTR_mos_cityone]);
const GMB_NT_804_WEST = new Line("804", lineType_GMB_NT, "廣源", "顯徑", [MTR_mos_cityone, ShatinSeafood, BelairGardens, JatMinEstate, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_tml_hinkeng]);
const GMB_NT_807A_EAST = new Line("807A", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_hengon, MTR_mos_maonshan]);
const GMB_NT_807A_WEST = new Line("807A", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university]);
const GMB_NT_807B_EAST = new Line("807B", lineType_GMB_NT, "海柏花園", "黃竹灣", [MTR_mos_maonshan, MTR_mos_wukaisha]);
const GMB_NT_807B_WEST = new Line("807B", lineType_GMB_NT, "黃竹灣", "海柏花園", [MTR_mos_wukaisha, MTR_mos_maonshan]);
const GMB_NT_807C_EAST = new Line("807C", lineType_GMB_NT, "大學站", "海柏花園", [MTR_erl_university, MTR_mos_maonshan]);
const GMB_NT_807C_WEST = new Line("807C", lineType_GMB_NT, "海柏花園", "大學站", [MTR_mos_maonshan, MTR_mos_hengon, MTR_erl_university]);
const GMB_NT_807K_EAST = new Line("807K", lineType_GMB_NT, "大學站", "井頭", [MTR_erl_university, MaOnShanRoad, MTR_mos_maonshan, MTR_mos_wukaisha]);
const GMB_NT_807K_WEST = new Line("807K", lineType_GMB_NT, "井頭", "大學站", [MTR_mos_wukaisha, MTR_mos_maonshan, MaOnShanRoad, MTR_erl_university]);
const GMB_NT_807X = new Line("807X", lineType_GMB_NT, "大學站", "烏溪沙站", [MTR_erl_university, MTR_mos_wukaisha, MTR_erl_university]).markCircular();

// All 80*
const GMB_NT_NUM_80x = [GMB_NT_803_NORTH, GMB_NT_803_SOUTH, GMB_NT_803K_EAST, GMB_NT_803K_WEST, GMB_NT_804_EAST, GMB_NT_804_WEST, GMB_NT_807A_EAST, GMB_NT_807A_WEST, GMB_NT_807B_EAST, GMB_NT_807B_WEST, GMB_NT_807C_EAST, GMB_NT_807C_WEST, GMB_NT_807K_EAST, GMB_NT_807K_WEST, GMB_NT_807X];
// 81*

// All 81*
// 90* (currently 1 line but still)
// All 8**
const GMB_NT_NUM_8xx = [].concat(GMB_NT_NUM_80x);
// All NT
const GMB_NT_ALL = [].concat(GMB_NT_NUM_0xx, GMB_NT_NUM_8xx);

const GMB_HK18_ALL = GMB_NT_ALL;

// Cross-Harbour Lines
// 18*
const CHT_182_NORTH = new Line("182", lineType_HARBOUR, "港澳瑪頭", "愉翠苑", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_erl_hunghom, KowloonHospital, MTR_erl_kowloontong, MTR_mos_taiwai, MTR_mos_chekungtemple, MTR_mos_shatinwai, MTR_mos_cityone]);
const CHT_182_SOUTH = new Line("182", lineType_HARBOUR, "愉翠苑", "港澳瑪頭", [MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai, MTR_erl_kowloontong, KowloonHospital, MTR_erl_hunghom, MTR_ill_causewaybay, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central]);
// All 18*
const CHT_NUM_18x_ALL = [CHT_182_NORTH, CHT_182_SOUTH];

// All 1**
const CHT_NUM_1xx_ALL = [].concat(CHT_NUM_18x_ALL);

// 30*
const CHT_307_NORTH = new Line("307", lineType_HARBOUR, "中環渡輪碼頭", "大埔中心", [MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_tinhau, EastHarbourTunnel, EastHarbourTunnel_Interchange, OldTatesTunnel, OldTatesTunnel_Interchange, KwongFukEstate, KwongFukRoad]).setNotes("東走特快；東隧特快；大老山特快；大埔特快");
const CHT_307_SOUTH = new Line("307", lineType_HARBOUR, "大埔中心", "中環渡輪碼頭", [WanTauKokLane, KwongFukEstate, OldTatesTunnel_Interchange, OldTatesTunnel, EastHarbourTunnel_Interchange, EastHarbourTunnel, MTR_ill_wanchai, MTR_ill_admiralty, MTR_ill_central, MTR_ill_sheungwan]).setNotes("大埔特快；大老山特快；東隧特快；東走特快");

// All 30*
const CHT_NUM_30x_ALL = [CHT_307_NORTH, CHT_307_SOUTH];

// All 3**
const CHT_NUM_3xx_ALL = [].concat(CHT_NUM_30x_ALL);

// All Cross-Harbour Bus
const CHT_HK18_ALL = [].concat(CHT_NUM_1xx_ALL, CHT_NUM_3xx_ALL);

// All Section

const HK18_ALL_LINES: Array<Line> = [].concat(WALK_HK18_ALL, KMB_PURE_HK18_ALL, GMB_HK18_ALL, CHT_HK18_ALL);