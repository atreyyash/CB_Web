const taskList = document.querySelector('.taskList');
const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');

let tasks = [];

function addTaskToList(data) {
    let li = document.createElement('li');
    li.classList.add('item');
    let str =
        `<div class="taskInput">
                <input class="checkbox" type="checkbox">
                    <span class="task">${data[data.length - 1]}</span>
            </div>

            <div class="buttons">
                <span class="upArrow">↑</span>
                <span class="downArrow">↓</span>
                <span class="deleteTask">🗑️</span>
            </div>`;
    li.innerHTML = str;

    taskList.appendChild(li);

}

btn.addEventListener('click', () => {
    // console.log(inp.value);
    tasks.push(inp.value);
    inp.value = "";
    addTaskToList(tasks);
})

// Adding Events
taskList.addEventListener('click', (e) => {
    // console.log(e.target.classList.value);
    let keyClicked = e.target.classList.value;

    if (keyClicked === 'upArrow') {
        let grandParent = e.target.parentElement.parentElement;
        let previousSib = grandParent.previousElementSibling;
        taskList.insertBefore(grandParent, previousSib);
    }
    else if (keyClicked === 'downArrow') {
        let grandParent = e.target.parentElement.parentElement;
        let nextSib = grandParent.nextElementSibling;
        taskList.insertBefore(nextSib, grandParent);
    }
    else if (keyClicked === 'deleteTask') {
        let grandParent = e.target.parentElement.parentElement;
        grandParent.remove();
    }
    else if (keyClicked === 'checkbox') {
        let nextSib = e.target.nextElementSibling;
        // console.log(nextSib);
        nextSib.classList.toggle('lineCut');
    }
})