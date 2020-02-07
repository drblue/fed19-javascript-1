/**
 * Vue.js TODOs
 *
 */

const app = new Vue({
	el: '#app',

	data: {
		// our variables/properties
		newTodoTitle: '',

		todos: [
			{
				title: "Make coffee",
				completed: true,
			},
			{
				title: "Drink coffee",
				completed: false,
			},
			{
				title: "Drink MORE coffee",
				completed: false,
			},
			{
				title: "Do workshop",
				completed: false,
			},
			{
				title: "Get a room with a nice Vue",
				completed: true,
			},
			{
				title: "Fire the teacher due to bad puns",
				completed: false,
			},
		],
	},

	computed: {
		unfinishedTodos: function() {
			return this.todos.filter(todo => !todo.completed).length;
		},
	},

	methods: {
		// our functions/methods
		createTodo() {
			if (!this.newTodoIsValid()) {
				return;
			}

			this.todos.push({
				title: this.newTodoTitle,
				completed: false,
			});

			this.newTodoTitle = '';
		},

		deleteTodo(todo) {
			this.todos = this.todos.filter(item => item !== todo);
		},

		newTodoIsValid() {
			return (this.newTodoTitle.length > 1);
		},

		toggleTodo(todo) {
			todo.completed = !todo.completed;
		},

	},
});
