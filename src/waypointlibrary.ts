// All waypoints.

// 東鐵線
const MTR_erl_sheungshui = new Waypoint("erl_ss", "上水");
const MTR_erl_fanling = new Waypoint("erl_fl", "粉嶺");
const MTR_erl_taiwo = new Waypoint("erl_two", "太和");
const MTR_erl_taipomarket = new Waypoint("erl_tpm", "大埔墟");
//const MTR_erl_CUHK = new Waypoint("erl_cuhk", "中文大學");
const MTR_erl_university = new Waypoint("erl_uni", "大學");
const MTR_erl_fotan = new Waypoint("erl_ft", "火炭");
const MTR_erl_shatin = new Waypoint("erl_st", "沙田");
const MTR_erl_taiwai = new Waypoint("erl_twa", "大圍");
const MTR_erl_kowloontong = new Waypoint("erl_klt", "九龍塘");
const MTR_erl_mongkokeast = new Waypoint("erl_mke", "旺角東");
const MTR_erl_hunghom = new Waypoint("erl_hh", "紅磡");
const MTR_erl_exhibition = new Waypoint("erl_exh", "會展");
const MTR_erl_admiralty = new Waypoint("erl_adm", "金鐘");

// The entirety of Tuen Ma Line is so long that it's better to just split it into two logical parts.
// 屯馬東
const MTR_tml_wukaisha = new Waypoint("tml_wks", "烏溪沙");
const MTR_tml_maonshan = new Waypoint("tml_mos", "馬鞍山");
const MTR_tml_hengon = new Waypoint("tml_ho", "恆安");
const MTR_tml_taishuihang = new Waypoint("tml_tsh", "大水坑");
const MTR_tml_shekmun = new Waypoint("tml_sm", "石門");
const MTR_tml_cityone = new Waypoint("tml_cto", "第一城");
const MTR_tml_shatinwai = new Waypoint("tml_stw", "沙田圍");
const MTR_tml_chekungtemple = new Waypoint("tml_ckt", "車公廟");
const MTR_tml_taiwai = MTR_erl_taiwai;
const MTR_tml_hinkeng = new Waypoint("tml_hk", "顯徑");
const MTR_tml_diamondhill = new Waypoint("tml_dmh", "鑽石山");
const MTR_tml_kaitak = new Waypoint("tml_kt", "啟德");
const MTR_tml_sungwongtoi = new Waypoint("tml_swt", "宋皇臺");
const MTR_tml_tokwawan = new Waypoint("tml_tkw", "土瓜灣");
const MTR_tml_homantin = new Waypoint("tml_hmt", "何文田");

// 屯馬西 aka 西鐵線
// West Rail Line can be intuitively understood as Tuen Mun Line which coincides with the name Tuen Ma Line, so no need for legacy support.
const MTR_tml_tuenmun = new Waypoint("tml_tm", "屯門");
const MTR_tml_siuhong = new Waypoint("tml_sh", "兆康");
const MTR_tml_hungshuikiu = new Waypoint("tml_hsk", "洪水橋");
const MTR_tml_tinshuiwai = new Waypoint("tml_tsw", "天水圍");
const MTR_tml_longping = new Waypoint("tml_lp", "朗屏");
const MTR_tml_yuenlong = new Waypoint("tml_yl", "元朗");
const MTR_tml_kamsheungroad = new Waypoint("tml_ksr", "錦上路");
const MTR_tml_tsuenwanwest = new Waypoint("tml_tww", "荃灣西");
const MTR_tml_meifoo = new Waypoint("tml_mf", "美孚");
const MTR_tml_namcheong = new Waypoint("tml_nc", "南昌");
const MTR_tml_austin = new Waypoint("tml_aus", "柯士甸");
const MTR_tml_easttsimshatsui = new Waypoint("tml_etst", "尖東");
const MTR_tml_hunghom = MTR_erl_hunghom;

// 馬鐵線: created for legacy support
const MTR_mos_wukaisha = MTR_tml_wukaisha;
const MTR_mos_maonshan = MTR_tml_maonshan;
const MTR_mos_hengon = MTR_tml_hengon;
const MTR_mos_taishuihang = MTR_tml_taishuihang;
const MTR_mos_shekmun = MTR_tml_shekmun;
const MTR_mos_cityone = MTR_tml_cityone;
const MTR_mos_shatinwai = MTR_tml_shatinwai;
const MTR_mos_chekungtemple = MTR_tml_chekungtemple;
const MTR_mos_taiwai = MTR_tml_taiwai;

// 觀塘線
const MTR_ktl_tiukengleng = new Waypoint("ktl_tkl", "調景嶺");
const MTR_ktl_yautong = new Waypoint("ktl_yt", "油塘");
const MTR_ktl_lamtin = new Waypoint("ktl_lt", "藍田");
const MTR_ktl_kwuntong = new Waypoint("ktl_kt", "觀塘");
const MTR_ktl_ngautaukok = new Waypoint("ktl_ntk", "牛頭角");
const MTR_ktl_kowloonbay = new Waypoint("ktl_klb", "九龍灣");
const MTR_ktl_choihung = new Waypoint("ktl_ch", "彩虹");
const MTR_ktl_diamondhill = MTR_tml_diamondhill;
const MTR_ktl_wongtaisin = new Waypoint("ktl_wts", "黃大仙");
const MTR_ktl_lokfu = new Waypoint("ktl_lf", "樂富");
const MTR_ktl_kowloontong = MTR_erl_kowloontong;
const MTR_ktl_shekkipmei = new Waypoint("ktl_skm", "石硤尾");
const MTR_ktl_princeedward = new Waypoint("ktl_pe", "太子");
const MTR_ktl_mongkok = new Waypoint("ktl_mk", "旺角").addNeighbor(MTR_erl_mongkokeast);
const MTR_ktl_yaumatei = new Waypoint("ktl_ymt", "油麻地");
const MTR_ktl_homantin = MTR_tml_homantin;
const MTR_ktl_whampoa = new Waypoint("ktl_wham", "黃埔");

// 荃灣線
const MTR_twl_tsuenking = new Waypoint("twl_tk", "荃景");
const MTR_twl_tsuenwan = new Waypoint("twl_tw", "荃灣");
const MTR_twl_taiwohau = new Waypoint("twl_twh", "大窩口");
const MTR_twl_kwaihing = new Waypoint("twl_kh", "葵興");
const MTR_twl_kwaifong = new Waypoint("twl_kf", "葵芳");
const MTR_twl_laiking = new Waypoint("twl_lk", "荔景");
const MTR_twl_meifoo = MTR_tml_meifoo;
const MTR_twl_laichikok = new Waypoint("twl_lck", "荔枝角");
const MTR_twl_cheungshawan = new Waypoint("twl_csw", "長沙灣");
const MTR_twl_shamshuipo = new Waypoint("twl_ssp", "深水埗");
const MTR_twl_princeedward = MTR_ktl_princeedward;
const MTR_twl_mongkok = MTR_ktl_mongkok;
const MTR_twl_yaumatei = MTR_ktl_yaumatei;
const MTR_twl_jordan = new Waypoint("twl_jor", "佐敦");
const MTR_twl_tsimshatsui = new Waypoint("twl_tst", "尖沙咀");
const MTR_twl_admiralty = MTR_erl_admiralty;
const MTR_twl_central = new Waypoint("twl_cen", "中環");

// 港島線
const MTR_ill_kennedytown = new Waypoint("ill_knd", "堅尼地城");
const MTR_ill_hku = new Waypoint("ill_hku", "香港大學");
const MTR_ill_saiyingpun = new Waypoint("ill_syp", "西營盤");
const MTR_ill_sheungwan = new Waypoint("ill_sw", "上環");
const MTR_ill_central = MTR_twl_central;
const MTR_ill_admiralty = MTR_twl_admiralty;
const MTR_ill_wanchai = new Waypoint("ill_wc", "灣仔");
const MTR_ill_causewaybay = new Waypoint("ill_cwb", "銅鑼灣");
const MTR_ill_tinhau = new Waypoint("ill_th", "天后");
const MTR_ill_fortresshill = new Waypoint("ill_fth", "炮台山");
const MTR_ill_northpoint = new Waypoint("ill_np", "北角");
const MTR_ill_quarrybay = new Waypoint("ill_qwb", "鰂魚涌");
const MTR_ill_taikoo = new Waypoint("ill_tk", "太古");
const MTR_ill_saiwanho = new Waypoint("ill_swh", "西灣河");
const MTR_ill_saukeiwan = new Waypoint("ill_skw", "筲箕灣");
const MTR_ill_hengfachuen = new Waypoint("ill_hfc", "杏花邨");
const MTR_ill_chaiwan = new Waypoint("ill_cw", "柴灣");

// 將軍澳線
const MTR_tko_polam = new Waypoint("tko_pl", "寶琳");
const MTR_tko_hanghau = new Waypoint("tko_hh", "坑口");
const MTR_tko_tseungkwano = new Waypoint("tko_tko", "將軍澳");
const MTR_tko_lohaspark = new Waypoint("tko_lohas", "康城");
const MTR_tko_tiukengleng = MTR_ktl_tiukengleng;
const MTR_tko_yautong = MTR_ktl_yautong;
const MTR_tko_quarrybay = MTR_ill_quarrybay;
const MTR_tko_northpoint = MTR_ill_northpoint;

// 東涌線
const MTR_tcl_tungchung = new Waypoint("tcl_tc", "東涌");
const MTR_tcl_sunnybay = new Waypoint("tcl_sb", "欣澳");
const MTR_tcl_tsingyi = new Waypoint("tcl_ty", "青衣");
const MTR_tcl_laiking = MTR_twl_laiking;
const MTR_tcl_namcheong = MTR_tml_namcheong;
const MTR_tcl_olympic = new Waypoint("tcl_oly", "奧運");
const MTR_tcl_kowloon = new Waypoint("tcl_kln", "九龍");
const MTR_tcl_hongkong = new Waypoint("tcl_hk", "香港");

// 機場快線
const MTR_aex_asiaworldexpo = new Waypoint("aex_awx", "博覽館");
const MTR_aex_airport = new Waypoint("aex_air", "機場");
const MTR_aex_tsingyi = MTR_tcl_tsingyi;
const MTR_aex_kowloon = MTR_tcl_kowloon;
const MTR_aex_hongkong = MTR_tcl_hongkong;

// 南港東
const MTR_seil_southhoriz = new Waypoint("seil_sh", "海怡半島");
const MTR_seil_leitung = new Waypoint("seil_lt", "利東");
const MTR_seil_wongchukhang = new Waypoint("seil_wch", "黃竹坑");
const MTR_seil_oceanpark = new Waypoint("seil_op", "海洋公園");
const MTR_seil_admiralty = MTR_ill_admiralty;

// 南港西
const MTR_swil_wongchukhang = MTR_seil_wongchukhang;
const MTR_swil_aberdeen = new Waypoint("swil_abd", "香港仔");
const MTR_swil_tinwan = new Waypoint("swil_tw", "田灣");
const MTR_swil_wahfoo = new Waypoint("swil_wf", "華富");
const MTR_swil_cyberport = new Waypoint("swil_cbp", "數碼港");
const MTR_swil_queenmary = new Waypoint("swil_qmh", "瑪麗醫院");
const MTR_swil_hku = MTR_ill_hku;

// 輕鐵
const KCR_lrt_1_samshing = new Waypoint("lrt_ss", "1區 三聖");
const KCR_lrt_2_tuenmun = new Waypoint("lrt_ss", "2區 屯門站").addNeighbor(MTR_tml_tuenmun);
const KCR_lrt_2_puito = new Waypoint("lrt_pt", "2區 杯渡");
const KCR_lrt_2_primeview = new Waypoint("lrt_pv", "2區 景峰");
const KCR_lrt_3_siuhong = new Waypoint("lrt_sh", "3區 兆康").addNeighbor(MTR_tml_siuhong);
const KCR_lrt_4_tinshuiwai = new Waypoint("lrt_tsw", "4區 天水圍站").addNeighbor(MTR_tml_tinshuiwai);
const KCR_lrt_4_tintsz = new Waypoint("lrt_tz", "4區 天慈").addNeighbor(MTR_tml_tinshuiwai);
const KCR_lrt_4_tinshui = new Waypoint("lrt_ts", "4區 天瑞");
const KCR_lrt_4_tinwing = new Waypoint("lrt_tw", "4區 天榮");
const KCR_lrt_5A_tinyat = new Waypoint("lrt_ty", "5A區 天逸");
const KCR_lrt_5_fungninroad = new Waypoint("lrt_fnr", "5區 豐年路");
const KCR_lrt_5_yuenlong = new Waypoint("lrt_yl", "5區 元朗站").addNeighbor(MTR_tml_yuenlong);

const KCR_lrt_1_ALL = [KCR_lrt_1_samshing];
const KCR_lrt_2_ALL = [KCR_lrt_2_tuenmun, KCR_lrt_2_puito, KCR_lrt_2_primeview];
const KCR_lrt_3_ALL = [KCR_lrt_3_siuhong];
const KCR_lrt_4_ALL = [KCR_lrt_4_tinshuiwai, KCR_lrt_4_tintsz, KCR_lrt_4_tinshui, KCR_lrt_4_tinwing];
const KCR_lrt_5_ALL = [KCR_lrt_5_fungninroad, KCR_lrt_5_yuenlong];
const KCR_lrt_5A_ALL = [KCR_lrt_5A_tinyat];

// 其他
const MTR_hsr_westkowloon = new Waypoint("hsr_wkl", "西九龍").addNeighbor(MTR_tml_austin).addNeighbor(MTR_tcl_kowloon);

// Other (internal) waypoints for road marking
const TaiPoRoad_KowloonReservoir = new Waypoint("tpr_reservoir", "九龍水塘").markAttributes("i");
const TaiPoRoad_ShatinHeights = new Waypoint("tpr_shatinheights", "沙田嶺").markAttributes("i");
const TaiPoRoad_MeiLam = new Waypoint("tpr_ml", "美林").markAttributes("x");
const TaiPoRoad_Shatin = new Waypoint("tpr_st", "大埔公路 (沙田)").markAttributes("i");
const TaiPoRoad_CUHK = new Waypoint("tpr_cuhk", "香港中文大學").addNeighbor(MTR_erl_university);
const TaiPoRoad_TaiPoKau = new Waypoint("tpr_tpk", "大埔滘").markAttributes("i");
const LionRockTunnel = new Waypoint("lionrock", "獅子山隧道").markAttributes("i");
const LionRockTunnel_Interchange = new Waypoint("lionrock_i", "獅隧轉車站").markAttributes("x");
const JatMinEstate = new Waypoint("yatming", "乙明邨").addNeighbor(MTR_mos_shatinwai);
/**
 * Please use ChoiHungBusTerminus instead.
 */
const PikHoiHouse = new Waypoint("pikhoi", "碧海樓").addNeighbor(MTR_ktl_choihung);
const RoyalAscot = new Waypoint("royalascot", "駿景園");
const CheungShueTan = new Waypoint("cheungshuetan", "樟樹灘");
const PakShekKok = new Waypoint("pakshekkok", "白石角");
const ShatinSeafood = new Waypoint("stseafood", "沙田海鮮舫");
const LeeOnEstate = new Waypoint("leeon", "利安").addNeighbor(MTR_mos_wukaisha);
const BelairGardens = new Waypoint("belairgardens", "富豪花園");
const YuenWo = new Waypoint("yuenwo", "瀝源邨/禾輋邨");
const LekYuenEstate = new Waypoint("lekyuenestate", "瀝源邨");
const HengHongStreet = new Waypoint("henghong", "恆康街").addNeighbor(MTR_mos_hengon);
const MaOnShanRoad = new Waypoint("mosroad", "馬鞍山路");
const WahMingTerminus = new Waypoint("wahming", "華明總站").markAttributes("s");
const WanTauKokLane = new Waypoint("wtklane", "運頭角里").markAttributes("x");
const KwongFukRoad = new Waypoint("kwongfukroad", "廣福路").markAttributes("x");
// It is a normal station, yet also an interchange station.
const KwongFukEstate = new Waypoint("kwongfukestate", "廣福邨").markAttributes("s").addNeighbor(MTR_erl_taipomarket);
const LeiMukShueEstate = new Waypoint("leimukshue", "梨木樹邨/石圍角");
const NinaTowers = new Waypoint("nina", "如心廣場").addNeighbor(MTR_tml_tsuenwanwest);
const ChungOnStreet = new Waypoint("chungonstreet", "眾安街").addNeighbor(MTR_twl_tsuenwan);
const ShingMunTunnel_Interchange_East = new Waypoint("smt_x_east", "城隧轉車站").markAttributes("x");
const ShingMunTunnel_Interchange_West = new Waypoint("smt_x_west", "城隧轉車站").markAttributes("x");
const ShingMunTunnel = new Waypoint("smtActual", "城門隧道").markAttributes("i");
const ShingMunTunnelHighway = new Waypoint("smt_highway", "").markAttributes("i");
const ShatinTownCenter = new Waypoint("stcenter", "沙田市中心").addNeighbor(MTR_erl_shatin);
const ShatinTownHall = new Waypoint("sttownhall", "沙田大會堂").addNeighbor(MTR_erl_shatin).addNeighbor(ShatinTownCenter);
const FoTanTsuen = new Waypoint("fotanvillage", "火炭村").addNeighbor(MTR_erl_fotan);
const ChevalierGarden = new Waypoint("chevalier", "富安花園").addNeighbor(MTR_mos_taishuihang);
const KamYingCourt = new Waypoint("kamyingcourt", "錦英苑").addNeighbor(LeeOnEstate);
const ToloHighway_TaiPo = new Waypoint("tlh_taipo", "吐露港公路 (大埔)").markAttributes("i");
const FanlingHighway_Interchange = new Waypoint("flh_interchange", "粉嶺公路轉車站").markAttributes("i");
const EastHarbourTunnel = new Waypoint("eht", "東區海底隧道").markAttributes("i");
const EastHarbourTunnel_Interchange = new Waypoint("eht_interchange", "東隧轉車站").markAttributes("x");
const OldTatesTunnel = new Waypoint("ott", "大老山隧道").markAttributes("i");
const OldTatesTunnel_Interchange = new Waypoint("ott_interchange", "大老山轉車站").markAttributes("x");
const KowloonHospital = new Waypoint("klhospital", "九龍醫院");
const FanlingHighway = new Waypoint("fanlinghw", "").markAttributes("i");
const ShatinHeightsTunnel = new Waypoint("sthtunnel", "").markAttributes("i");
const EaglesNestTunnel = new Waypoint("entunnel", "").markAttributes("i");
const TsingShaInterchange = new Waypoint("ts-interchange", "青沙轉車站").markAttributes("x");
const WestKowloonHighway = new Waypoint("wkhighway", "").markAttributes("i");
const LionRockTunnelHighway = new Waypoint("lrthighway", "").markAttributes("i");
const TaiPoRoad_HongLokYuen = new Waypoint("tpr_honglokyuen", "").markAttributes("i");
const TaiPoRoad_KiuTau = new Waypoint("tpr_kiutau", "").markAttributes("i");
const TaiPoRoad_Main = new Waypoint("tpr_main", "").markAttributes("i");
const ShekTongTsui = new Waypoint("shektongtsui", "");
const ConnaughtRoadWest_Stop = new Waypoint("cnrw_stop", "").addNeighbor(MTR_ill_saiyingpun);
const PrincessMargaretRoad = new Waypoint("pmroad", "").markAttributes("i");
const CrossHarbourTunnel_Interchange = new Waypoint("cht_interchange", "紅隧轉車站").markAttributes("x").addNeighbor(MTR_erl_hunghom);
const CrossHarbourTunnel = new Waypoint("cht_actual", "").markAttributes("i");
const EasternCorridor = new Waypoint("east_corri", "").markAttributes("i");
const AberdeenTunnel_Interchange = new Waypoint("abdt_interchange", "香港仔隧道").markAttributes("x").addNeighbor(MTR_seil_oceanpark);
const AberdeenTunnel = new Waypoint("abdt_actual", "").markAttributes("i");
const WestHarbourTunnel_Interchange = new Waypoint("wht_x", "").markAttributes("x").addNeighbor(MTR_tcl_kowloon);
const WestHarbourTunnel = new Waypoint("wht_actual", "").markAttributes("i");
const NgaCheungRoad_WHTX = new Waypoint("wht_x_ngacheung", "").markAttributes("x").addNeighbor(MTR_tcl_kowloon).addNeighbor(WestHarbourTunnel_Interchange);
const TY_CheungOnEstate = new Waypoint("ty_cheungon", "青衣長安邨");
const TsingYiFerryPier = new Waypoint("", "");
const ToloHighway_Coastal = new Waypoint("", "").markAttributes("i");
const KowloonBayFlyover = new Waypoint("", "").markAttributes("i");
const KwunTongBypass = new Waypoint("", "").markAttributes("i");
const HangSengUniversity = new Waypoint("", "");
const TseungKwanOTunnel_Interchange = new Waypoint("tkot_x", "").markAttributes("x");
const TseungKwanOTunnel = new Waypoint("tkot_actual", "").markAttributes("i");
const Anderson = new Waypoint("anderson", "");
const SauMauPing = new Waypoint("", "");
const KwunTongFerryPier = new Waypoint("", "");
const PE_RegalOrientalHotel = new Waypoint("", "富豪東方酒店");
const MongKokFlowerMarket = new Waypoint("", "").addNeighbor(MTR_erl_mongkokeast);
const SunPoKong = new Waypoint("", "").addNeighbor(MTR_ktl_diamondhill);
const BoundaryPrince = new Waypoint("", "");
const LaiKingChokePoint = new Waypoint("", "").markAttributes("i");
const TsuenWanRoad = new Waypoint("", "").markAttributes("i");
const ClagueGardenEstate = new Waypoint("", "").addNeighbor(MTR_tml_tsuenwanwest);
const WanChaiFerryPier = new Waypoint("", "").addNeighbor(MTR_erl_exhibition);
const ChaiWanRoad = new Waypoint("", "");
const ShuiChuenO = new Waypoint("", "");
const ShatinHospital = new Waypoint("", "");
const KwaiChungEstate = new Waypoint("", "");
const YiPeiChuen = new Waypoint("", "");
const CheungPeiShanRoad = new Waypoint("", "").markAttributes("i");
const BelvedereGarden = new Waypoint("", "");
const TuenMunHighway_YauKomTau = new Waypoint("", "").markAttributes("i");
const TuenMunHighway_TsingLungTau = new Waypoint("", "").markAttributes("i");
const TuenMunHighway_InterchangeEast = new Waypoint("", "").markAttributes("x");
const TuenMunHighway_InterchangeWest = new Waypoint("", "").markAttributes("x");
const TuenMunHighway_SoKwunWat = new Waypoint("", "").markAttributes("i");
const LingNamUniversity = new Waypoint("", "");
const KwongFaiWai = new Waypoint("", "");
const HappyValley = new Waypoint("", "");
const PokFuLam_Actual = new Waypoint("", "");
const HungNgokHouse_ChoiHung = new Waypoint("", "").addNeighbor(MTR_ktl_choihung);
const SunTinWai = new Waypoint("", "");
const ChoiHungBusTerminus = new Waypoint("", "");
const Moreton_CausewayBay = new Waypoint("", "");
const YiuTungEstate = new Waypoint("", "");
const KowloonBayCommercial = new Waypoint("", "");
const WestWood_HKU = new Waypoint("", "").addNeighbor(ShekTongTsui);
const TaiPo_LamChuen = new Waypoint("", "");
const Rural_Kadoorie = new Waypoint("", "");
const KSR_SheugnChuen = new Waypoint("", "");
const KSR_PatHeung = new Waypoint("", "");
const KSR_KoPoTsuen = new Waypoint("", "");
const YL_PokOiHospital = new Waypoint("", "");
const TaiLamTunnel = new Waypoint("", "").markAttributes("i");
const TaiLamTunnel_Interchange = new Waypoint("", "").markAttributes("x");
const TsingLongHighway = new Waypoint("", "").markAttributes("i");
const YuenLongHighway = new Waypoint("", "").markAttributes("i");
const LongTinRoad = new Waypoint("", "").markAttributes("i");
const ChukYuen = new Waypoint("", "");
const ChingCheungRoad_BeaconHill = new Waypoint("", "");
const ChingCheungRoad_Other = new Waypoint("", "");
const KowloonTongCornwall = new Waypoint("", "");
const UpperKennedyTown = new Waypoint("", "");
const SoUkEstate = new Waypoint("", "");
const OuterWahFoo = new Waypoint("", "");
const ToKwaWanFlyover = new Waypoint("", "").markAttributes("i");
const KaiTakTunnel = new Waypoint("", "").markAttributes("i");
const HKITCE = new Waypoint("", "").markAttributes("x");
const TsuenWanMarket = new Waypoint("", "").addNeighbor(ChungOnStreet).addNeighbor(MTR_twl_tsuenwan);
const TsuenWanTownHall = new Waypoint("", "");
const SciencePark = new Waypoint("", "");
const PE_ChoiHung = new Waypoint("", "麗晶花園/坪石邨");
const PE_SunPoKong = new Waypoint("", "");
const Airport_CathayPacificCity = new Waypoint("", "");
const LantauLink_SiuHoWan = new Waypoint("", "").markAttributes("i");
const LantauLink_YamO = new Waypoint("", "").markAttributes("i");
const LantauLink_Interchange = new Waypoint("", "");
const LantauLink_TsingMaBridge = new Waypoint("", "").markAttributes("i");
const TY_TsingYiWest = new Waypoint("", "");
const TW_TexacoFlyover = new Waypoint("", "");
const TsingYiNorthHighway = new Waypoint("", "");
const Airport_HKZHMCBridgePort = new Waypoint("", "");
const TC_YatTungEstate = new Waypoint("", "");

// Code assist-generated by Excel

const TsuiLam = new Waypoint("hk18_tl", "翠林").markAttributes("");
const LantauLinkTollPlaza = new Waypoint("hk18_lltp", "青馬收費廣場").markAttributes("i");
const HKUST = new Waypoint("hk18_ust", "香港科技大學").markAttributes("");
const DiscoveryPark = new Waypoint("hk18_dp", "愉景新城").markAttributes("");
const TsingLunTau = new Waypoint("hk18_tlt", "青龍頭").markAttributes("");
const ShekWaiKok = new Waypoint("hk18_swk", "石圍角").markAttributes("");
const Bayview = new Waypoint("hk18_bv", "灣景花園").markAttributes("");
const RiveraGarden = new Waypoint("hk18_rg", "海濱花園").markAttributes("");
const LeiMukShue = new Waypoint("hk18_lms", "梨木樹").markAttributes("");
const TaiMoShan = new Waypoint("hk18_tms", "大帽山").markAttributes("");
const TsuenKingCircuit = new Waypoint("hk18_tkc", "荃景圍").markAttributes("");
const CheungChing = new Waypoint("hk18_cc", "長青").markAttributes("");
const ShekLei = new Waypoint("hk18_ktsl", "石籬").markAttributes("");
const CheungHang = new Waypoint("hk18_ch", "長亨").markAttributes("");
const GreenfieldGarden = new Waypoint("hk18_gfg", "翠怡花園").markAttributes("");
const KwaiShing = new Waypoint("hk18_ks", "葵盛").markAttributes("");
const ContainerTerminal = new Waypoint("hk18_ct", "貨櫃碼頭").markAttributes("");
const YauOi = new Waypoint("hk18_yo", "友愛").markAttributes("");
const TaiHing = new Waypoint("hk18_tmth", "大興").markAttributes("");
const LingNanUniversity = new Waypoint("hk18_lnu", "嶺南大學").markAttributes("");
const SiuLam = new Waypoint("hk18_sl", "小欖").markAttributes("");
const ButterflyEstate = new Waypoint("hk18_be", "蝴蝶邨").markAttributes("");
const LeungKing = new Waypoint("hk18_lk", "良景").markAttributes("");
const SanHui = new Waypoint("hk18_sh", "新墟").markAttributes("");
const ShapPatHeung = new Waypoint("hk18_sph", "十八鄉").markAttributes("");
const PingShan = new Waypoint("hk18_ps", "屏山").markAttributes("");
const SanTin = new Waypoint("hk18_st", "新田").markAttributes("");
const KamTin = new Waypoint("hk18_kt", "錦田").markAttributes("");
const TinShau = new Waypoint("hk18_tshau", "天秀路公園").markAttributes("");
const TinPak = new Waypoint("hk18_tp", "天柏").markAttributes("");

// Line-Arrays

/**
 * An array containing all East Rail Line waypoints.
 */
/**
 * All East Rail Line stations
 */
const MTR_ERL_ALL = [MTR_erl_admiralty, MTR_erl_exhibition, MTR_erl_hunghom, MTR_erl_mongkokeast, MTR_erl_kowloontong, MTR_erl_taiwai, MTR_erl_shatin, MTR_erl_fotan, MTR_erl_university, MTR_erl_taipomarket, MTR_erl_taiwo, MTR_erl_fanling, MTR_erl_sheungshui];
/**
 * All (former) Ma On Shan Line stations
 */
const MTR_MOS_ALL = [MTR_mos_wukaisha, MTR_mos_maonshan, MTR_mos_hengon, MTR_mos_taishuihang, MTR_mos_shekmun, MTR_mos_cityone, MTR_mos_shatinwai, MTR_mos_chekungtemple, MTR_mos_taiwai];
/**
 * All Tuen Ma Line (East) stations
 */
const MTR_TMLE_ALL = MTR_MOS_ALL.concat(MTR_tml_hinkeng, MTR_tml_diamondhill, MTR_tml_kaitak, MTR_tml_sungwongtoi, MTR_tml_tokwawan, MTR_tml_homantin, MTR_tml_hunghom);
/**
 * All Tuen Ma Line // West Rail Line stations
 */
const MTR_TMLW_ALL = [MTR_tml_tuenmun, MTR_tml_siuhong, MTR_tml_hungshuikiu, MTR_tml_tinshuiwai, MTR_tml_longping, MTR_tml_yuenlong, MTR_tml_kamsheungroad, MTR_tml_tsuenwanwest, MTR_tml_meifoo, MTR_tml_namcheong, MTR_tml_austin, MTR_tml_easttsimshatsui, MTR_tml_hunghom];
/**
 * All Kwun Tong Line stations
 */
const MTR_KTL_ALL = [MTR_ktl_tiukengleng, MTR_ktl_yautong, MTR_ktl_lamtin, MTR_ktl_kwuntong, MTR_ktl_ngautaukok, MTR_ktl_kowloonbay, MTR_ktl_choihung, MTR_ktl_diamondhill, MTR_ktl_wongtaisin, MTR_ktl_lokfu, MTR_ktl_kowloontong, MTR_ktl_shekkipmei, MTR_ktl_princeedward, MTR_ktl_mongkok, MTR_ktl_yaumatei, MTR_ktl_homantin, MTR_ktl_whampoa];
/**
 * All Tsuen Wan Line stations
 */
const MTR_TWL_ALL = [MTR_twl_tsuenking, MTR_twl_tsuenwan, MTR_twl_taiwohau, MTR_twl_kwaihing, MTR_twl_kwaifong, MTR_twl_laiking, MTR_twl_meifoo, MTR_twl_laichikok, MTR_twl_cheungshawan, MTR_twl_shamshuipo, MTR_twl_princeedward, MTR_twl_mongkok, MTR_twl_yaumatei, MTR_twl_jordan, MTR_twl_tsimshatsui, MTR_twl_admiralty, MTR_twl_central];
/**
 * All Island Line stations
 */
const MTR_ILL_ALL = [MTR_ill_kennedytown, MTR_ill_hku, MTR_ill_saiyingpun, MTR_ill_sheungwan, MTR_ill_central, MTR_ill_admiralty, MTR_ill_wanchai, MTR_ill_causewaybay, MTR_ill_tinhau, MTR_ill_fortresshill, MTR_ill_northpoint, MTR_ill_quarrybay, MTR_ill_taikoo, MTR_ill_saiwanho, MTR_ill_saukeiwan, MTR_ill_hengfachuen, MTR_ill_chaiwan];
/**
 * All Tung Chung Line stations
 */
const MTR_TCL_ALL = [MTR_tcl_tungchung, MTR_tcl_sunnybay, MTR_tcl_tsingyi, MTR_tcl_laiking, MTR_tcl_namcheong, MTR_tcl_olympic, MTR_tcl_kowloon, MTR_tcl_hongkong];
/**
* All Tseung Kwan O Line stations
*/
const MTR_TKO_ALL = [MTR_tko_polam, MTR_tko_hanghau, MTR_tko_tseungkwano, MTR_tko_lohaspark, MTR_tko_tiukengleng, MTR_tko_yautong, MTR_tko_quarrybay, MTR_tko_northpoint];
/**
 * All Airport Express stations
 */
const MTR_AEX_ALL = [MTR_aex_asiaworldexpo, MTR_aex_airport, MTR_aex_tsingyi, MTR_aex_kowloon, MTR_aex_hongkong];
/**
 * All South Island (East) Line stations
 */
const MTR_SEIL_ALL = [MTR_seil_southhoriz, MTR_seil_leitung, MTR_seil_wongchukhang, MTR_seil_oceanpark, MTR_seil_admiralty];
/**
 * All South Island (West) Line stations
 */
const MTR_SWIL_ALL = [MTR_swil_wongchukhang, MTR_swil_aberdeen, MTR_swil_tinwan, MTR_swil_wahfoo, MTR_swil_cyberport, MTR_swil_queenmary, MTR_swil_hku];
/**
 * All Light Rail stops
 */
const KCR_LRT_ALL = [].concat(KCR_lrt_1_ALL, KCR_lrt_2_ALL, KCR_lrt_3_ALL, KCR_lrt_4_ALL, KCR_lrt_5_ALL, KCR_lrt_5A_ALL);

function obtainAllMTRWaypoints(): Array<Waypoint>
{
    return [].concat(MTR_ERL_ALL, MTR_TMLE_ALL, MTR_TMLW_ALL, MTR_KTL_ALL, MTR_TWL_ALL, MTR_ILL_ALL, MTR_TCL_ALL, MTR_TKO_ALL, MTR_SEIL_ALL, MTR_SWIL_ALL, KCR_LRT_ALL);
}