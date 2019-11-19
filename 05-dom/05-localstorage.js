/**
 * My Localstorage Example
 *
 */

const updateWelcomeMsg = function(name) {
	document.querySelector("#welcome-msg").innerHTML = `Hi there, <em>${name}</em>!`;
}

const getFromLocalStorage = function(key) {
	if (typeof(Storage) !== "undefined") {
		return window.localStorage.getItem(key);
	}

	return false;
}

const saveInLocalStorage = function(key, value) {
	if (typeof(Storage) !== "undefined") {
		window.localStorage.setItem(key, value);
	}

	return false;
}

// Add click handler for setNameButton
let setNameButton = document.querySelector("#setNameButton");
setNameButton.addEventListener('click', function() {
	let name = prompt("What is your name?", "Rainman");

	// save to localstorage (if it exists)
	saveInLocalStorage('visitor_name', name);

	// update welcome msg
	updateWelcomeMsg(name);
});

// When the page loads, check localStorage for a visitor name
let name = getFromLocalStorage('visitor_name');
if (name) {
	updateWelcomeMsg(name);
}
