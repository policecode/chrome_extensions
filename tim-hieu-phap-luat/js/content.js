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
        if (ketqua?.result) {
            let htmlReplace = `<span style="color: #5dab2d; background-color: yellow;">${ketqua?.result}</span>`;
            $('*:contains("'+ketqua.result+'")').each((inde, el) => {
                let text = el.innerHTML;
                text = text.replace(new RegExp(ketqua.result, 'gmi'), htmlReplace);
                el.innerHTML = text;
            })
        } else {
            alert('Không có kết quả');
        }
    }
  });