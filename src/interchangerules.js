var cachedInterchangeRules = null;
function getInterchangeRuleForPair(fromLine, toLine) {
    var cache = getAllInterchangeRules();
    for (var i = 0; i < cache.length; i++) {
        if (cache[i].getIsRelevantWithPair(fromLine, toLine)) {
            return cache[i];
        }
    }
    return null;
}
var XScheme_LionRock = [KMB_80M_NORTH, KMB_80M_SOUTH, KMB_81C_NORTH, KMB_81C_SOUTH, KMB_87D_NORTH, KMB_87D_SOUTH];
function getAllInterchangeRules() {
    // Interchange rules can be anonymous, so this method can work pretty well.
    if (cachedInterchangeRules == null) {
        cachedInterchangeRules = new Array();
        // 72 <-> 81
        cachedInterchangeRules.push(new Interchange([KMB_72_SOUTH], [KMB_81_SOUTH], ST_LekYuenEstate).setEffect(new XEffect_Reduction(6.7)));
        cachedInterchangeRules.push(new Interchange([KMB_81_NORTH], [KMB_72_NORTH], ShatinTownCenter).setEffect(new XEffect_Reduction(8.8)));
        // Shatin Center Interchange Scheme
        cachedInterchangeRules.push(new Interchange([KMB_81K_SOUTH, KMB_88K_SOUTH], [KMB_47A_EAST, KMB_47A_WEST, KMB_48X_EAST, KMB_48X_WEST, KMB_49X_EAST, KMB_49X_WEST, KMB_288], ShatinTownCenter).setEffect(new XEffect_Reduction(4.2)));
        // Lion Rock Interchange Scheme
        cachedInterchangeRules.push(new Interchange(XScheme_LionRock, XScheme_LionRock, LionRockTunnel_Interchange).setEffect(new XEffect_Reduction(4.2)));
        // Shing Mun Interchange Scheme
        // East-bound rules
        // Rule 1: Most Shatin routes are free of charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_46X_NEGATIVE, KMB_47A_EAST, KMB_47X_EAST, KMB_48X_EAST, KMB_49X_EAST, KMB_263_EAST, KMB_269D_EAST], ShingMunTunnel_Interchange_East).setEffect(new XEffect_Free()));
        // Rule 2: Ma On Shan routes require little additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_40X_EAST, KMB_43X_EAST], ShingMunTunnel_Interchange_East).setEffect(new XEffect_Fixed(1)));
        // Rule 3: Tai Po route(s) require some additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_73X_NORTH], ShingMunTunnel_Interchange_East).setEffect(new XEffect_Fixed(2)));
        // Rule 4: North District route(s) require quite some additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_278X_NORTH], ShingMunTunnel_Interchange_East).setEffect(new XEffect_Fixed(4.9)));
        // West-bound rules
        // Rule 1: All Tsuen Wan routes are free of charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_40X_WEST, KMB_43X_WEST, KMB_46X_POSITIVE, KMB_47A_WEST, KMB_47X_WEST, KMB_48X_WEST, KMB_49X_WEST, KMB_73X_SOUTH, KMB_278X_SOUTH], ShingMunTunnel_Interchange_West).setEffect(new XEffect_Free()));
        // Rule 2: Tsing Long Tau routes require some additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [], ShingMunTunnel_Interchange_West).setEffect(new XEffect_Free()));
        // Rule 3: Tuen Mun require additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_263_WEST, KMB_263A_AFTERNOON], ShingMunTunnel_Interchange_West).setEffect(new XEffect_Fixed(6.7)));
        // Rule 4: Yuen Long require the most additional charge.
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_269D_WEST], ShingMunTunnel_Interchange_West).setEffect(new XEffect_Fixed(8.3)));
        // Tsing Sha Interchange Scheme
        // South-bound rules
        // Basic rule: pay the difference of fares, if there is any.
        // Derived rule 1: Pay up to $7.1 for 286X and 287X
        cachedInterchangeRules.push(new Interchange([KMB_249X_WEST, KMB_280X_SOUTH, KMB_286X, KMB_287X], [KMB_286X, KMB_287X], TsingShaInterchange).setEffect(new XEffect_Ceiling(7.1)));
        // Derived rule 2: Pay up to $8.9 for 280X
        cachedInterchangeRules.push(new Interchange([KMB_249X_WEST, KMB_280X_SOUTH, KMB_286X, KMB_287X], [KMB_280X_SOUTH], TsingShaInterchange).setEffect(new XEffect_Ceiling(8.9)));
        // Derived rule 3: Pay up to $9.1 for 249X
        cachedInterchangeRules.push(new Interchange([KMB_249X_WEST, KMB_280X_SOUTH, KMB_286X, KMB_287X], [KMB_249X_WEST], TsingShaInterchange).setEffect(new XEffect_Ceiling(9.1)));
    }
    return cachedInterchangeRules;
}
