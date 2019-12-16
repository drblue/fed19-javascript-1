/**
 * Promises.
 *
 */

/*
const isWeekend = true;

const getCookies = new Promise((resolve, reject) => {
	if (isWeekend) {
		resolve();
	} else {
		reject();
	}
});

getCookies.then(() => {
	alert("OMG I LOVE COOKIES");
}).catch(() => {
	alert("Nooooes, I'm sad");
});
*/


const getJSON = (url) => {

	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status !== 200) {
					console.error("Did not get 200 OK in response.", request);
					reject(`Request to '${url}' returned ${request.status} ${request.statusText}.`);
				} else {
					console.log(`Got 200 OK from request to '${url}'`);
					let data = JSON.parse(request.responseText);
					resolve(data);
				}
			}
		});

		request.open('GET', url);
		request.send();
		console.log(`Request for data sent to '${url}'`);
	});
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

const petsWrapperEl = document.querySelector('#pets-wrapper');

const renderPetList = (title, pets) => {
	let petsTitleEl = document.createElement("H2");
	petsTitleEl.innerText = title;

	let petsEl = document.createElement("UL");
	pets.forEach(pet => {
		let petEl = document.createElement("LI");
		petEl.innerHTML = `${pet.name} is ${pet.age} years old`;

		petsEl.append(petEl);
	});

	petsWrapperEl.append(petsTitleEl);
	petsWrapperEl.append(petsEl);
}

console.log("Getting birds..");
getJSON("pets/birds.json")
.then(data => {
	renderPetList("Birds", data);

	return getJSON("pets/cats.json");
})
.then(data => {
	renderPetList("Cats", data);

	return getJSON("pets/dogz.json");
})
.then(data => {
	renderPetList("Dogs", data);
})
.catch(err => {
	petsWrapperEl.innerHTML = `<div class="alert alert-warning"><strong>Promise rejected. The stated reason was:</strong> ${err}</div>`
});


/*

getJSON("pets/birds.json", (err, birds) => {
	// and render a UL to the DOM for each response 👨🏻‍🎨
	renderPetList("Birds", birds);

	// get cats
	getJSON("pets/cats.json", (err, cats) => {
		if (err) {
			alert("Error getting cats");
			return;
		}

		// and render a UL to the DOM for each response 👨🏻‍🎨
		renderPetList("Cats", cats);

		// get dogs
		getJSON("pets/dogs.json", (err, dogs) => {
			if (err) {
				alert("Error getting dogs");
				return;
			}

			// and render a UL to the DOM for each response 👨🏻‍🎨
			renderPetList("Dogs", dogs);
		});
	});
});
*/

console.log("All requests are sent");
