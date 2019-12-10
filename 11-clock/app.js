/**
 * Dates and Time.
 *
 */

const clockEl = document.querySelector('#clock');
const dateEl = document.querySelector('#date');
const timeEl = document.querySelector('#time');
let secondTicker;

const updateClock = () => {
	dateEl.innerHTML = moment().format('YYYY-MM-DD');
	timeEl.innerHTML = moment().format('HH:mm:ss');
}

const runClock = () => {
	updateClock();
	secondTicker = setInterval(updateClock, 1000);
}

runClock();

clockEl.addEventListener('click', () => {
	if (secondTicker) {
		clearInterval(secondTicker);
		secondTicker = false;
	} else {
		runClock();
	}
});
