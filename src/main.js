

function addTask() {
    const inputTodo = document.getElementById('input-todo');
    const containerTodo = document.getElementById('container-todo');

    if (inputTodo.value.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.textContent = inputTodo.value;
    todoItem.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
    });

    todoItem.addEventListener('dblclick', () => {
        containerTodo.removeChild(todoItem);
    });

    containerTodo.appendChild(todoItem);
    inputTodo.value = '';
}

document.getElementById('inputTodo').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});


addTask("leche")
