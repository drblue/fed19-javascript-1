/**
 * OOP - Object-Oriented Programming.
 *
 * Classes.
 *
 */

class User {
	constructor(username, email){
		this.username = username;
		this.email = email;
		this.score = 0;
	}
	login(){
		console.log(`${this.username} just logged in`);
		return this;
	}
	logout(){
		console.log(`${this.username} just logged out`);
		return this;
	}
	incScore(){
		this.score += 1;
		console.log(`${this.username} has a score of ${this.score}`);
		return this;
	}
}

class Teacher extends User {
	constructor(username, email){
		super(username, email);
		this.title = "ninja";
	}
	gradeUser(){
		// grade user
		console.log("All users are gradable");
		return this;
	}
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
