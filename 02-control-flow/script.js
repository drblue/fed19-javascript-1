/**
 * control flow
 */

const MAX_POINTS = 40;
const VG_POINTS = 33;
const G_POINTS = 26;
let points = 36;

if (points > MAX_POINTS) {
	console.log("You cheater!");
} else if (points >= VG_POINTS) {
	console.log("Your grade is VG!");
} else if (points >= G_POINTS) {
	console.log("Your grade is G!");
} else {
	console.log("Sorry, better luck next time!");
}
