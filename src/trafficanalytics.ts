const endpoint_TrafficAnalytics = "https://api.github.com/repos/Vectorial1024/alt-routes/traffic/views";

function obtainTrafficAnalytics(printoutArea: HTMLDivElement)
{
    printoutArea.innerHTML = "正在獲取網頁流量資訊...";
    makeHttpRequest(endpoint_TrafficAnalytics)
    .then(response => {
        let processedJSON = JSON.parse(response);
        let totalViews = processedJSON["count"];
        let uniqueVisitors = processedJSON["uniques"];
        let message = "自從上兩個星期一，本網頁共服務 ";
        message += uniqueVisitors;
        message += " 個不同的訪客，訪客人次為 ";
        message += totalViews;
        message += "。";
        printoutArea.innerHTML = message;
    })
    .catch(error => {
        let message = "未能取得網頁流量資訊：\n";
        message += error;
        printoutArea.innerHTML = message;
    });
}