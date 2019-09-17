// All waypoints.
// 東鐵線
var MTR_erl_sheungshui = new Waypoint("erl_ss", "上水");
var MTR_erl_fanling = new Waypoint("erl_fl", "粉嶺");
var MTR_erl_taiwo = new Waypoint("erl_two", "太和");
var MTR_erl_taipomarket = new Waypoint("erl_tpm", "大埔墟");
var MTR_erl_university = new Waypoint("erl_uni", "大學");
var MTR_erl_chungchi = new Waypoint("erl_cuhk", "崇基學院");
var MTR_erl_fotan = new Waypoint("erl_ft", "火炭");
var MTR_erl_shatin = new Waypoint("erl_st", "沙田");
var MTR_erl_taiwai = new Waypoint("erl_twa", "大圍");
var MTR_erl_kowloontong = new Waypoint("erl_klt", "九龍塘");
var MTR_erl_mongkokeast = new Waypoint("erl_mke", "旺角東");
var MTR_erl_hunghom = new Waypoint("erl_hh", "紅磡");
var MTR_erl_exhibition = new Waypoint("erl_exh", "會展");
var MTR_erl_admiralty = new Waypoint("erl_adm", "金鐘");
// The entirety of Tuen Ma Line is so long that it's better to just split it into two logical parts.
// 屯馬東
var MTR_tml_wukaisha = new Waypoint("tml_wks", "烏溪沙");
var MTR_tml_maonshan = new Waypoint("tml_mos", "馬鞍山");
var MTR_tml_hengon = new Waypoint("tml_ho", "恆安");
var MTR_tml_taishuihang = new Waypoint("tml_tsh", "大水坑");
var MTR_tml_shekmun = new Waypoint("tml_sm", "石門");
var MTR_tml_cityone = new Waypoint("tml_cto", "第一城");
var MTR_tml_shatinwai = new Waypoint("tml_stw", "沙田圍");
var MTR_tml_chekungtemple = new Waypoint("tml_ckt", "車公廟");
var MTR_tml_taiwai = MTR_erl_taiwai;
var MTR_tml_hinkeng = new Waypoint("tml_hk", "顯徑");
var MTR_tml_diamondhill = new Waypoint("tml_dmh", "鑽石山");
var MTR_tml_kaitak = new Waypoint("tml_kt", "啟德");
var MTR_tml_sungwongtoi = new Waypoint("tml_swt", "宋皇臺");
var MTR_tml_tokwawan = new Waypoint("tml_tkw", "土瓜灣");
var MTR_tml_homantin = new Waypoint("tml_hmt", "何文田");
// 屯馬西 aka 西鐵線
// West Rail Line can be intuitively understood as Tuen Mun Line which coincides with the name Tuen Ma Line, so no need for legacy support.
var MTR_tml_tuenmun = new Waypoint("tml_tm", "屯門");
var MTR_tml_siuhong = new Waypoint("tml_sh", "兆康");
var MTR_tml_hungshuikiu = new Waypoint("tml_hsk", "洪水橋");
var MTR_tml_tinshuiwai = new Waypoint("tml_tsw", "天水圍");
var MTR_tml_longping = new Waypoint("tml_lp", "朗屏");
var MTR_tml_yuenlong = new Waypoint("tml_yl", "元朗");
var MTR_tml_kamsheungroad = new Waypoint("tml_ksr", "錦上路");
var MTR_tml_tsuenwanwest = new Waypoint("tml_tww", "荃灣西");
var MTR_tml_meifoo = new Waypoint("tml_mf", "美孚");
var MTR_tml_namcheong = new Waypoint("tml_nc", "南昌");
var MTR_tml_austin = new Waypoint("tml_aus", "柯士甸");
var MTR_tml_easttsimshatsui = new Waypoint("tml_etst", "尖東");
var MTR_tml_hunghom = MTR_erl_hunghom;
// 馬鐵線: created for legacy support
var MTR_mos_wukaisha = MTR_tml_wukaisha;
var MTR_mos_maonshan = MTR_tml_maonshan;
var MTR_mos_hengon = MTR_tml_hengon;
var MTR_mos_taishuihang = MTR_tml_taishuihang;
var MTR_mos_shekmun = MTR_tml_shekmun;
var MTR_mos_cityone = MTR_tml_cityone;
var MTR_mos_shatinwai = MTR_tml_shatinwai;
var MTR_mos_chekungtemple = MTR_tml_chekungtemple;
var MTR_mos_taiwai = MTR_tml_taiwai;
// 觀塘線
var MTR_ktl_tiukengleng = new Waypoint("ktl_tkl", "調景嶺");
var MTR_ktl_yautong = new Waypoint("ktl_yt", "油塘");
var MTR_ktl_lamtin = new Waypoint("ktl_lt", "藍田");
var MTR_ktl_kuntong = new Waypoint("ktl_kt", "觀塘");
var MTR_ktl_ngautaukok = new Waypoint("ktl_ntk", "牛頭角");
var MTR_ktl_kowloonbay = new Waypoint("ktl_klb", "九龍灣");
var MTR_ktl_choihung = new Waypoint("ktl_ch", "彩虹");
var MTR_ktl_diamondhill = MTR_tml_diamondhill;
var MTR_ktl_wongtaisin = new Waypoint("ktl_wts", "黃大仙");
var MTR_ktl_lokfu = new Waypoint("ktl_lf", "樂富");
var MTR_ktl_kowloontong = MTR_erl_kowloontong;
var MTR_ktl_shekkipmei = new Waypoint("ktl_skm", "石硤尾");
var MTR_ktl_princeedward = new Waypoint("ktl_pe", "太子");
var MTR_ktl_mongkok = new Waypoint("ktl_mk", "旺角");
var MTR_ktl_yaumatei = new Waypoint("ktl_ymt", "油麻地");
var MTR_ktl_homantin = MTR_tml_homantin;
var MTR_ktl_whampoa = new Waypoint("ktl_wham", "黃埔");
// 荃灣線
var MTR_twl_tsuenking = new Waypoint("twl_tk", "荃景");
var MTR_twl_tsuenwan = new Waypoint("twl_tw", "荃灣");
var MTR_twl_taiwohau = new Waypoint("twl_twh", "大窩口");
var MTR_twl_kwaihing = new Waypoint("twl_kh", "葵興");
var MTR_twl_kwaifong = new Waypoint("twl_kf", "葵芳");
var MTR_twl_laiking = new Waypoint("twl_lk", "荔景");
var MTR_twl_meifoo = MTR_tml_meifoo;
var MTR_twl_laichikok = new Waypoint("twl_lck", "荔枝角");
var MTR_twl_cheungshawan = new Waypoint("twl_csw", "長沙灣");
var MTR_twl_shamshuipo = new Waypoint("twl_ssp", "深水埗");
var MTR_twl_princeedward = MTR_ktl_princeedward;
var MTR_twl_mongkok = MTR_ktl_mongkok;
var MTR_twl_yaumatei = MTR_ktl_yaumatei;
var MTR_twl_jordan = new Waypoint("twl_jor", "佐敦");
var MTR_twl_tsimshatsui = new Waypoint("twl_tst", "尖沙咀");
var MTR_twl_admiralty = MTR_erl_admiralty;
var MTR_twl_central = new Waypoint("twl_cen", "中環");
// 港島線
var MTR_ill_kennedytown = new Waypoint("ill_knd", "堅尼地城");
var MTR_ill_hku = new Waypoint("ill_hku", "香港大學");
var MTR_ill_saiyingpun = new Waypoint("ill_syp", "西營盤");
var MTR_ill_sheungwan = new Waypoint("ill_sw", "上環");
var MTR_ill_central = MTR_twl_central;
var MTR_ill_admiralty = MTR_twl_admiralty;
var MTR_ill_wanchai = new Waypoint("ill_wc", "灣仔");
var MTR_ill_causewaybay = new Waypoint("ill_cwb", "銅鑼灣");
var MTR_ill_tinhau = new Waypoint("ill_th", "天后");
var MTR_ill_northpoint = new Waypoint("ill_np", "北角");
var MTR_ill_quarrybay = new Waypoint("ill_qwb", "鰂魚涌");
var MTR_ill_taikoo = new Waypoint("ill_tk", "太古");
var MTR_ill_saiwanho = new Waypoint("ill_swh", "西灣河");
var MTR_ill_saukeiwan = new Waypoint("ill_skw", "筲箕灣");
var MTR_ill_hengfachuen = new Waypoint("ill_hfc", "杏花邨");
var MTR_ill_chaiwan = new Waypoint("ill_cw", "柴灣");
// 將軍澳線
var MTR_tko_polam = new Waypoint("tko_pl", "寶琳");
var MTR_tko_hanghau = new Waypoint("tko_hh", "坑口");
var MTR_tko_tseungkwano = new Waypoint("tko_tko", "將軍澳");
var MTR_tko_lohaspark = new Waypoint("tko_lohas", "康城");
var MTR_tko_tiukengleng = MTR_ktl_tiukengleng;
var MTR_tko_yautong = MTR_ktl_yautong;
var MTR_tko_quarrybay = MTR_ill_quarrybay;
var MTR_tko_northpoint = MTR_ill_northpoint;
// 東涌線
var MTR_tcl_tungchung = new Waypoint("tcl_tc", "東涌");
var MTR_tcl_sunnybay = new Waypoint("tcl_sb", "欣澳");
var MTR_tcl_tsingyi = new Waypoint("tcl_ty", "青衣");
var MTR_tcl_laiking = MTR_twl_laiking;
var MTR_tcl_namcheong = MTR_tml_namcheong;
var MTR_tcl_olympic = new Waypoint("tcl_oly", "奧運");
var MTR_tcl_kowloon = new Waypoint("tcl_kln", "九龍");
var MTR_tcl_hongkong = new Waypoint("tcl_hk", "香港");
// 機場快線
var MTR_aex_asiaworldexpo = new Waypoint("aex_awx", "博覽館");
var MTR_aex_airport = new Waypoint("aex_air", "機場");
var MTR_aex_tsingyi = MTR_tcl_tsingyi;
var MTR_aex_kowloon = MTR_tcl_kowloon;
var MTR_aex_hongkong = MTR_tcl_hongkong;
// 南港東
var MTR_seil_southhoriz = new Waypoint("seil_sh", "海怡半島");
var MTR_seil_leitung = new Waypoint("seil_lt", "利東");
var MTR_seil_wongchukhang = new Waypoint("seil_wch", "黃竹坑");
var MTR_seil_oceanpark = new Waypoint("seil_op", "海洋公園");
var MTR_seil_admiralty = MTR_ill_admiralty;
// 南港西
var MTR_swil_wongchukhang = MTR_seil_wongchukhang;
var MTR_swil_aberdeen = new Waypoint("swil_abd", "香港仔");
var MTR_swil_tinwan = new Waypoint("swil_tw", "田灣");
var MTR_swil_wahfoo = new Waypoint("swil_wf", "華富");
var MTR_swil_cyberport = new Waypoint("swil_cbp", "數碼港");
var MTR_swil_queenmary = new Waypoint("swil_qmh", "瑪麗醫院");
var MTR_swil_hku = MTR_ill_hku;
// 其他
var MTR_hsr_westkowloon = new Waypoint("hsr_wkl", "西九龍").addNeighbor(MTR_tml_austin).addNeighbor(MTR_tcl_kowloon);
// Line-Arrays
/**
 * An array containing all East Rail Line waypoints.
 */
/**
 * All East Rail Line stations
 */
var MTR_ERL_ALL = [MTR_erl_admiralty, MTR_erl_exhibition, MTR_erl_hunghom, MTR_erl_mongkokeast, MTR_erl_kowloontong, MTR_erl_taiwai, MTR_erl_shatin, MTR_erl_fotan, MTR_erl_university, MTR_erl_taipomarket, MTR_erl_taiwo, MTR_erl_fanling, MTR_erl_sheungshui];
/**
 * All (former) Ma On Shan Line stations
 */
var MTR_MOS_ALL = [MTR_mos_wukaisha, MTR_mos_maonshan, MTR_mos_hengon, MTR_mos_taishuihang, MTR_mos_shekmun, MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai];
/**
 * All Tuen Ma Line (East) stations
 */
var MTR_TMLE_ALL = MTR_MOS_ALL.concat(MTR_tml_hinkeng);
// Other (internal) waypoints for road marking
var TaiPoRoad_KowloonReservoir = new Waypoint("tpr_reservoir", "九龍水塘").markAttributes("i");
var TaiPoRoad_ShatinHeights = new Waypoint("tpr_shatinheights", "沙田嶺").markAttributes("i");
var TaiPoRoad_MeiLam = new Waypoint("tpr_ml", "美林").markAttributes("x");
var TaiPoRoad_Shatin = new Waypoint("tpr_st", "大埔公路 (沙田)").markAttributes("i");
var TaiPoRoad_CUHK = new Waypoint("tpr_cuhk", "香港中文大學").addNeighbor(MTR_erl_university);
var TaiPoRoad_TaiPoKau = new Waypoint("tpr_tpk", "大埔滘").markAttributes("i");
var TaiPoRoad_TaiWoSupport = new Waypoint("tpr_twsr", "大窩支路").markAttributes("i");
var LionRockTunnel = new Waypoint("lionrock", "獅子山隧道").markAttributes("i");
var LionRockTunnel_Interchange = new Waypoint("lionrock_i", "獅隧轉車站").markAttributes("x");
var JatMinEstate = new Waypoint("yatming", "乙明邨").addNeighbor(MTR_mos_shatinwai);
var PikHoiHouse = new Waypoint("pikhoi", "碧海樓").addNeighbor(MTR_ktl_choihung);
var RoyalAscot = new Waypoint("royalascot", "駿景園");
var CheungShueTan = new Waypoint("cheungshuetan", "樟樹灘");
var PakShekKok = new Waypoint("pakshekkok", "白石角");
var ShatinSeafood = new Waypoint("stseafood", "沙田海鮮舫");
var LeeOnEstate = new Waypoint("leeon", "利安").addNeighbor(MTR_mos_wukaisha);
var BelairGardens = new Waypoint("belairgardens", "富豪花園");
var YuenWo = new Waypoint("yuenwo", "瀝源邨/禾輋邨").addNeighbor(MTR_erl_shatin);
var HengHongStreet = new Waypoint("henghong", "恆康街").addNeighbor(MTR_mos_hengon);
var MaOnShanRoad = new Waypoint("mosroad", "馬鞍山路");
var WahMingTerminus = new Waypoint("wahming", "華明總站").markAttributes("s");
var WanTauKokLane = new Waypoint("wtklane", "運頭角里").markAttributes("x");
var KwongFukRoad = new Waypoint("kwongfukroad", "廣福路").markAttributes("x");
// It is a normal station, yet also an interchange station.
var KwongFukEstate = new Waypoint("kwongfukestate", "廣福邨").markAttributes("s").addNeighbor(MTR_erl_taipomarket);
var LeiMukShueEstate = new Waypoint("leimukshue", "梨木樹邨/石圍角");
var NinaTowers = new Waypoint("nina", "如心廣場").addNeighbor(MTR_tml_tsuenwanwest);
var ChungOnStreet = new Waypoint("chungonstreet", "眾安街").addNeighbor(MTR_twl_tsuenwan);
var ShingMunTunnel_Interchange = new Waypoint("smtInterchange", "城隧轉車站").markAttributes("x");
var ShingMunTunnel = new Waypoint("smtActual", "城門隧道").markAttributes("i");
var ShatinTownCenter = new Waypoint("stcenter", "沙田市中心").addNeighbor(MTR_erl_shatin);
var ShatinTownHall = new Waypoint("sttownhall", "沙田大會堂").addNeighbor(MTR_erl_shatin).addNeighbor(ShatinTownCenter);
var FoTanTsuen = new Waypoint("fotanvillage", "火炭村").addNeighbor(MTR_erl_fotan);
var ChevalierGarden = new Waypoint("chevalier", "富安花園").addNeighbor(MTR_mos_taishuihang);
var KamYingCourt = new Waypoint("kamyingcourt", "錦英苑").addNeighbor(LeeOnEstate);
var ToloHighway_TaiPo = new Waypoint("tlh_taipo", "吐露港公路 (大埔)").markAttributes("i");
var FanlingHighway_Interchange = new Waypoint("flh_interchange", "粉嶺公路轉車站").markAttributes("i");
var EastHarbourTunnel = new Waypoint("eht", "東區海底隧道").markAttributes("i");
var EastHarbourTunnel_Interchange = new Waypoint("eht_interchange", "東隧轉車站").markAttributes("x");
var OldTatesTunnel = new Waypoint("ott", "大老山隧道").markAttributes("i");
var OldTatesTunnel_Interchange = new Waypoint("ott_interchange", "大老山轉車站").markAttributes("x");
var KowloonHospital = new Waypoint("klhospital", "九龍醫院");
function obtainAllMTRWaypoints() {
    var allWaypoints = new Array();
    allWaypoints = allWaypoints.concat(MTR_ERL_ALL);
    allWaypoints = allWaypoints.concat(MTR_TMLE_ALL);
    return allWaypoints;
}
