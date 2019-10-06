var endpoint_LatestCommitInfo = "https://api.github.com/repos/trafficguide/alt-routes/branches/master";
function obtainLatestCommitTimestanp(printoutArea) {
    printoutArea.innerHTML = "正在獲取查找器及資料庫版本...";
    makeHttpRequest(endpoint_LatestCommitInfo)
        .then(function (response) {
        var processedJSON = JSON.parse(response);
        var timestampDate = new Date(processedJSON["commit"]["commit"]["committer"]["date"]);
        var message = "查找器及資料庫版本為 ";
        message += timestampDate.getFullYear() + "年";
        // Strange enough, perhaps for better integration with 0-based arrays, this returns the 0-based index of the month.
        message += (timestampDate.getMonth() + 1) + "月";
        message += timestampDate.getUTCDate() + "日";
        message += " (香港時間)";
        printoutArea.innerHTML = message;
    })["catch"](function (error) {
        var message = "未能取得查找器及資料庫版本資訊：\n";
        message += error;
        printoutArea.innerHTML = message;
    });
}
