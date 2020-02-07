/**
 * Vue.js Basics
 *
 */

const app = new Vue({
	el: '#app',
	data: {
		url: 'https://www.google.com',

		clicks: 0,
		salary: 10,

		x: 0,
		y: 0,

		name: 'Neo',
		anonymous: false,
	},
	methods: {

		secretLinkClicked() {
			this.url = 'https://www.reddit.com';
		},

		increaseClicks() {
			this.clicks++;
		},

		increaseSalary(amount) {
			this.salary += amount;
		},
		decreaseSalary(amount) {
			this.salary -= amount;
		},

		updateCoords(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},

		getName() {
			if (this.anonymous) {
				return 'anonymous';
			}
			return this.name;
		},
	},
});
