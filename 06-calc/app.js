/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const numberEl = document.querySelector('#number');
const addButton = document.querySelector('#addButton');
const subButton = document.querySelector('#subtractButton');

let sum = 0;

const updateSumEl = function(val) {
	document.querySelector('#sum').innerText = val;
}

// catch when a user clicks on the "Add"-button
addButton.addEventListener('click', function() {
	// get the number to calculate and cast it to a number
	const numberToCalc = Number(numberEl.value);

	// empty numberEl
	numberEl.value = "";

	// add `numberToCalc` to whatever is in the `sum` variable
	// sum = sum + numberToCalc;
	sum += numberToCalc;

	// set `sumEl`'s innerText to be the value of `sum`
	updateSumEl(sum);
});

// catch when a user clicks on the "Subtract"-button
subButton.addEventListener('click', function() {
	// get value from input-field and convert it to a number
	const inputValue = numberEl.value; // inputValue will be of type string
	const inputNumber = Number(inputValue); // inputNumber will be of type number

	// make input field be empty
	numberEl.value = "";

	// take whatever value is in the variable `sum`
	// and subtract it with whatever is in the `inputNumber` variable
	sum = sum - inputNumber;

	document.querySelector('#sum').innerText = sum;
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
