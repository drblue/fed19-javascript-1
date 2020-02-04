/**
 * Random Weather module.
 *
 */

const getCurrentWeather = async city => {
	return {
		temp: Math.round(Math.random(1) * 10),
		humidity: Math.round(Math.random(1) * 100),
		city: city,
	};
}

export {
	getCurrentWeather,
};
