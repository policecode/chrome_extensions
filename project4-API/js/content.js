window.addEventListener('mouseup', () => {
    let selectedText = window.getSelection().toString();
    if (selectedText.trim().length > 0) {
        chrome.runtime.sendMessage({
            task: 'search',
            data: selectedText
        });
    }
})
