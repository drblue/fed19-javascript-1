import "core-js";
import "regenerator-runtime/runtime";

import { setBackgroundColor, setTitle } from './dom';
import { getCurrentWeather } from './openweathermap';
// import { getCurrentWeather } from './randomweather';

console.log("Hello from src/index.js");

getCurrentWeather('Malmö')
	.then(currentWeather => {
		setTitle(`It's ${currentWeather.temp} degrees and ${currentWeather.humidity} % humidity in Malmö right now. 🥶`);
	})
	.catch(err => {
		setTitle(err);
	});
