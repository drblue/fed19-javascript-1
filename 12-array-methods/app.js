/**
 * Higher Order Array Methods.
 *
 * .forEach()
 * .filter()
 * .map()
 * .reduce()
 * .sort()
 *
 * Method Chaining.
 *
 */

const prices = [20, 10, 15, 25, 30, 40, 80, 5];
const totalValue = prices.reduce(function(sum, price) {
	return sum + price;
}, 0);

console.log("totalValue", totalValue);

const valueOfExpensiveProducts = prices.reduce(function(sum, price) {
	if (price > 30) {
		return sum + price;
	}
	return sum;
}, 0);

console.log("valueOfExpensiveProducts", valueOfExpensiveProducts);
