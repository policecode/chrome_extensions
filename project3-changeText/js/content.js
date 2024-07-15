chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.task == 'change_text') {
        alert(message.val);
        // $('body').css("background-color", message.val)
    }

  });