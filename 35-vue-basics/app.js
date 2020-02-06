/**
 * Vue.js Basics
 *
 */

const app = new Vue({
	el: '#app',
	data: {
		url: 'https://www.espressohouse.se',

		clicks: 0,
		salary: 10,

		x: 0,
		y: 0,
	},
	methods: {
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
		}
	},
});
