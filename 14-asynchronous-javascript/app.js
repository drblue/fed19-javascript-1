/**
 * Asynchronous JavaScript.
 *
 */

const getCats = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			if (request.status !== 200) {
				console.error("Something went wrong with the request, we didn't get 200 OK in response.", request);
				callback("Something went wrong with the request, we didn't get 200 OK in response.");
			} else {
				console.log("Success in getting cats");
				let cats = JSON.parse(request.responseText);
				callback(undefined, cats);
			}
		}
	});

	request.open('GET', 'pets/cats.json');
	request.send();
	console.log("Request for cats sent");
};

console.log("Getting cats..");

getCats((err, cats) => {
	console.log("getCats callback");

	// check if something went wrong
	if (err) {
		// yep, err was truth-y
		alert("Error getting cats");
		return;
	}

	// all is well
	document.querySelector('#cats').innerHTML = "<ul></ul>";
	const catsEl = document.querySelector('#cats ul');
	cats.forEach(cat => {
		let catEl = document.createElement('LI');
		catEl.innerHTML = `Cat ${cat.name} is ${cat.age} years old`;
		catsEl.append(catEl);
	});
});

getCats((err, data) => {
	console.log("Got cats for second time");

	if (err) {
		// yep, err was truth-y
		alert("Error getting cats the second time");
		return;
	}

	data.forEach(cat => console.log(cat));
});



console.log("All requests are sent");
