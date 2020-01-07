/**
 * ☔️.
 *
 */

const renderCurrentWeather = data => {
	const template = `
		<div class="card">
			<img src="assets/images/forecast-banner.png" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="city">${data.name}, <span id="country">${data.sys.country}</span></h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
			</div>
		</div>
	`;

	document.querySelector('#forecast').innerHTML = template;
};

document.querySelector('#search-form').addEventListener('submit', e => {
	e.preventDefault();

	const city = document.querySelector('#query').value;

	if (city.length < 2) {
		return;
	}

	getCurrentWeather(city)
		.then(data => {
			if (data.cod === 200) {
				renderCurrentWeather(data);
			} else {
				// show what went wrong
				// document.querySelector('#forecast').innerHTML =
				// alert(data.message);
				throw new Error("Ajajajajajaj");
			}
		})
		.catch(err => {
			// network error?
			alert(err);
		});
});
