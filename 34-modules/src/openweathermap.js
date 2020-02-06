/**
 * Open Weather Map API module.
 *
 */

const API_URL = `http://api.openweathermap.org/data/2.5`;
const API_KEY = `&appid=a9f6719e37f20890ebff5d91724dec1f`;

const getEndpoint = async endpoint => {
	const request = await fetch(`${API_URL}/${endpoint}${API_KEY}`);
	return await request.json();
};

const getCurrentWeather = async city => {
	const data = await getEndpoint(`weather?q=${city}&units=metric`);

	return {
		temp: data.main.temp,
		humidity: data.main.humidity,
		city: data.name,
	};
}

export {
	getCurrentWeather
};
