var searchMode_Normal;
var searchMode_Commute;
var searchMode_Nighttime;
function initializePathfinderModeDetectors() {
    searchMode_Normal = document.getElementsByName("searchMode")[0];
    searchMode_Commute = document.getElementsByName("searchMode")[1];
    searchMode_Nighttime = document.getElementsByName("searchMode")[2];
}
function findCurrentlySelectedSearchModeDisplayText() {
    if (isSearchingNormally()) {
        return "正常模式";
    }
    if (isSearchingForCommute()) {
        return "通勤模式";
    }
    return "深宵模式";
}
function isSearchingNormally() {
    return searchMode_Normal.checked;
}
function isSearchingForCommute() {
    return searchMode_Commute.checked;
}
function isSearchingForLateNight() {
    return searchMode_Nighttime.checked;
}
