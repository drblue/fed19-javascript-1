/**
 * Vue.js TODOs
 *
 */

const app = new Vue({
	el: '#app',

	data: {
		// our variables/properties
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
		],
	},

	methods: {
		// our functions/methods
		toggleTodo(index) {
			this.todos[index].completed = !this.todos[index].completed;
		},

	},
});
