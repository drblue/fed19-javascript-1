/**
 * ☔️.
 *
 */

const renderAlert = (severity, msg) => {
	document.querySelector('#forecast').innerHTML =
		`<div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderCurrentWeather = data => {
	document.querySelector('#forecast').innerHTML = `
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
};

document.querySelector('#search-form').addEventListener('submit', e => {
	e.preventDefault();

	const city = document.querySelector('#query').value.trim();

	if (city.length < 2) {
		return;
	}

	getCurrentWeather(city)
		.then(data => {
			if (data.cod === 200) {
				renderCurrentWeather(data);
			} else if (data.cod == "404") { // sic! dumb api
				renderAlert('warning', 'Ajdå, den där staden fanns inte.');
			} else {
				// show warning alert
				renderAlert('warning', data.message);
			}
		})
		.catch(err => {
			// show danger alert
			renderAlert('danger', err);
		});
});
