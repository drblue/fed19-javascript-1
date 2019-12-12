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

			todos = JSON.parse(request.responseText);
			console.log("My todos are", todos);
		}
	}
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

console.log("Request sent");
