$(document).ready(() => {
    let inputElement = $('input[name="search"]');
    let btnSave = $('button[name="btn-save"]');
    btnSave.click(() => {
        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
            const response = await chrome.tabs.sendMessage(tabs[0].id, {
                task: "change_text",
                val: inputElement.val()
            });
            console.log(response);
        });
        window.close();
    });
})