/**
 * Promises repetition.
 *
 */

const btnMakePromise = document.querySelector('#btnMakePromise');
const status = document.querySelector('#status');

const setStatus = msg => {
	status.innerHTML = msg;
};

btnMakePromise.addEventListener('click', e => {
	setStatus("Button clicked.");

	const promise = new Promise((resolve, reject) => {
		console.log("Promise created!");

		setTimeout(() => {
			if (document.querySelector('#fulfill').checked) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});

	console.log(promise);

	promise.then(() => {
		setStatus("Promise fulfilled! 🥳");
	}).catch(() => {
		setStatus("Promise rejected 🥺");
	});

	setStatus("Promise made.");
});

setStatus("No promise made.");
