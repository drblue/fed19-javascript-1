/**
 * Promises repetition.
 *
 */

const btnMakePromise = document.querySelector('#btnMakePromise');
const status = document.querySelector('#status');

const setStatus = msg => {
	status.innerHTML = msg;
};

const makePromise = () => {
	return new Promise((resolve, reject) => {
		console.log("Promise created!");

		setTimeout(() => {
			if (document.querySelector('#fulfill').checked) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
};

btnMakePromise.addEventListener('click', e => {
	setStatus("Button clicked.");

	makePromise().then(() => {
		setStatus("Promise fulfilled! 🥳");
	}).catch(() => {
		setStatus("Promise rejected 🥺");
	});

	setStatus("Promise made.");
});

setStatus("No promise made.");
