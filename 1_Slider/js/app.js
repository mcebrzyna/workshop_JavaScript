document.addEventListener("DOMContentLoaded", function () {

    var nextBtn = document.querySelector('#nextPicture');
    var prevBtn = document.querySelector('#prevPicture');
    var imgList = document.querySelectorAll('.slider li');
    var index = 0;
    var lastChange = 0;

    function nextImg() {
        imgList[index].classList.remove('visible');
        (index === imgList.length -1) ? index = 0 : index++;
        imgList[index].classList.add('visible');
        lastChange = 0;
    }

    function prevImg() {
        imgList[index].classList.remove('visible');
        (index === 0) ? index = imgList.length -1 : index--;
        imgList[index].classList.add('visible');
        lastChange = 0;
    }

    imgList[index].classList.add('visible');

    //SLIDER

    nextBtn.addEventListener('click', nextImg);
    prevBtn.addEventListener('click', prevImg);

    setInterval(function () {
        if (lastChange === 7 /*amount of seconds between slide*/){
            return nextImg();
        }
        lastChange += 1;
    }, 1000);
});