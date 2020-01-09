/**
 * ☔️.
 *
 */

const renderAlert = (severity, msg) => {
	document.querySelector('#forecast').innerHTML =
		`<div class="alert alert-${severity}" role="alert">${msg}</div>`;
};

const renderCurrentWeather = data => {
	const conditions = data.weather.map(condition => `<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png">${condition.description}</li>`);

	const freshness = moment.unix(data.dt);

	const now = Math.round(Date.now() / 1000);

	// let image = "forecast-banner.png";
	// if (now > data.sys.sunset || now < data.sys.sunrise) {
	// 	image = 'night.svg';
	// } else {
	// 	image = 'day.svg';
	// }

	const image = (now > data.sys.sunset || now < data.sys.sunrise)
		? 'night.svg'
		: 'day.svg';

	document.querySelector('#forecast').innerHTML = `
		<div class="card">
			<img src="assets/images/${image}" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="city">${data.name}, <span id="country">${data.sys.country}</span></h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="humi">
					<span id="humidity">${data.main.humidity}</span>
					&percnt; humidity
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
				<ul class="conditions">${conditions.join('')}</ul>
				<p class="text-muted small">${freshness.fromNow()}</p>
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
