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
        cachedInterchangeRules.push(new Interchange([KMB_72_SOUTH], [KMB_81_SOUTH], LekYuenEstate).setEffect(new XEffect_Reduction(6.7)));
        cachedInterchangeRules.push(new Interchange([KMB_81_NORTH], [KMB_72_NORTH], ShatinTownCenter).setEffect(new XEffect_Reduction(8.8)));
        // Shatin Center Interchange Scheme
        cachedInterchangeRules.push(new Interchange([KMB_81K_SOUTH, KMB_88K_SOUTH], [KMB_47A_EAST, KMB_47A_WEST, KMB_48X_EAST, KMB_48X_WEST, KMB_49X_EAST, KMB_49X_WEST, KMB_288], ShatinTownCenter).setEffect(new XEffect_Reduction(4.2)));
        // Lion Rock Interchange Scheme
        cachedInterchangeRules.push(new Interchange(XScheme_LionRock, XScheme_LionRock, LionRockTunnel_Interchange).setEffect(new XEffect_Reduction(4.2)));
        // Shing Mun Interchange Scheme
        // East-bound rules
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_46X_NEGATIVE, KMB_47X_EAST, KMB_48X_EAST, KMB_49X_EAST], ShingMunTunnel_Interchange_East).setEffect(new XEffect_Free()));
        // West-bound rules
        cachedInterchangeRules.push(new Interchange([WILDCARD_ANYLINE], [KMB_46X_POSITIVE, KMB_47X_WEST, KMB_48X_WEST, KMB_49X_WEST], ShingMunTunnel_Interchange_West).setEffect(new XEffect_Free()));
    }
    return cachedInterchangeRules;
}
