/**
 * SCOPE
 *
 * Global vs Local Scope
 *
 * Med `let` och `const` har vi scoped variables, vilket inte gick
 * med `var` som alltid gjorde dem globala (förutom i funktioner).
 */

/*
let points = 10;

if (true) {
	let points = 20;
	console.log("Inside if-statement", points);

	if (true) {
		let points = 30;
		console.log("Inside the inside if-statement", points);
	}
}

console.log("Outside if-statement", points);
*/

/*
var points = 10;

if (true) {
	var points = 20;
	console.log("Inside if-statement", points);

	if (true) {
		var points = 30;
		console.log("Inside the inside if-statement", points);
	}
}

console.log("Outside if-statement", points);
*/

/*
var points = 10;

function addPoints() {
	points = 20; // modifies points-variable in global scope
	// var points = 20; // redeclares points-variable in global scope and sets value to 20
}

console.log("points before function", points);
addPoints();
console.log("after function", points);
*/
