/**
 * Repetition.
 *
 */

let johan = {
	name: "Johan",
	points: 42
};

let johan2 = johan;

let peter = {
	name: "Peter",
	points: 4
};

const addTenPoints = function(user) {
	user.points = user.points + 10;
	return user.points;
}

console.log("Johans points before addTenPoints()", johan.points); // 42
addTenPoints(johan);
console.log("Johans points after addTenPoints()", johan.points); // 52

console.log("Johan 2's points addTenPoints()", johan2.points); // 52
