/**
 * async/await.
 *
 */

const userCardsEl = document.querySelector('#user-cards');

const getUsers = async () => {
	const response = await fetch('https://randomuser.me/api/?results=4');
	const data = await response.json();

	// loop over result
	data.results.forEach(user => {
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
};

getUsers();
