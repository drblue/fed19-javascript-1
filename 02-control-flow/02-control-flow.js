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
		console.log("Inside inside if-statement", points);
	}
	console.log("After inside if-statement", points);
}

console.log("Outside if-statement", points);
*/

let users = ['Kalle', 'Pelle', 'Sven'];
let user;
for (let i = 0; i < users.length; i++) {
	let user = users[i];
	console.log(`User is ${user}`);
}
console.log("After for-loop, user is", user);
