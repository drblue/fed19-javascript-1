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

r = 10;
x = calcArea(r);
console.log(`The area of a circle with radius ${r} is ${x}.`);

r = 20;
x = calcArea(r);
console.log(`The area of a circle with radius ${r} is ${x}.`);

r = 30;
x = calcArea(r);
console.log(`The area of a circle with radius ${r} is ${x}.`);
