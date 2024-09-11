chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.task == 'high_light') {
        // console.log(removeVietnameseTones(message.val));
        const ketqua = questions.find(object => {
            const isCheck = removeVietnameseTones(object.question).indexOf(removeVietnameseTones(message.val));
            if (isCheck>=0) {
                return true;
            } else {
                return false;
            }
        })
        alert(ketqua?.result);
    }
  });