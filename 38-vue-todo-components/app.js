/**
 * Vue.js TODOs
 *
 * "Inline" components
 *
 */

Vue.component('todo-item', {
	template: `<li :class="{ done: item.completed }">
			<span class="todo-title" @click="toggleTodo(item)">
				{{ item.title }}
			</span>
			<span class="todo-delete far fa-trash-alt" @click="deleteTodo(item)"></span>
		</li>`,

	props: ['item'],

	methods: {
		deleteTodo(todo) {
			this.todos = this.todos.filter(item => item !== todo);
		},
		toggleTodo(todo) {
			todo.completed = !todo.completed;
		},
	},
});

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

		newTodoIsValid() {
			return (this.newTodoTitle.length > 1);
		},

	},
});
