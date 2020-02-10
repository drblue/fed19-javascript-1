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
	template: `<li>{{ prefix }} Hello, I am a student</li>`,
	data() {
		return {
			prefix: 'Name:',
		}
	}
});

const app = new Vue({
	el: '#app',

	data: {
		// our variables/properties
		students: [
			'Adam',
			'Bertil',
			'Caesar',
			'David',
			'Erik',
			'Fredrik',
			'Harald',
			'Ivar',
			'Johan'
		],
	},

	methods: {
		// our functions/methods

	},
});
