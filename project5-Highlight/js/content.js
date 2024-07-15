chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.task == 'high_light') {
        let htmlReplace = `<span style="color: red; font-size: 20px; background-color: yellow; font-weight: bold;">${message.val}</span>`;
        $('*:contains("'+message.val+'")').each((inde, el) => {
            let text = el.innerHTML;
            text = text.replace(new RegExp(message.val, 'gmi'), htmlReplace);
            el.innerHTML = text;
        })
    }
  });