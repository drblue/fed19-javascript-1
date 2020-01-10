/**
 * My Even Moar Awesomest TODO List.
 *
 */

let unfinishedTodosEl = document.querySelector('#unfinished-todos');
let finishedTodosEl = document.querySelector('#finished-todos');
let createNewTodoButton = document.querySelector("#createNewTodo");

const renderTodoList = function() {
	unfinishedTodosEl.innerHTML = "";
	finishedTodosEl.innerHTML = "";

	todos.getUnfinishedTodos().forEach(function(todo) {
		let todoEl = document.createElement('li');
		todoEl.innerText = todo.getDescription();

		unfinishedTodosEl.append(todoEl);
	});

	todos.getFinishedTodos().forEach(function(todo) {
		let todoEl = document.createElement('li');
		todoEl.innerText = todo.getDescription();

		finishedTodosEl.append(todoEl);
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

// create empty todos-list
let todos = new TodoList();
renderTodoList();
