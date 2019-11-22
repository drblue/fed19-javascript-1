/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const numberEl = calcForm.number;

let sum = 0;

const updateSumEl = function(val) {
	calcForm.sum.innerText = val;
}

// catch when the form is being submitted
calcForm.addEventListener('submit', function(e) {
	// stop form from being sent to the server
	e.preventDefault();
});

calcForm.addEventListener('click', function(e) {
	// Was it a button that was clicked?
	if (e.target.tagName !== "BUTTON") {
		return;
	}

	// Was it a button that had a math-operator?
	if (e.target.dataset.mathOperator === undefined) {
		return;
	}

	// get the number to calculate and cast it to a number
	const numberToCalc = Number(numberEl.value);

	// empty numberEl
	numberEl.value = "";

	// what type of math operation should we do?
	const math_operator = e.target.dataset.mathOperator;
	switch (math_operator) {
		case 'ADD':
			sum += numberToCalc;
			break;
		case 'SUBTRACT':
			sum -= numberToCalc;
			break;
		case 'MULTIPLY':
			sum *= numberToCalc;
			break;
		case 'DIVIDE':
			sum /= numberToCalc;
			break;
		default:
			console.log("Sorry, unknown math-operation");
			break;
	}

	// update `sumEl` to show the new value of `sum`
	updateSumEl(sum);
});

// catch when the form is being reset
calcForm.addEventListener('reset', function(e) {
	// reset sum to 0
	sum = 0;

	// update DOM
	updateSumEl(sum);
});
