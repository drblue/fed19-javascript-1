/**
 * Random Joke.
 *
 */

const jokeEl = document.querySelector('#joke');

const getJoke = async () => {
	const response = await fetch("https://jokeapi.p.rapidapi.com/category/programming", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "jokeapi.p.rapidapi.com",
			"x-rapidapi-key": "oTEGnlmaNq2QWB1BfUPqhGyqNmL9UrJ5"
		}
	});
	if (!response.ok) {
		throw new Error("Response was not OK.");
	}

	return await response.json();
}

const renderJoke = (joke) => {
	if (joke.type === "single") {
		jokeEl.innerHTML = joke.joke;

	} else if (joke.type === "twopart") {
		jokeEl.innerHTML = `<div id="setup">${joke.setup}</div>
		<div id="delivery">${joke.delivery}</div>`;

	} else {
		alert("Unknown joke type! Update code!");
	}
};

getJoke().then(renderJoke).catch(err => {
	alert("Error getting joke. Error was: " + err);
});
