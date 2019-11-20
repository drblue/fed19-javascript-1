/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const numberEl = document.querySelector('#number');
const sumEl = document.querySelector('#sum');

let sum = 0;

// catch when the form is being submitted
calcForm.addEventListener('submit', function(e) {
	// stop form from being sent to the server
	e.preventDefault();

	// get the number to calculate and cast it to a number
	const numberToCalc = Number(numberEl.value);

	// empty numberEl
	numberEl.value = "";

	// add `numberToCalc` to whatever is in the `sum` variable
	// sum = sum + numberToCalc;
	sum += numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	sumEl.innerText = sum;
});

// catch when the form is being reset
calcForm.addEventListener('reset', function(e) {
	// reset sum to 0
	sum = 0;

	// update DOM
	sumEl.innerText = "0";
});
