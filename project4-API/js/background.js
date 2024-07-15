
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message.task === "search") {
    // window.courseStr = message.data;
    chrome.storage.local.set({ data: message.data });
    chrome.action.openPopup();
  }
});
