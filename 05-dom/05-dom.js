/**
 * Document Object Model (DOM).
 *
 */

// get by ID
let link1 = document.getElementById('link1');
console.log(link1);

/*
 * getElementByClassName and getElementsByTagName returns a
 * HTMLCollection which does NOT have a .forEach()-method
 */

// get by classname
let errors = document.getElementsByClassName('error');
console.log(errors);

// get by tag
let links = document.getElementsByTagName('a');
console.log(links);


/*
 * querySelectorAll returns a NodeList which DOES have a
 * .forEach()-method
 */

let queryLinks = document.querySelectorAll('a');
console.log(queryLinks);

queryLinks.forEach((item) => {
	console.log(item);
});
