document.addEventListener("DOMContentLoaded", function () {

    var nextBtn = document.querySelector('#nextPicture');
    var prevBtn = document.querySelector('#prevPicture');
    var imgList = document.querySelectorAll('.slider li');
    var index = 0;

    imgList[index].classList.add('visible');

    nextBtn.addEventListener('click', function (event) {

        imgList[index].classList.remove('visible');
        (index === imgList.length -1) ? index = 0 : index++;
        imgList[index].classList.add('visible');
    });

    prevBtn.addEventListener('click', function (event) {

        imgList[index].classList.remove('visible');
        (index === 0) ? index = imgList.length -1 : index--;
        imgList[index].classList.add('visible');
    });
});