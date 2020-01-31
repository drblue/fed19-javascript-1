/**
 * ES6 functions.
 *
 * Sets
 */

/*
// Arrays with duplicate values
const names = ['Albert', 'Berit', 'Carl', 'David', 'Berit'];
const numbers = [1, 1, 2, 3, 5, 8, 8, 13, 21];

console.log('names:', names);
console.log('numbers:', numbers);

// Sets
// const uniqueArrayValues = arr => {
// 	return [...new Set(arr)];
// };
const uniqueArrayValues = arr => [...new Set(arr)];

const namesSet = new Set(names);
const numbersSet = new Set(numbers);

console.log('namesSet:', namesSet);
console.log('numbersSet:', numbersSet);

// const uniqueNames = [...namesSet];
// const uniqueNames = [...new Set(names)];
console.log('uniqueNames:', uniqueArrayValues(names));
console.log('uniqueNumbers:', uniqueArrayValues(numbers));

namesSet.add('Ivan');
namesSet.add('Ivan');
namesSet.delete('Albert');
namesSet.forEach(name => console.log(name));

const ivanExists = namesSet.has('Ivan');
const albertExists = namesSet.has('Albert');
console.log("Does namesSet have 'Ivan'?", ivanExists);
console.log("Does namesSet have 'Albert'?", albertExists);
*/

const points = new Set();
points
	.add(20)
	.add(25)
	.add(30)
	.add(25);

console.log(points);
