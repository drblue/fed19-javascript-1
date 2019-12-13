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
				callback(`Did not get 200 OK in response from '${url}'.`);
			} else {
				console.log(`Success in getting data from '${url}'`);
				let data = JSON.parse(request.responseText);
				callback(undefined, data);
			}
		}
	});

	request.open('GET', url);
	request.send();
	console.log(`Request for data sent to '${url}'`);
};

/**
 * 1. Get `pets/pets.json`, wait for response. ✅
 *
 * 2. Based on response-array of `pets/pets.json` ✅,
 * make a request to the URL of each item (in parallel).
 *
 * 3. When we get a response back for each sub-request,
 * render the contents to their own UL-element.
 */

console.log("Getting pets..");
getJSON('pets/pets.json', (err, pets) => {
	console.log("Pets callback");

	// check if something went wrong
	if (err) {
		// yep, err was truth-y
		alert("Error getting pets");
		return;
	}

	// all is well
	console.log("Pets:", pets);

	pets.forEach(pet => {
		console.log(`Lets make a request to get us some ${pet.title} from '${pet.url}'`);
		// make request to `pet.url`, deal with response 😎
		// and render a UL to the DOM for each response 👨🏻‍🎨
	});
});

console.log("All requests are sent");
