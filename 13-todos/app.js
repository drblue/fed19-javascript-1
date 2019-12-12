/**
 * My Awesomest TODO List.
 *
 */

let unfinishedTodosEl = document.querySelector('#unfinished-todos');
let finishedTodosEl = document.querySelector('#finished-todos');
let createNewTodoButton = document.querySelector("#createNewTodo");

const getFromLocalStorage = function(key) {
	if (typeof(Storage) !== "undefined") {
		return window.localStorage.getItem(key);
	}

	return false;
}

const saveInLocalStorage = function(key, value) {
	if (typeof(Storage) !== "undefined") {
		window.localStorage.setItem(key, value);
	}

	return false;
}

const getTodosFromStorage = function() {
	let jsonTodos = getFromLocalStorage('todos');
	let todos = JSON.parse(jsonTodos);

	// if (todos !== false && todos !== null) {
	if (!todos) {
		return [];
	}

	return todos;
}

const saveTodosToLocalStorage = function(todolist) {
	// Serialize the data in `todolist`
	let stringifiedTodolist = JSON.stringify(todolist);

	// Save our serialized data to LocalStorage using saveInLocalStorage()
	saveInLocalStorage('todos', stringifiedTodolist);
}

const renderTodoList = function() {
	unfinishedTodosEl.innerHTML = "";
	finishedTodosEl.innerHTML = "";

	todos.filter(todo => !todo.completed).forEach(function(todo) {
		let todoEl = document.createElement('li');
		todoEl.innerText = todo.description;

		unfinishedTodosEl.append(todoEl);
	});

	todos.filter(todo => todo.completed).forEach(function(todo) {
		let todoEl = document.createElement('li');
		todoEl.innerText = todo.description;

		finishedTodosEl.append(todoEl);
	});
};

// Add click handler for updating completed status
document.querySelector('#todos').addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		// find clicked todo
		const todo = todos.find(todo => todo.description === e.target.innerText);

		// update completed status for this todo item
		todo.completed = !todo.completed;

		// save updated todo list
		saveTodosToLocalStorage(todos);

		// render the updated todo list to DOM
		renderTodoList();
	}
});

// Add click handler for creating a new TODO
createNewTodoButton.addEventListener('click', function() {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let newTodo = {
		description: text,
		completed: false
	}

	// add newTodo to list of todos
	todos.push(newTodo);

	// sort todos alphabetically
	todos.sort((a,b) => {
		if (a.description > b.description) {
			return 1;
		} else if (a.description < b.description) {
			return -1;
		}
		return 0;
	});

	// save our updated todo list
	saveTodosToLocalStorage(todos);

	// render the updated todo list to DOM
	renderTodoList();
});

// get todos from storage
let todos = getTodosFromStorage();
renderTodoList();
