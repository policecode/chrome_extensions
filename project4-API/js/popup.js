// let bgPage = chrome.extension.getBackgroundPage();
// let courseStr = bgPage.courseStr;
// $("#text-send").text(courseStr);
chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key == 'data') {
            $("#text-send").text(newValue);
        }
    }
  });