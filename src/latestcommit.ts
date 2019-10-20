const endpoint_LatestCommitInfo = "https://api.github.com/repos/trafficguide/alt-routes/branches/master";

function obtainLatestCommitTimestanp(printoutArea: HTMLDivElement)
{
    printoutArea.innerHTML = "正在獲取【探路】版本...";
    makeHttpRequest(endpoint_LatestCommitInfo)
    .then(response => {
        let processedJSON = JSON.parse(response);
        let timestampDate = new Date(processedJSON["commit"]["commit"]["committer"]["date"]);
        let message = "本【探路】(搜尋器及資料庫)版本為 ";
        message += timestampDate.getFullYear() + "年";
        // Strange enough, perhaps for better integration with 0-based arrays, this returns the 0-based index of the month.
        message += (timestampDate.getMonth() + 1) + "月";
        message += timestampDate.getUTCDate() + "日";
        message += " (香港時間)";
        printoutArea.innerHTML = message;
    })
    .catch(error => {
        let message = "未能取得【探路】版本資訊：<br>";
        message += error;
        printoutArea.innerHTML = message;
    });
}