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
	{sku: 'SHELLS', name: 'red shells', price: 50, stock: 0},
	{sku: 'GREEN-SHELLS', name: 'green shells', price: 30, stock: 1337},
	{sku: 'MUSHROOM-3', name: 'mushroom', price: 40, stock: 0},
	{sku: 'BANANANA', name: 'banana skin', price: 10, stock: 2},
];

/*
const outOfStock = products
	.filter(product => product.stock === 0)
	.sort((a,b) => {
		if (a.sku > b.sku) {
			return 1;
		} else if (a.sku < b.sku) {
			return -1;
		}
		return 0;
	});
console.log("Out of stock products", outOfStock);
*/

/*
const productsOnSale = products
	.filter(product => product.stock > 0)
	.map(product => {
		return {
			sku: product.sku,
			name: product.name,
			price: product.price / 2,
			stock: product.stock
		};
	});
console.log("Products on sale with new prices", productsOnSale);
*/

const skusInStock = products
	.filter(product => product.stock > 0)
	.map(product => product.sku);

console.log("Our products are:", products);
console.log("Our skusInStock are:", skusInStock);

const totalProductsInStock = products.reduce((sum, product) => sum + product.stock, 0);
console.log(`totalProductsInStock: ${totalProductsInStock} products`);
