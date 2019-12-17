/**
 * async/await.
 *
 */

// async functions return a promise of future fulfillment
const getUsersAsyncAwait = async () => {
	const response = await fetch('https://randomuser.me/api/?results=4');
	const data = await response.json();

	// things I do here are executed when fetch is resolved AND
	// response.json() is resolved
	return data;
};

// same as above but "promise-based"
const getUsersPromise = () => {
	let result;

	fetch('https://randomuser.me/api/?results=4')
	.then(response => response.json())
	.then(data => {
		// do something with data
		result = data;
	});

	return result;
}

// getUsersAsyncAwait() returns a promise, so we have to chain a `.then()` on it to wait for fulfillment before we can access any
// response or data
const asyncResult = getUsersAsyncAwait();
asyncResult.then(result => {
	console.log("got async data:", result);
});

console.log('asyncResult', asyncResult); // this will be a promise

/*
const getUsersResult = getUsers();
getUsersResult.then(res => {

	console.log("Result", res);
});

console.log('getUsersResult:', getUsersResult);
*/


/*
const userCardsEl = document.querySelector('#user-cards');

const getUsers = () => {
	fetch('https://randomuser.me/api/?results=4')
	.then(response => response.json())
	.then(response => {
		// loop over result
		response.results.forEach(user => {
			const userHTML = `
				<div class="col mb-4">
					<div class="card bg-light text-dark">
						<img src="${user.picture.large}" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">${user.name.first} ${user.name.last}</h5>
							<p class="card-text">${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}</p>
							<p class="card-text">Phone: ${user.phone}</p>
						</div>
					</div>
				</div>
			`;

			userCardsEl.innerHTML += userHTML;
		});
	});
};

getUsers();
*/
