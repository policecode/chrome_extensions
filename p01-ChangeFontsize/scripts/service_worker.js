// Sự kiện click vào Bg của extension trên thanh công cụ
function handleTabsEvent() {
    chrome.action.onClicked.addListener(function (tab) {
        console.log(tab);
    })
}
