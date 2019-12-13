/**
 * Asynchronous JavaScript.
 *
 */

console.log("Preparing request to be sent");

const request = new XMLHttpRequest();
let todos;

request.addEventListener('readystatechange', () => {
	if (request.readyState === 4) {
		if (request.status !== 200) {
			console.error("Something went wrong with the request, we didn't get 200 OK in response.", request);
		} else {
			console.log("Got 200 OK as a response");

			cats = JSON.parse(request.responseText);
			console.log("My cats are", cats);

			document.querySelector('#cats').innerHTML = "<ul></ul>";
			const catsEl = document.querySelector('#cats ul');
			cats.forEach(cat => {
				let catEl = document.createElement('LI');
				catEl.innerHTML = `Cat ${cat.name} is ${cat.age} years old`;
				catsEl.append(catEl);
			});
		}
	}
});

request.open('GET', 'pets/cats.json');
request.send();

console.log("Request sent");
