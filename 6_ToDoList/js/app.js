document.addEventListener('DOMContentLoaded', function () {
    var addTask = document.querySelector('#addTask');
    var taskList = document.querySelector('#taskList');
    var removeAll = document.querySelector('#removeAll');
    var counterElement = document.querySelector('#counter');
    var counter = 0;

    addTask.addEventListener('click', function (event) {
        //create new task elements
        var task = document.createElement('li');
        var divLabel = document.createElement('div');
        var input = document.createElement('input');
        var delButton = document.createElement('button');
        var okButton = document.createElement('button');
        var completeButton = document.createElement('button');

        //value of new task elements
        divLabel.innerText = 'newTask';
        divLabel.style.display = 'none';
        input.placeholder = 'newTask';
        input.classList.add('input');
        okButton.innerText = 'ok';
        okButton.classList.add('okButton');
        delButton.innerText = '\u274C';
        delButton.classList.add('deleteButton');
        completeButton.classList.add('completeButton');

        //place element
        taskList.appendChild(task);
        task.appendChild(completeButton);
        task.appendChild(divLabel);
        task.appendChild(input);
        task.appendChild(okButton);
        task.appendChild(delButton);

        //buttons events
        completeButton.addEventListener('click', function () {
            this.selected = !this.selected;
            if(this.selected){
                task.classList.add('completed');
                counterElement.innerText = 'Task to finished: '+ --counter;
                completeButton.innerText = '\u2714';
            }
            else{
                task.classList.remove('completed');
                counterElement.innerText = 'Task to finished: '+ ++counter;
                completeButton.innerText = '';
            }
        });

        divLabel.addEventListener('click', function () {
            delButton.style.display = 'block';
            okButton.style.display = 'block';
            input.style.display = 'block';
            divLabel.style.display = 'none';
        });

        okButton.addEventListener('click', function () {
            delButton.style.display = 'none';
            okButton.style.display = 'none';
            input.style.display = 'none';
            divLabel.style.display = 'block';
            if (input.value !== ''){
                divLabel.innerText = input.value;
            }
        });

        delButton.addEventListener('click', function () {
            if(task.getAttribute('class') !== 'completed'){
                counterElement.innerText = 'Task to finished: ' + --counter;
            }
            task.remove();
        });

        //counter
        counterElement.innerText = 'Task to finished: ' + ++counter;
    });


    removeAll.addEventListener('click', function () {
        document.querySelectorAll('.completed').forEach(function (value) {
            value.remove();
        })
    })
});






