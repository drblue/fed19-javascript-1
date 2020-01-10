/**
 * Todo-classes.
 *
 */

class TodoList {
	constructor() {
		this.todos = [];
	}

	addTodo(todo) {
		this.todos.push(todo);
	}

	getTodoByDescription(description) {
		return this.todos.find(todo => todo.description === description);
	}

	getTodos() {
		return this.todos;
	}

	getFinishedTodos() {
		return this.todos.filter(todo => todo.completed);
	}

	getUnfinishedTodos() {
		return this.todos.filter(todo => !todo.completed);
	}

	sortTodos() {
		// sort todos alphabetically
		this.todos.sort((a,b) => {
			if (a.description > b.description) {
				return 1;
			} else if (a.description < b.description) {
				return -1;
			}
			return 0;
		});
		return this;
	}
}

class Todo {}
