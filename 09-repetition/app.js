/**
 * Repetition.
 *
 */

const add = (a, b) => {
	return a + b;
}

const subtract = function(a, b) {
	return a - b;
}

const showMathResult = function(mathoperation, x, y) {
	const sum = mathoperation(x, y);
	console.log("The sum is: " + sum);
}

// showMathResult(add, 4, 2);
// showMathResult(subtract, 4, 2);


const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
const logStuff = function(stuff) {
	console.log("The stuff is", stuff);
}

numbers.forEach(logStuff);
