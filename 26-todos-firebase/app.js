/**
 * My Even Moar Awesomest TODO List.
 *
 */

// connect to firestore
const db = firebase.firestore();

const getTodosFromDatabase = async () => {
	const data = await db.collection('todos').get();
	const todos = new TodoList();

	data.docs.forEach(doc => {
		// for each todo-document
		const rawTodo = doc.data();

		// create a Todo object
		const todo = new Todo(rawTodo.description, rawTodo.completed);

		// and add it to the TodoList object
		todos.addTodo(todo);
	});

	return todos;
};

let unfinishedTodosEl = document.querySelector('#unfinished-todos');
let finishedTodosEl = document.querySelector('#finished-todos');
let createNewTodoButton = document.querySelector("#createNewTodo");

const createTodoElement = function(todo) {
	let todoEl = document.createElement('li');
	todoEl.innerText = todo.getDescription();
	return todoEl;
}

const renderTodoList = function() {
	unfinishedTodosEl.innerHTML = "";
	finishedTodosEl.innerHTML = "";

	todos.getUnfinishedTodos().forEach(function(todo) {
		unfinishedTodosEl.append(createTodoElement(todo));
	});

	todos.getFinishedTodos().forEach(function(todo) {
		finishedTodosEl.append(createTodoElement(todo));
	});
};

// Add click handler for updating completed status
document.querySelector('#todos').addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		// find clicked todo
		const todo = todos.getTodoByDescription(e.target.innerText);

		// update completed status for this todo item
		todo.toggleCompleted();

		// render the updated todo list to DOM
		renderTodoList();
	}
});

// Add click handler for creating a new TODO
createNewTodoButton.addEventListener('click', function() {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let todo = new Todo(text);

	// add todo to list of todos
	todos.addTodo(todo);

	// sort todos alphabetically
	todos.sortTodos();

	// render the updated todo list to DOM
	renderTodoList();
});

// declare variable for todos-list
let todos;

getTodosFromDatabase().then(todolist => {
	todos = todolist;
	renderTodoList();

}).catch(err => {
	console.error("Error! Error! Error!", err);
});
