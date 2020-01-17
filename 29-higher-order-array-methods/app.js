/**
 * Higher Order Array Methods.
 *
 */

const logStatus = msg => {
	document.querySelector('#status').innerHTML += `<p>${msg}</p>`;
}

document.querySelector('form').addEventListener('submit', e => {
	e.preventDefault();

	logStatus("Form is being submitted");

	// const data = {};
	// document.querySelectorAll('input').forEach(input => {
	// 	data[input.id] = input.value;
	// });

	const realArray = Array.from(document.querySelectorAll('input'));

	const data = realArray.reduce((sum, input) => {
		sum[input.id] = input.value;
		return sum;
	}, {});

	const jsonData = JSON.stringify(data);
	logStatus(jsonData);

	/*
	const input_name = document.querySelector('#name').value;
	const input_address = document.querySelector('#address').value;
	const input_postal = document.querySelector('#postal').value;
	const input_city = document.querySelector('#city').value;
	const input_phone = document.querySelector('#phone').value;
	const input_email = document.querySelector('#email').value;

	const data = {
		name: input_name,
		address: input_address,
		postal: input_postal,
		city: input_city,
		phone: input_phone,
		email: input_email,
	};

	const jsonData = JSON.stringify(data);
	logStatus(jsonData);
	*/
});

