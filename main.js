// Selecting elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear the existing list
    todoList.innerHTML = '';

    // Loop through tasks and add them to the list
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.name;
        if (task.completed) {
            taskElement.classList.add('completed');
        }

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskElement.appendChild(deleteButton);
        todoList.appendChild(taskElement);

        // Toggle task completion
        taskElement.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault();
    const taskName = todoInput.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        todoInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for form submission
todoForm.addEventListener('submit', addTask);

// Initial render of tasks
renderTasks();
