/**
 * Promises repetition.
 *
 */

const btnMakePromise = document.querySelector('#btnMakePromise');
const status = document.querySelector('#status');

const setStatus = msg => {
	status.innerHTML = msg;
};

setStatus("No promise made.");

btnMakePromise.addEventListener('click', e => {
	setStatus("Button clicked.");
});
