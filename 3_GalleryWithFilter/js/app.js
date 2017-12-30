document.addEventListener('DOMContentLoaded', function () {

    var images = document.querySelectorAll('img');
    var hideButton = document.querySelector('#hideButton');
    var showButton = document.querySelector('#showButton');
    var tagInput = document.querySelector('#tagInput');

    showButton.addEventListener('click', function (event) {

        images.forEach(function (image) {
           if(image.dataset.tag.indexOf(tagInput.value) === -1){
               image.style.display = 'none';
           }
           else{
               image.style.display = 'inline-block';
           }
        });
    });

    hideButton.addEventListener('click', function () {
        images.forEach(function (image) {
            if(image.dataset.tag.indexOf(tagInput.value) !== -1){
                image.style.display = 'none';
            }
            else{
                image.style.display = 'inline-block';
            }
        });
    });
});

