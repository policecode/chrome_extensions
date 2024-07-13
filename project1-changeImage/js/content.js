$(document).ready(function (params) {
  let images = ['mat-the-sieu-cap-he-thong.jpg', 'tram-tuoi-mo-he-thong-hieu-tu-hien-ton-quy-khap-nui.jpg'];

  $('img').each(function () {
    let index = Math.floor(Math.random() * images.length);
    let imageSrc = `images/${images[index]}`;
    $(this).attr('src', chrome.runtime.getURL(imageSrc));
  });
})