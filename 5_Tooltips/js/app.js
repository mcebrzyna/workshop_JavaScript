document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.tooltip');
    var newSpan = document.createElement('span');

    tooltips.forEach(function (tooltip) {

        tooltip.addEventListener('mouseover', function () {
            newSpan.innerText = this.dataset.text;
            newSpan.classList.add('tooltipText');
            tooltip.appendChild(newSpan);
        });
        tooltip.addEventListener('mouseout', function () {
            newSpan.remove();
        });

    });
});