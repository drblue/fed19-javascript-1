/**
 * OBJECTS
 *
 * All Your Object Belong To Me.
 */

let my_cat = {
	name: "Mr Fluffles",
	age: 7,
	legs: 4,
	length: 30,
	color: "angry",
	speak: function() {
		alert("Meow!");
	},
	speakHungry: function() {
		alert("Meooooooooooooooooow!");
	},
	sayHi: function() {
		return `Hi my name is ${this.name} and I'm ${this.age} years old`;
	},
	likesBoxes: function() {
		return true;
	}
};

console.log(my_cat);
console.log(my_cat.length);

/*
let students = [
	{
		name: "Adam",
		grade: "C",
		schoolClass: "9A",
		city: "Malmö",
		age: 15,
		pets: ["Mr Bazooka", "Fluffles"],
		countPets: function() {
			return this.pets.length;
		}
	},
	{
		name: "Thomas",
		grade: "F",
		schoolClass: "9A",
		city: "Lund",
		age: 14.7,
		pets: [],
		countPets: function() {
			return this.pets.length;
		}
	},
	{
		name: "Tiffany",
		grade: "F",
		schoolClass: "8B",
		city: "Staffanstorp",
		age: 42,
		pets: ["Gun"],
		countPets: function() {
			return this.pets.length;
		}
	}
];

students.forEach(student => {
	console.log(`${student.name} is ${student.age} years old`);
	console.log(`${student.name} school-class is ${student.schoolClass} and he/she lives in ${student.city}`);

	console.log(`${student.name} has ${student.countPets()} pets named ${student.pets.join(', ')}`);
});
*/
