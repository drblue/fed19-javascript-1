/**
 * FUNCTIONS
 *
 */

let r;
let x;

// Function Declaration
function calcArea(radius) {
	console.log(`Let's calculate the area of radius ${radius}!`);
	let area = radius ** 2 * 3.1415;
	return area;
}

const RADIUS = [10, 20, 30, 5, 18, 42];
for (let i = 0; i < RADIUS.length; i++) {
	let a = calcArea(RADIUS[i]);
	console.log(`The area of a circle with radius ${RADIUS[i]} is ${a}.`);
}
