/**
 * Asynchronous JavaScript.
 *
 */

const getJSON = (url, callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			if (request.status !== 200) {
				console.error("Did not get 200 OK in response.", request);
				callback("Did not get 200 OK in response.");
			} else {
				console.log("Success in getting data");
				let data = JSON.parse(request.responseText);
				callback(undefined, data);
			}
		}
	});

	request.open('GET', url);
	request.send();
	console.log(`Request for data sent to ${url}`);
};

console.log("Getting cats..");
getJSON('pets/cats.json', (err, cats) => {
	console.log("Cats callback");

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

console.log("All requests are sent");
