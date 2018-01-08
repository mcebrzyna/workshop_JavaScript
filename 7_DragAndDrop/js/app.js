document.addEventListener('DOMContentLoaded', function () {

    var dragBoxes = document.querySelectorAll('.dragBox');
    var dragContainer = document.querySelector('.dragContainer');

    dragBoxes.forEach(function (dragBox) {
        //top & left cordinates of box
        var boxTop = 0;
        var boxLeft = 0;

        function boxDrager (event) {
            dragBox.style.left = event.clientX - 50 + 'px';
            dragBox.style.top = event.clientY - 50 +'px';
        }


        function mouseDown (event) {
            //cordinates value
            boxTop = this.offsetTop;
            boxLeft = this.offsetLeft;

            //cloning box
            var newBox = this.cloneNode(true);
            newBox.classList.add('hidden');
            dragContainer.insertBefore(newBox, this.nextSibling);

            this.style.position = 'absolute';


            window.addEventListener('mousemove', boxDrager);
        }


        function mouseUp (event){

            dragBox.style.top = boxTop + 'px';
            dragBox.style.left = boxLeft + 'px';
            dragBox.style.position = 'static';

            document.querySelector('.hidden').remove();
            window.removeEventListener('mousemove', boxDrager);
        }


        function dropTarget() {
            console.log(dragBox.offsetTop);

        }

        dragBox.addEventListener('mousedown', mouseDown);
        dragBox.addEventListener('mouseup', mouseUp);
        dragBox.addEventListener('mouseover', dropTarget);
    })

});


//CLICK Version
// dragBox.addEventListener('click', function (event) {
//     this.selected = !this.selected;
//     if(this.selected){
//         window.addEventListener('mousemove', boxDrager);
//     }
//     else{
//         window.removeEventListener('mousemove', boxDrager);
//     }
// });
