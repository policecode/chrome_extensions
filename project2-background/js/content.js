chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.task == 'change_background') {
        $('body').css("background-color", message.val)
    }
    if (message.task == 'change_text_color') {
        $('a').css("color", message.val)
    }
  });