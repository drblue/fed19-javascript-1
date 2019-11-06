// Arrays
let avengers = [
	"Tony Stark",
	"The Hulk",
	"Thor",
	"Black Widow",
	"Captain America",
	"Loki"
];

console.log("There are " + avengers.length + " avengers in the database.");
// console.log("The first avenger is: " + avengers[0]);
// console.log("The second avenger is: " + avengers[1]);
// console.log("The third avenger is: " + avengers[2]);
// console.log("The fourth avenger is: " + avengers[3]);
// avengers[0] = "Iron Man";

console.log("The last added Avenger which has now been thrown out was: " + avengers.pop())

// console.log("Loki is at index " + avengers.indexOf("Loki"));
// console.log(avengers);
// let all_avengers =
console.log("All avengers: " + avengers.join(', '));

/*
let enemies = [12, 1337, 42];
console.log("There are " + enemies.length + " enemies in the database.");
console.log(enemies);
console.log(enemies[1]);
*/

let justice_league = ["Aqua-Man", "Flash", "Wonder Woman", "Superman", "Batman"];

// avengers.push(justice_league);
let epic_war = avengers.concat(justice_league);
console.log(epic_war);

// sort a..z
epic_war.sort();
console.log("Sorted characters " + epic_war.join(', '));
