/**
 * OpenWeatherMap API.
 */

const API_KEY = 'a9f6719e37f20890ebff5d91724dec1f';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

// /weather?q=Malmö,se

const getCurrentWeather = async city => {
	// get weather for `city` from OpenWeatherMap API
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// convert response from JSON
	const data = await response.json();

	// return current weather
	return data;
};
