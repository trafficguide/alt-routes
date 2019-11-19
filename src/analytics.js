/**
 * Sends a signal to the hitcounter server to count this visit,
 * and to wrap the hit-count inside a nicely-generated shields.io badge.
 *
 * @param hitShieldElm The element where the generated shield should appear in.
 */
function prepareHitsShield(hitShieldElm) {
    // Constant strings for url formulation
    var shieldIO_Endpoint = "https://img.shields.io/badge/";
    var shieldLabelWithHyphen = "累計瀏覽量-";
    var shieldMessage_Errored = "炒咗車...-";
    // Base URL
    var targetURL = "https://hitcounter.pythonanywhere.com/count";
    // Append our URL like this as if we are sending an AJAX request.
    // Gotta keep this Typescript pure, man.
    // Our URL is constant, as in before.
    targetURL += "?url=https://trafficguide.github.io/alt-routes/";
    makeHttpRequest(targetURL)
        .then(function (response) {
        // Successfully obtained hit count; now plug it into the shields.io service!
        hitShieldElm.src = shieldIO_Endpoint + shieldLabelWithHyphen + response + "-yellow";
    })["catch"](function (error) {
        // Some error occured; fall back to "default" shield
        hitShieldElm.src = shieldIO_Endpoint + shieldLabelWithHyphen + shieldMessage_Errored + "-red";
    });
}
