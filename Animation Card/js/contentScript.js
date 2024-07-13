const btnNext = document.querySelector('#chapterNav .next.a_next');
const header = document.querySelector('header#header');
const htmlTemplateBtn = `<button type="button" id="fixed__countdown" class="btn btn-success">Count Down</button>`;
if (header) {
    header.insertAdjacentHTML('beforebegin', htmlTemplateBtn);
    const countDown = document.querySelector('button#fixed__countdown')
    let i = 35;
    countDown.innerText = i;
    setInterval(() => {
        i--;
        countDown.innerText = i;
    }, 1000)
}
if (btnNext) {
    setInterval(() => {
        btnNext.click();
        console.log('next page');
    }, 35000)
}