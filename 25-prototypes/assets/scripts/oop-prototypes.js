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
	return this;
}
User.prototype.logout = function() {
	console.log(`${this.username} just logged out`);
	return this;
}
User.prototype.incScore = function() {
	this.score += 1;
	console.log(`${this.username} has a score of ${this.score}`);
	return this;
}

function Teacher(username, email) {
	User.call(this, username, email);
	this.title = "ninja";
}

Teacher.prototype = Object.create(User.prototype);
// Teacher.prototype = User.prototype;

Teacher.prototype.gradeUser = function() {
	// grade user
	console.log("All users are gradable");
	return this;
}


const userJohan = new Teacher(
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
