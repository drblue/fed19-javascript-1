/**
 * Calc.
 *
 */

const calcForm = document.querySelector('#calc-form');
const firstNumberEl = document.querySelector('#firstNumber');
const secondNumberEl = document.querySelector('#secondNumber');
const sumEl = document.querySelector('#sum');

calcForm.addEventListener('submit', function(e) {
	// stop form from being sent to the server
	e.preventDefault();

	// get numbers and cast them to numbers
	const firstNumber = Number(firstNumberEl.value);
	const secondNumber = Number(secondNumberEl.value);

	const sum = firstNumber + secondNumber;
	sumEl.innerText = sum;
});
