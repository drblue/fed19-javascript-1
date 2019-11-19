/**
 * My Awesomest TODO List.
 *
 */

let todos = [
	{ // 0
		description: "Have class meeting",
		completed: false,
	},
	{ // 1
		description: "Eat lunch",
		completed: false,
	},
	{ // 2
		description: "Code",
		completed: true,
	},
	{ // 3
		description: "Sleep",
		completed: true,
	},
	{ // 4
		description: "Repeat",
		completed: false,
	},
];

let todosEl = document.querySelector('#todos');

const renderTodoList = function() {
	todosEl.innerHTML = "";

	todos.forEach(function(todo) {
		let todoEl = document.createElement('li');
		todoEl.innerText = todo.description;

		// check if todo is completed, if so add class 'completed'
		if (todo.completed) {
			todoEl.classList.add('completed');
		}

		todosEl.append(todoEl);
	});
};
renderTodoList();

// Add click handler for updating completed status
todosEl.addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		// update completed status for this todo item
		todos.forEach(function(todo) {
			if (todo.description === e.target.innerText) {
				if (todo.completed) {
					todo.completed = false;
				} else {
					todo.completed = true;
				}
				// shorthand of above if-statement
				// todo.completed = !todo.completed;

				// render the updated todo list to DOM
				renderTodoList();
			}
		});
	}
});

// Add click handler for creating a new TODO
let createNewTodoButton = document.querySelector("#createNewTodo");
createNewTodoButton.addEventListener('click', function() {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let newTodo = {
		description: text,
		completed: false
	}

	todos.push(newTodo);

	// render the updated todo list to DOM
	renderTodoList();
});
