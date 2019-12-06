/**
 * Dates and Time.
 *
 */

const clockEl = document.querySelector('#clock');
const dateEl = document.querySelector('#date');
const timeEl = document.querySelector('#time');

const updateClock = () => {
	dateEl.innerHTML = moment().format('YYYY-MM-DD');
	timeEl.innerHTML = moment().format('HH:mm:ss');
}

updateClock();
const secondTicker = setInterval(updateClock, 1000);
