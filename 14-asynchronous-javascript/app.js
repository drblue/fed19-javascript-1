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

// dogs callback
const logDogs = (err, dogs) => {
	console.log("Dogs callback");

	if (err) {
		// yep, err was truth-y
		alert("Error getting dogs");
		return;
	}

	dogs.forEach(dog => console.log(dog));
};

console.log("Getting dogs..");

// get dogs from server
getJSON('pets/dogs.json', logDogs);

// feed callback some array-data
logDogs(undefined, [
	{ name: "Nando", age: 7 }
]);

// get external data
getJSON('https://jsonplaceholder.typicode.com/users', (err, data) => {
	console.log("Users callback");

	if (err) {
		alert("Error getting users");
		return;
	}

	data.forEach(user => {
		console.log(`User's name is ${user.name}`);
	});
});

console.log("All requests are sent");
