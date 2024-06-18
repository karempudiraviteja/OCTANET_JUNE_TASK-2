document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task-button');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;

        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${taskText} - Due: ${dueDate} - Priority: ${priority}</span>
            <div>
                <button onclick="markComplete(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        tasksList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
    }
});

function markComplete(button) {
    const taskItem = button.closest('.task-item');
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.closest('.task-item');
    taskItem.remove();
}
