/**
 * OBJECTS
 *
 * All Your Object Belong To Me.
 */

let points = 42;
let pointsCopy = points;
console.log(`Points: ${points}, pointsCopy: ${pointsCopy}`);

pointsCopy = 1337;
console.log(`Points: ${points}, pointsCopy: ${pointsCopy}`);

let my_cat = {
	name: "Mr Fluffles",
	age: 7,
	legs: 4
};

let my_second_cat = my_cat; // this only copies the reference to the object, not the object itself
console.log(`My cat's name is: ${my_cat.name}`);
console.log(`My second cat's name is: ${my_second_cat.name}`);

my_second_cat.name = "Ms FLUFFY";
console.log(`My cat's name is: ${my_cat.name}`);
console.log(`My second cat's name is: ${my_second_cat.name}`);


const my_array = [
	"Item 1",
	"Item 2",
];

my_array.push("Item 3"); // this works because an array is an object and we only store the reference/pointer to the array as a constant.
console.log(my_array);

my_array = [
	"My new Item 1",
];
