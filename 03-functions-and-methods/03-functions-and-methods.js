/**
 * FUNCTIONS
 *
 * Default Parameter Values.
 */

const getRandomNumber = (max = 10) => {
	console.log("Random number max");
	console.log(max, typeof max);

	return Math.ceil(Math.random() * max);
}

document.querySelector('#random-number-form').addEventListener('submit', e => {
	e.preventDefault();

	const maxNumber = Number(document.querySelector('#maxNumber').value);
	const randomNumber = getRandomNumber(maxNumber);

	document.querySelector('#randomNumber').innerText = randomNumber;
});
