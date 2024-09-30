document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => editTask(li, taskContent));

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => markCompleted(li));

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));

    taskActions.appendChild(editBtn);
    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(taskActions);

    taskList.appendChild(li);
    taskInput.value = ''; 
}

function editTask(taskItem, taskContent) {
    const newTask = prompt('Edit your task:', taskContent.textContent);
    if (newTask && newTask.trim() !== '') {
        taskContent.textContent = newTask.trim();
    }
}

function markCompleted(taskItem) {
    taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
    taskItem.remove();
}
