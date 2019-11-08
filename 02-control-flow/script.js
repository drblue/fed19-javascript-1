/**
 * logical operators:
 * OR ||
 * AND &&
 */

let username = "johan";
// password can be 8-16 chars long.
let password = "asdf";
let fml = true;

let points = (8 + 2) * 4;

if (password.length >= 8 || (password === "admin" && username === "johan") || fml) {
	console.log("Password is MEGA-SECURE and between 8-16 chars, which is perfect.");
} else {
	console.log("Please choose another password.");
}
