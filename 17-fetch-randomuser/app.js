/**
 * Fetch.
 *
 */

const userCardsEl = document.querySelector('#user-cards');

const getUsers = () => {
	fetch('https://randomuser.me/api/')
	// fetch('https://randomuser.me/ewwerwerewr')
	.then(response => {
		console.log("Response is:", response);
		// check if response.ok is true,
		// and if not, throw an error
		if (!response.ok) {
			throw new Error('Response was not ok.');
		}

		return response.json();
	})
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
	})
	.catch(err => {
		console.error("Something went very wrong! Error was:", err);
	});
};

getUsers();
