/**
 * OOP - Object-Oriented Programming.
 *
 * Classes.
 *
 */

class Product {
	constructor(name, price, stock) {
		this.name = name;
		this.price = price;
		this.stock = stock;
	}

	addStock(amount) {
		this.stock += amount;
	}

	getStock() {
		return this.stock;
	}

	inStock() {
		return this.stock > 0;
	}

	decreaseStock(amount = 1) {
		this.stock = this.stock - amount;
	}
}

const products = [
	new Product("Bananana", 14.5, 100),
	new Product("Bapple", 5, 20),
	new Product("Orange", 42, 2)
];

products[1].decreaseStock(2);

products[2].addStock(5);

products.forEach(product => {
	console.log(`${product.name} costs ${product.price} kr and we have ${product.stock} in stock.`);
});
