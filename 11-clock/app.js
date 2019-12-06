/**
 * Dates and Time.
 *
 */

const clockEl = document.querySelector('#clock');
const dateEl = document.querySelector('#date');
const timeEl = document.querySelector('#time');

const zeroPad = num => {
	if (num < 10) {
		return "0" + num;
	}
	return String(num);
};

const updateClock = () => {
	// current date
	const now = new Date();

	// weekday

	// day of month
	const dayOfMonth = zeroPad(now.getDate());

	// month
	const month = zeroPad(now.getMonth() + 1);

	// year
	const year = now.getFullYear();

	// hour
	const hours = zeroPad(now.getHours());

	// minute
	const minutes = zeroPad(now.getMinutes());

	// second
	const seconds = zeroPad(now.getSeconds());

	const date = `${year}-${month}-${dayOfMonth}`;
	const time = `${hours}:${minutes}:${seconds}`;

	dateEl.innerHTML = date;
	timeEl.innerHTML = time;
}

updateClock();
const secondTicker = setInterval(updateClock, 1000);
