function addUser(){
    var list = document.getElementById('users');
    var username =document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(username + ' ' + email));
    //
    list.appendChild(entry);
    return false;
}

function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'изменить';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'удалить';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className ='todo-item';

    listItem.appendChild(checkbox); //вставляем в конец элемента переданный элемент
    listItem.appendChild(label); 
    listItem.appendChild(editInput); 
    listItem.appendChild(editButton); 
    listItem.appendChild(deleteButton); 

    bindEvents(listItem); //возвращает функцию-обёртку и привязывает к контексту

    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}


function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') {
        return alert('Необходимо ввести название задачи');
    }

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';

}



function toggleTodoItem() { //функция переключения
   const listItem = this.parentNode; 
   listItem.classList.toggle('completed');


}

function editTodoItem() { 
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';

    }

    listItem.classList.toggle('editing');

}

function deleteTodoItem() { 
    const listItem = this.parentNode;
    todoList.removeChild(listItem); // Удаление элемента с известным родителем
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

function main() {
    todoForm.addEventListener('submit', addTodoItem); //обработчик событий при нажатии Submit
    todoItems.forEach(item => bindEvents(item)); // forEach метод для перебора массива, с помощью данной стрелочной функцией передаем обновленный контекст в Item
}

main();


