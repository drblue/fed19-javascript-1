/**
 * Vue.js Components
 *
 */

Vue.component('click-counter', {
	template: `<button class="btn btn-primary" @click="clicks++">Clicks: {{ clicks }}</button>`,
	data() {
		return {
			clicks: 0,
		}
	}
});

Vue.component('student', {
	template: `<li>{{ prefix }} my name is {{ student.name }} and I am {{ student.age }} years old</li>`,
	props: ['student'],
	data() {
		return {
			prefix: 'Hello',
		}
	}
});

const app = new Vue({
	el: '#app',

	data: {
		// our variables/properties
		students: [
			{
				name: 'Adam',
				age: 7,
			},
			{
				name: 'Berit',
				age: 5,
			},
			{
				name: 'Calle',
				age: 8,
			},
			{
				name: 'Daniel',
				age: 4,
			},
			{
				name: 'Eskil',
				age: 7,
			},
		],
	},

	methods: {
		// our functions/methods

	},
});
