/**
 * OBJECTS
 *
 * All Your Object Belong To Me.
 */

// let students = ["Adam", "Thomas", "Max", "Sven", "Bengt"];
// let grade = ["C", "F", "A", "B", "D"];

let student = {
	name: "Adam",
	grade: "C",
	schoolClass: "9A",
	city: "Malmö",
	age: 15,
	pets: ["Mr Bazooka", "Fluffles"]
};

// console.log(student);
// console.log(student.name); // Adam
// console.log(student.grade); // C

// console.log(typeof student); // object

student.grade = "D";

// console.log(`Student ${student.name} in class ${student.schoolClass} got an ${student.grade}`);
console.log(`${student.name} is ${student.age} years old`);
console.log(`${student.name}s pet(s) are named ${student.pets.join(', ')}`);
