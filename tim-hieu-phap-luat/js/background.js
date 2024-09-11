let contextMenuHightLight = {
  id: "contextMenuHightLight",
  title: "My HightLigh",
  contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuHightLight);
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId == "contextMenuHightLight" && info.selectionText) {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const response = await chrome.tabs.sendMessage(tabs[0].id, {
        task: "high_light",
        val: info.selectionText,
      });
      // console.log(response);
    });
  }
});

// {
//   editable: false;
// frameId: 0;
// frameUrl: "https://vnexpress.net/phan-loai-rac-cang-lam-cang-roi-4769684.html";
// menuItemId: "contextMenuHightLight";
// pageUrl: "https://vnexpress.net/phan-loai-rac-cang-lam-cang-roi-4769684.html";
// selectionText: "êm nhiều hoạt động k";
// }
