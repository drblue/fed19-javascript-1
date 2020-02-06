/**
 * Vue.js Basics
 *
 */

const app = new Vue({
	el: '#app',
	data: {
		name: 'teacher',
		wish: 'coffee',
		url: 'https://www.espressohouse.se',

		msg: `This is my message and I'm sticking to it.`,

		msgClass: ['alert', 'alert-warning'],
	},
	methods: {
		getMsgClass() {
			if (this.msg.includes('DANGER')) {
				return 'alert alert-danger';
			} else {
				return 'alert alert-success';
			}
		},

		want() {
			return `I want ${this.wish}, ${this.name}.`;
		}
	},
});
