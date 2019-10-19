let searchMode_Normal: HTMLInputElement;
let searchMode_Commute: HTMLInputElement;
let searchMode_Nighttime: HTMLInputElement;

function initializePathfinderModeDetectors()
{
    searchMode_Normal = document.getElementsByName("searchMode")[0] as HTMLInputElement;
    searchMode_Commute = document.getElementsByName("searchMode")[1] as HTMLInputElement;
    searchMode_Nighttime = document.getElementsByName("searchMode")[2] as HTMLInputElement;
}

function findCurrentlySelectedSearchModeDisplayText()
{
    if (isSearchingNormally())
    {
        return "正常模式";
    }
    if (isSearchingForCommute())
    {
        return "通勤模式";
    }
    return "深宵模式";
}

function isSearchingNormally(): boolean
{
    return searchMode_Normal.checked;
}

function isSearchingForCommute(): boolean
{
    return searchMode_Commute.checked;
}

function isSearchingForLateNight(): boolean
{
    return searchMode_Nighttime.checked;
}