document.addEventListener('DOMContentLoaded', function () {

    var dragBoxes = document.querySelectorAll('.dragBox');
    var dragContainer = document.querySelector('.dragContainer');

    dragBoxes.forEach(function (dragBox) {
        function dragStart() {
            this.classList.add('drag');
        }


        function dragOver() {
            var dragItem = document.querySelector('.drag');

            dragContainer.insertBefore(dragItem, this.nextSibling);
            //dragItem.style.marginTop ='50px' ;
        }


        function dragEnd() {
            this.classList.remove('drag')
        }

        dragBox.addEventListener('dragstart', dragStart);
        dragBox.addEventListener('dragover', dragOver);
        dragBox.addEventListener('dragend', dragEnd);
    })
});
