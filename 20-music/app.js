/**
 * 🎧.
 *
 */

const searchResultsEl = document.querySelector('#search-results');

/** Get a JSON resource */
const getJSON = async (url) => {
	const request = await fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "06ebd6b4ffmsh9f40daeb7de6cefp160b3ejsn550347289560"
		}
	});
	if (!request.ok) {
		throw new Error(`Request was not OK. Status Code returned was: ${request.status}.`);
	}
	return await request.json();
}

/** Search for matches of any type */
const search = async (query) => {
	return getJSON(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`);
}

/** Search for Album matches only */
const searchAlbums = async (query) => {
	return getJSON(`https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${query}`);
}

/** Search for Artist matches only */
const searchArtists = async (query) => {
	return getJSON(`https://deezerdevs-deezer.p.rapidapi.com/search/artist?q=${query}`);
}

/** Search for Track matches only */
const searchTracks = async (query) => {
	return getJSON(`https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${query}`);
}

const renderSearchResponseAlbum = album => {
	// append HTML to searchResultsEl
	searchResultsEl.innerHTML += `
		<div class="col">
			<div class="card bg-light text-dark">
				<img src="${album.cover_big}" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${album.title}</h5>
					<h6 class="card-title">${album.artist.name}</h5>
					<p class="card-text">${album.nb_tracks} tracks</p>
				</div>
			</div>
		</div>
	`;
};

const renderSearchResponseArtist = artist => {
	// append HTML to searchResultsEl
	searchResultsEl.innerHTML += `
		<div class="col">
			<div class="card bg-light text-dark">
				<img src="${artist.picture_big}" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${artist.name}</h5>
					<h6 class="card-title">${artist.nb_fan} fans</h5>
					<p class="card-text">${artist.nb_album} albums</p>
				</div>
			</div>
		</div>
	`;
};

const renderSearchResponseTrack = track => {
	// append HTML to searchResultsEl
	searchResultsEl.innerHTML += `
		<div class="col">
			<div class="card bg-light text-dark">
				<img src="${track.album.cover_big}" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">${track.title}</h5>
					<h6 class="card-title">${track.artist.name}</h5>
					<p class="card-text">${track.album.title}</p>
					<p class="card-text">${Math.floor(track.duration / 60)} minutes ${track.duration % 60} seconds</p>
				</div>
			</div>
		</div>
	`;
};

const handleSearchResults = searchResults => {
	searchResultsEl.innerHTML = "";

	console.log("Response data", searchResults.data);
	if (searchResults.data.length < 1) {
		searchResultsEl.innerHTML = `<div class="alert alert-info">Sorry, no matches found for "${this.query.value}"</div>`;
	}

	searchResults.data.forEach(item => {
		switch (item.type) {
			case 'track':
				renderSearchResponseTrack(item);
				break;
			case 'artist':
				renderSearchResponseArtist(item);
				break;
			case 'album':
				renderSearchResponseAlbum(item);
				break;
			default:
				// show unknown search result type
				console.warn("Got search result for unknown type!", item);
				break;
		}
	});
};

const handleSearchError = err => {
	console.error("Got an error :(", err);
	searchResultsEl.innerHTML = `<div class="alert alert-danger">Error searching. Message was: "${err}"</div>`;
};

document.querySelector('#search-form').addEventListener('submit', function (e) {
	e.preventDefault();

	if (this.all.checked) {
		// search for any match
		search(this.query.value).then(handleSearchResults).catch(handleSearchError);

	} else if (this.artists.checked) {
		// search for only artist matches
		searchArtists(this.query.value).then(handleSearchResults).catch(handleSearchError);

	} else if (this.albums.checked) {
		// search for only album matches
		searchAlbums(this.query.value).then(handleSearchResults).catch(handleSearchError);

	} else if (this.tracks.checked) {
		// search for only track matches
		searchTracks(this.query.value).then(handleSearchResults).catch(handleSearchError);
	}
});
