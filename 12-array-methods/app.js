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

/*
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const blackFridayPrices = [];
for (let i = 0; i < prices.length; i++) {
	let price = prices[i];
	blackFridayPrices.push(price / 2);
}

const blackFridayPrices = prices.map(price => price / 2);

console.log("Regular sale prices", prices);
console.log("Black Friday prices", blackFridayPrices);
*/

const products = [
	{name: 'gold star', price: 20},
	{name: 'mushroom', price: 40},
	{name: 'green shells', price: 30},
	{name: 'banana skin', price: 10},
	{name: 'red shells', price: 50}
];

// const saleProducts = products.map(product => {
// 	return {
// 		name: product.name,
// 		price: product.price / 2
// 	};
// });
const saleProducts = products.map(product => {
	if (product.price >= 30) {
		return {
			name: product.name,
			price: product.price / 2
		};
	} else {
		return product;
	}
});
console.log("products", products);
console.log("saleProducts", saleProducts);
