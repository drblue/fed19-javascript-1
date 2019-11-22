/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const numberEl = document.querySelector('#number');

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

document.querySelectorAll('button.btn-math-operator').forEach(function(button){
	button.addEventListener('click', function(e) {
		// get the number to calculate and cast it to a number
		const numberToCalc = getNumberToCalc();

		// somehow find math operator and do mathy stuff
		switch (e.target.id) {
			case "addButton":
				sum = sum + numberToCalc;
				break;
			case "subtractButton":
				sum = sum - numberToCalc;
				break;
			case "multiplyButton":
				sum = sum * numberToCalc;
				break;
			case "divideButton":
				sum = sum / numberToCalc;
				break;
		}

		// set `sumEl`'s innerText to be the value of `sum`
		updateSumEl(sum);
	});
});

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
