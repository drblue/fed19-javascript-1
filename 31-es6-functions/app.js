/**
 * ES6 functions.
 *
 */

const getWeather = () => {
	const cityName = "Malmö";
	const temperature = 8;
	const humidity = 91;
	const percipitation = 9;

	return {
		cityName,
		temperature,
		humidity,
		percipitation
	};
}

// const currentWeather = getWeather();
// const cityName = currentWeather.cityName;
// const temperature = currentWeather.temperature;
// const humidity = currentWeather.humidity;
// const percipitation = currentWeather.percipitation;

const { cityName, temperature, humidity, percipitation } = getWeather();
console.log(`It's ${temperature} C in ${cityName} right now.`);


const getUser = () => {
	return {
		username: "jn",
		name: "Johan Nordström",
		level: 1337,
		pets: 2,
		highscore: 42,
		is_admin: true,
	};
};

const { username, level } = getUser();
// console.log(user);
// console.log(`User ${user.username} is at level ${user.level}`);
console.log(`User ${username} is at level ${level}`);
