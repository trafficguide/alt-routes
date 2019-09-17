/**
 * Returns a string indicating the version of the web-app.
 */
function getVersionString(): string
{
    return "Version: 15 September 2019";
}

function getTableHeading()
{
    return "<table><tr><th style='width: 40%; min-width:280px'>路線</th><th style='width: 40%; min-width:280px'>轉乘優惠</th><th style='width: 20%; min-width:140px'>備註</th></tr>";
}

function getTableClosing()
{
    return "</table>";
}

/**
 * Resets the table displaying results to display no results.
 * @param resultTableElm The HTML Element where the table should be displayed. This should be constant.
 */
function clearResultDisplay(resultTableElm: HTMLElement)
{
    resultTableElm.innerHTML = getTableHeading() + getTableClosing();
}

/**
 * Prints some stats about the current database onto the specified Element.
 * @param statsDisplayElm 
 */
function prepareDatabaseStats(statsDisplayElm: HTMLElement)
{
    let string = "資料庫共存有 ";
    string += HK18_ALL_LINES.length;
    string += " 項路線資料。";
    string += " (<a href='javascript: displayDetailedStats();'>路線分類統計</a>)";
    statsDisplayElm.innerHTML = string;
}

/**
 * Displays detailed stats of the database in the form of an alert box.
 */
function displayDetailedStats()
{
    let stats = "路線統計：\n";
    stats += lineType_WALK.getValue() + "：" + WALK_HK18_ALL.length + "\n";
    stats += lineType_KMB.getValue() + "：" + KMB_PURE_HK18_ALL.length + "\n";
    stats += lineType_GMB_NT.getValue() + "：" + GMB_HK18_ALL.length + "\n";
    stats += lineType_HARBOUR.getValue() + "：" + CHT_HK18_ALL.length + "\n";
    stats += "\n註：每一項資料代表一方向的、由起至訖的行車；循環線只計為一項。";
    alert(stats);
}

/**
 * Conducts a path search using the following given paraeters.
 * @param fromSelector The MTRSelector of the starting location
 * @param toSelector The MTRSelector of the ending location
 * @param generalFeedbackElm The Element that displays basic/general feedback (e.g. invalid input, have results, etc.)
 * @param directLinesFeedbackElm The Element that displays how many direct paths are found
 * @param interchangeLinesFeedbackElm The Element that displays how many interchange paths are found
 * @param resultTableElm The Element where the results will be displayed as a table.
 */
function conductSearch(
    fromSelector: MTRSelector,
    toSelector: MTRSelector,
    generalFeedbackElm: HTMLElement,
    directLinesFeedbackElm: HTMLElement,
    interchangeLinesFeedbackElm: HTMLElement,
    resultTableElm: HTMLElement)
{
    // Clear everything first, so that the flow is easier to follow.
    generalFeedbackElm.innerHTML = "";
    directLinesFeedbackElm.innerHTML = "";
    interchangeLinesFeedbackElm.innerHTML = "";
    clearResultDisplay(resultTableElm);

    if (!fromSelector.selectionIsValid() || !toSelector.selectionIsValid())
    {
        // Incomplete information! Cannot compute.
        generalFeedbackElm.innerHTML = "查找參數不完整。查找無效。";
        return;
    }
    else if (fromSelector.getSelectionID() == toSelector.getSelectionID())
    {
        // Same location! No need to search.
        generalFeedbackElm.innerHTML = "起訖兩點相同，無須展示任何資料。";
        return;
    }
    
    // The actual search.
    let fromStation = fromSelector.calculateSelectedStation();
    let toStation = toSelector.calculateSelectedStation();

    let pathfindingResults = findPathsBetween(fromStation, toStation);

    // Printing the stats
    let generalFeedbackStr = "現正展示由 ";
    generalFeedbackStr += fromSelector.lineDropdown.selectedOptions[0].text;
    generalFeedbackStr += " ";
    generalFeedbackStr += fromSelector.stationDropdown.selectedOptions[0].text;
    generalFeedbackStr += " 往 ";
    generalFeedbackStr += toSelector.lineDropdown.selectedOptions[0].text;
    generalFeedbackStr += " ";
    generalFeedbackStr += toSelector.stationDropdown.selectedOptions[0].text;
    generalFeedbackStr += " 的路線建議。"
    generalFeedbackElm.innerHTML = generalFeedbackStr;

    if (results_DirectCount > 0)
    {
        directLinesFeedbackElm.innerHTML = "有 " + results_DirectCount + " 條直達路線。";
        if (results_InterchangeCount > 0)
        {
            interchangeLinesFeedbackElm.innerHTML = "同時展示 " + results_InterchangeCount + " 組可考慮的轉車組合。";
        }
        else
        {
            interchangeLinesFeedbackElm.innerHTML = "無須展示其他轉車組合。";
        }
    }
    else
    {
        directLinesFeedbackElm.innerHTML = "沒有任何直達路線。";
        if (results_InterchangeCount > 0)
        {
            interchangeLinesFeedbackElm.innerHTML = "有 " + results_InterchangeCount + " 組轉車組合。";
        }
        else
        {
            interchangeLinesFeedbackElm.innerHTML = "沒有可考慮的轉車組合。<b>請考慮使用其他交通工具</b>，包括但不限於的士。";
            return;
        }
    }

    let resultTableHTML = getTableHeading();
    // For each result:
    for (let i = 0; i < pathfindingResults.length; i++)
    {
        // 1. Print line information.
        resultTableHTML += "<tr><td>";
        let path = pathfindingResults[i];
        let connections = path.getConnections();
        for (let j = 0; j < connections.length; j++)
        {
            let connection = connections[j];
            resultTableHTML += connection.line.getHTMLLongID();
            if (j < connections.length - 1)
            {
                resultTableHTML += "<br>於 ";
                resultTableHTML += connection.line.stops[connection.endIndex].getName();
                resultTableHTML += " (或附近)轉乘<br>";
            }
        }

        // 2. Print interchange info
        resultTableHTML += "</td><td>";
        // TODO

        // 3. Print notes
        resultTableHTML += "</td><td>";
        if (connections.length == 1)
        {
            let connection = connections[0];
            if (connection.line.isCircular())
            {
                resultTableHTML += "循環線";
                if (connection.line.getNotes())
                {
                    resultTableHTML += "；";
                }
            }
            resultTableHTML += connection.line.getNotes();
        }
        else
        {
            // Each line prints their own information.
            for (let j = 0; j < connections.length; j++)
            {
                let connection = connections[j];
                // First print the line ID
                resultTableHTML += connection.line.getHTMLShortID() + "：";
                let notes = connection.line.getNotes();
                if (notes.length == 0)
                {
                    resultTableHTML += "無";
                }
                else
                {
                    resultTableHTML += notes;
                }

                if (j < connections.length - 1)
                {
                    resultTableHTML += "<br>";
                }
            }
        }

        // All is done. Close the row.
        resultTableHTML += "</td></tr>";
    }

    // All is done. CLose the table.
    resultTableHTML += getTableClosing();

    // All is ready. Flush.
    resultTableElm.innerHTML = resultTableHTML;
}