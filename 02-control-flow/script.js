/**
 * control flow
 */

let avengers = ["Iron Man", "Black Widow", "Captain America", "Hulk", "Thor", "Spider-Man"]; // 6
//               0,          1,             2,                 3,      4,      5

console.log("There are " + avengers.length + " avengers");

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < avengers.length; j++) {
		console.log("I'm at loop " + i, avengers[j]);
	}
}

console.log("Det var allt för de 25 ørena");
