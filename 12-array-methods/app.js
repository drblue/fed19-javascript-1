/**
 * Higher Order Array Methods.
 *
 * .forEach()
 * .filter()
 * .map()
 * .reduce()
 * .sort()
 * .find()
 *
 * Method Chaining.
 *
 */

const catnames = [
	"Picatso",
	"William Shakespaw",
	"Mega-bite",
	"Chairwoman Miao",
	"Notorious C.A.T",
];

/*
let megabite = catnames.find(catname => {
	if (catname === "Mega-bite") {
		return true;
	}
	return false;
});
console.log("Found Mega-Bite?", megabite);
*/

const cats = [
	{ name: "Picatso", age: 8 },
	{ name: "William Shakespaw", age: 12 },
	{ name: "Mega-bite", age: 1 },
	{ name: "Chairwoman Miao", age: 17 },
	{ name: "Notorious C.A.T", age: 3 },
];

/*
const megabite = cats.find(cat => {
	if (cat.name === "Mega-bite") {
		return true;
	}
	return false;
});
const foundCat = cats.find(cat => cat.name === "Chairwoman Miao");
console.log("Found cat?", foundCat);
*/

const products = [
	{sku: 'GOLD-STAR-1', name: 'gold star', price: 20, stock: 3},
	{sku: 'MUSHROOM-3', name: 'mushroom', price: 40, stock: 0},
	{sku: 'GREEN-SHELLS', name: 'green shells', price: 30, stock: 1337},
	{sku: 'BANANANA', name: 'banana skin', price: 10, stock: 2},
	{sku: 'SHELLS', name: 'red shells', price: 50, stock: 0}
];

const product = products.find(product => product.sku === 'MUSHROOM-3');
console.log("Found your product!", product);
if (product.stock > 0) {
	alert("Added to your basket");
} else {
	alert(`Sorry, we're out of stock on ${product.name}s`);
}
