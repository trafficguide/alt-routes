var endpoint_TrafficAnalytics = "https://api.github.com/repos/trafficguide/alt-routes/traffic/views";
function obtainTrafficAnalytics(printoutArea) {
    printoutArea.innerHTML = "正在獲取網頁流量資訊...";
    makeHttpRequest(endpoint_TrafficAnalytics)
        .then(function (response) {
        var processedJSON = JSON.parse(response);
        var totalViews = processedJSON["count"];
        var uniqueVisitors = processedJSON["uniques"];
        var message = "自從上兩個星期一，本網頁共服務 ";
        message += uniqueVisitors;
        message += " 個不同的訪客，訪客人次為 ";
        message += totalViews;
        message += "。";
        printoutArea.innerHTML = message;
    })["catch"](function (error) {
        var message = "未能取得網頁流量資訊：\n";
        message += error;
        printoutArea.innerHTML = message;
    });
}
