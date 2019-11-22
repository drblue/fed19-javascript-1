/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const numberEl = document.querySelector('#number');
const addButton = document.querySelector('#addButton');
const subButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

let sum = 0;

const updateSumEl = function(val) {
	document.querySelector('#sum').innerText = val;
}

const getNumberToCalc = function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = Number(numberEl.value);

	// empty numberEl
	numberEl.value = "";

	return numberToCalc;
}

// catch when a user clicks on the "Add"-button
addButton.addEventListener('click', function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = getNumberToCalc();

	// add `numberToCalc` to whatever is in the `sum` variable
	sum = sum + numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	updateSumEl(sum);
});

// catch when a user clicks on the "Subtract"-button
subButton.addEventListener('click', function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = getNumberToCalc();

	// subtract `numberToCalc` from whatever is in the `sum` variable
	sum = sum - numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	updateSumEl(sum);
});

// catch when a user clicks on the "Multiply"-button
multiplyButton.addEventListener('click', function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = getNumberToCalc();

	// multiply `numberToCalc` from whatever is in the `sum` variable
	sum = sum * numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	updateSumEl(sum);
});

// catch when a user clicks on the "Divide"-button
divideButton.addEventListener('click', function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = getNumberToCalc();

	// divide `numberToCalc` from whatever is in the `sum` variable
	sum = sum / numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	updateSumEl(sum);
});



// oh hey subtract-button, pretty plz subtract values


// catch when the form is being submitted
calcForm.addEventListener('submit', function(e) {
	// stop form from being sent to the server
	e.preventDefault();
});

// catch when the form is being reset
calcForm.addEventListener('reset', function(e) {
	// reset sum to 0
	sum = 0;

	// update DOM
	updateSumEl(sum);
});
