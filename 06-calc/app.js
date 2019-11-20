/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const firstNumberEl = document.querySelector('#firstNumber');
const secondNumberEl = document.querySelector('#secondNumber');

calcForm.addEventListener('submit', function(e) {
	// stop form from being sent to the server
	e.preventDefault();

	console.log("Form prevented from being submitted! yay!");

	const firstNumberStr = firstNumberEl.value;
	const secondNumberStr = secondNumberEl.value;

	const firstNumber = Number(firstNumberStr);
	const secondNumber = Number(secondNumberStr);

	console.log("First number", firstNumber, typeof firstNumber);
	console.log("Second number", secondNumber, typeof secondNumber);
});
