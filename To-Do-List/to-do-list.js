//Create an array for todoList of objects
const todoList = [{name: "wash dishes", dueDate: '22-12-2022'}, {name: "make dinner", dueDate: '22-12-2022'}];
//Displays the tasks in the Array on startup
makeTodoList();

//For loop creating the Array
//Generating new HTML after a event 'onclick' takes effect
function makeTodoList() {
    let todoListHTML = '';

    todoList.forEach((taskToDoObject, index) => {
            const { name , dueDate } = taskToDoObject;
            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button js-deleteButton">Delete</button>`;
            todoListHTML += html;
        });

        //Replace the HTML in div element
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        //Select ALL buttons and loops through the Array list to delete
        document.querySelectorAll('.js-deleteButton').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                makeTodoList();
            });
        });
    }

document.querySelector('.js-addButton').addEventListener('click', () => {
    addTask();
});

//Adds the task to the array
function addTask() {
    //Takes the value out the textbox or date and create a variable
    const inputElement = document.querySelector('.js-task-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-dueDate-input');
    const dueDate = dateInputElement.value;

    //Adds the next task onto the exisiting Array
    todoList.push({name, dueDate});

    //Empty the Textbox
    inputElement.value = '';
    //Repeats the for loop to add new task onto page
    makeTodoList();
};

function deleteTask() {
    todoList.splice(i, 1);
    makeTodoList();
}