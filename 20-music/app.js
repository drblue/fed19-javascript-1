/**
 * 🎧.
 *
 */

const search = async () => {
	const request = await fetch("https://deezerdevs-deezer.p.rapidapi.com/swqeqweearch?q=sia%20unstoppable", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "06ebd6b4ffmsh9f40daeb7de6cefp160b3ejsn550347289560"
		}
	});
	if (!request.ok) {
		throw new Error(`Request was not OK. Status Code returned was: ${request.status}.`);
	}
	const response = await request.json();
	return response;
}

search()
	.then(response => {
		console.log("Got data back!", response);
	})
	.catch(err => {
		console.error("Got an error :(", err);
	});
