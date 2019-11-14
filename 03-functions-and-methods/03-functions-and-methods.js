/**
 * FUNCTIONS
 *
 * Callbacks
 */

let students = ["Adam", "Thomas", "Max", "Sven", "Bengt"];

/*
for (let i = 0; i < students.length; i++) {
	let student = students[i];
	console.log(`Student name: ${student}`);
}
*/

/*
// Declare the variable logStudentName containing a function, then pass that variable as a parameter to the `forEach()`-method on the `students`-array.
const logStudentName = function(name, index) {
	console.log(`Student at position ${index} is named: ${name}`);
}
students.forEach(logStudentName);
*/

// Pass an anonymous function as a parameter to the `forEach()`-method on the `students`-array.
students.forEach(function(name, index) {
	index++;
	console.log(`Student at position ${index} is named: ${name}`);
});
