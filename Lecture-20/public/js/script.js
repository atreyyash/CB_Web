const form = document.querySelector('form');
const taskList = document.querySelector('.taskList');
const taskItem = document.querySelector('#newtask');

function addTaskToList(todos) {
    taskList.innerText = '';
    todos.forEach(t => {
        let li = document.createElement('li');
        li.classList.add('item');
        let str =
            `<div class="taskInput">
                <input class="checkbox" type="checkbox">
                    <span class="task">${t}</span>
            </div>

            <div class="buttons">
                <span class="upArrow">↑</span>
                <span class="downArrow">↓</span>
                <span class="deleteTask">🗑️</span>
            </div>`;
        li.innerHTML = str;
        taskList.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let task = taskItem.value;
    console.log(task);
    taskItem.value = "";
    try {
        let data = await axios.post('/addtodo', {
            newtask: task
        });
        let todos = data.data;
        console.log(todos);
        addTaskToList(todos);
    }
    catch {
        console.log(err);
    }
});