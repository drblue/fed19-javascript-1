/**
 * FUNCTIONS
 *
 * Calling functions from within functions.
 */

const makeMoreExciting = function(txt) {
	return txt + "!!!!!!";
};

const yellIt = function(txt) {
	/*
	let exciting = makeMoreExciting(txt);
	let yelling = exciting.toUpperCase();
	return yelling;
	*/

	return makeMoreExciting(txt).toUpperCase();
}

console.log(makeMoreExciting("coffee is good"));
console.log(yellIt("coffee is good"));
