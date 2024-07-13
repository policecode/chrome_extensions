function randomItems(items) {
    return items[Math.floor(Math.random() * items.length)]
}
chrome.action.onClicked.addListener(async (tab) => {
    
    let colorArr = ['aliceblue', 'antiquewhite', 'aqua', 'blueviolet', 'black', 'blue', 'yellow', 'green'];
    // const response = await chrome.tabs.sendMessage(tab.id, {
    //     task: "change_background",
    //     val: "blue"
    // });

    /**
     * Gửi cho tất cả các tab cùng nhận được
     */
    let color = randomItems(colorArr);
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(async (tab) => {
             const response = await chrome.tabs.sendMessage(tab.id, {
                task: "change_text_color",
                val: color
            });

        });
    })
})