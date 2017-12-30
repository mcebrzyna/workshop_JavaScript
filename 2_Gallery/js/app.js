document.addEventListener('DOMContentLoaded', function () {

    var images = document.querySelectorAll('.gallery img');
    var body = document.querySelector('body');

    images.forEach(function (image) {
        image.addEventListener('click', function (event) {
            var fullScreenDiv = document.createElement('div');
            fullScreenDiv.classList.add('fullScreen');
            body.appendChild(fullScreenDiv);

            var fullScrenImg = document.createElement('img');
            fullScrenImg.setAttribute('src',this.getAttribute('src'));
            fullScreenDiv.appendChild(fullScrenImg);

            var fullScreenButton = document.createElement('button');
            fullScreenButton.classList.add('close');
            fullScreenButton.innerText = 'close';
            fullScreenDiv.appendChild(fullScreenButton);

            fullScreenButton.addEventListener('click', function (event) {
                fullScreenDiv.remove();
            });
        });
    });
});
