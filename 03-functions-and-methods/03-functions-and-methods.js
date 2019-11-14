/**
 * FUNCTIONS
 *
 */

// Function Declaration
/*
function getRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}
*/

/*
// Function Expression
const getRandomNumber = function(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}
*/

// Arrow Function (Expression)
/*
const getRandomNumber = (max) => {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const getRandomNumber = max => {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}
*/

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max)) + 1;


// Get me 20 random numbers between 1-50, plz
for (let i = 0; i < 20; i++) {
	console.log("Random number", getRandomNumber(50));
}
