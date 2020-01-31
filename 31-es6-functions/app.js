/**
 * ES6 functions.
 *
 */

// rest
const double = (...nums) => {
	console.log(nums);
	return nums.map(num => num * 2);
}

const sum = (...nums) => {
	return nums.reduce((sum, num) => sum + num, 0);
};

const doubledNumbers = double(1, 1, 2, 3, 5, 8, 13, 21);
console.log("Doubled numbers:", doubledNumbers);

const sumNumbers = sum(1, 1, 2);
console.log("Sum of numbers:", sumNumbers);


// spread (arrays)
const some_people = ['Albert', 'Berit', 'Carl'];
const other_people = ['David', 'Erik', 'Frida'];

const people = ['Harald', 'Ivar', ...some_people, ...other_people];

console.log('People', ...people);

const numbers = [1, 2, 4, 8, 16, 32, 64];
const more_numbers = [...numbers, 128, 256, 512, 1024, 2048, 4096, 8192, 16384];
console.log('Numbers:', ...more_numbers);

// spread (objects)
const albert = { name: "Albert", grade: 4 };
// const berit = albert;
// berit.name = "Berit";

const berit = { ...albert, name: "Berit", year: 3 };

console.log('Albert', albert);
console.log('Berit', berit);
