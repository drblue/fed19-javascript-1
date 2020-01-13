/**
 * OOP - Object-Oriented Programming.
 *
 * Prototypes.
 *
 */

function User(username, email) {
	this.username = username;
	this.email = email;
	this.score = 0;
}

User.prototype.login = function() {
	console.log(`${this.username} just logged in`);
}


const userJohan = new User(
	"Johan",
	"jn@thehiveresistance.com"
);
const userPeter = new User(
	"Peter",
	"peter@medieinstitutet.se"
);

console.log("userJohan", userJohan);
console.log("userPeter", userPeter);

userJohan.login();
userPeter.login();
