/**
 * ES6 functions.
 *
 */

// spread
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
