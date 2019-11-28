/**
 * Repetition.
 *
 */

let user1_name = "Johan";
let user1_points = 42;

let user2_name = "Peter";
let user2_points = 4;

let usernames = ["Johan", "Peter"];
let userpoints = [42, 4];

let user1 = {
	name: "Johan",
	points: 42,
	getInfo: function() {
		if (this.points !== null) {
			console.log(`User ${this.name} has ${this.points} points.`);
		} else {
			console.log(`User ${this.name} hasen't had their exam audited.`);
		}
	}
};

let user2 = {
	name: "Bus-Peter",
	points: null,
	getInfo: function() {
		if (this.points !== null) {
			console.log(`User ${this.name} has ${this.points} points.`);
		} else {
			console.log(`User ${this.name} hasen't had their exam audited.`);
		}
	},
	school: "Medieinstitutet"
};

user2.getInfo(); // "User Bus-Peter hasen't had their exam audited."

// Some time later
user2.points = 4;

user2.name = null;

user2.getInfo(); // "User Bus-Peter has 4 points."


/*
let users = [user1, user2];
users.forEach(function(user) {
	user.getInfo();
});
*/

/*
const outputUserInfo = function(user) {
	console.log(`User ${user.name} (${user.name.length} chars long) has ${user.points} points.`);
}

outputUserInfo(user1);
outputUserInfo(user2);
*/

/*
user1.getInfo();
user2.getInfo();
*/
