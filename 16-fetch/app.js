/**
 * Fetch.
 *
 */

/*
// fetch json
fetch('pets/birds.json')
.then(response => response.json())
.then(data => {
	console.log("Response data is:", data);
})
.catch(err => {
	console.error("Fetch returned an error", err);
});

// fetch text
fetch('lorem.txt')
.then(response => response.text())
.then(text => console.log("Text is:", text))
.catch(err => console.error("Text catch:", err));
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

fetch("pets/birds.json")
.then(response => response.json())
.then(data => {
	renderPetList("Birds", data);

	return fetch("pets/cats.json");
})
.then(response => response.json())
.then(data => {
	renderPetList("Cats", data);

	return fetch("pets/dogs.json");
})
.then(response => response.json())
.then(data => {
	renderPetList("Dogs", data);
})
.catch(err => {
	console.error(err);
	petsWrapperEl.innerHTML = `<div class="alert alert-warning"><strong>Promise rejected. The stated reason was:</strong> ${err}</div>`;
});

console.log("All requests are sent");
