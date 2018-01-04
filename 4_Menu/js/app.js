document.addEventListener('DOMContentLoaded', function () {

    var menuElements = document.querySelectorAll('.menu > li');

    menuElements.forEach(function (element) {

        var submenu = element.querySelector('.submenu');

        if(submenu != null){
            element.addEventListener('mouseover', function (event) {
                submenu.style.display = 'block';
            });
            element.addEventListener('mouseout', function (event) {
                submenu.style.display = 'none';
            });
        }
    });
});