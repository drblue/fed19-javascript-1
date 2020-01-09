/**
 * OOP - Object-Oriented Programming.
 *
 * Classes.
 *
 */

class House {
	constructor(doors, windows, floors) {
		this.address = "";
		this.doors = doors;
		this.windows = windows;
		this.floors = floors;
		this.owner = false;
	}
	setOwner(name) {
		this.owner = name;
	}
}

const my_house = new House(2, 4, 1);
my_house.setOwner("Meeeee!");

const neiiiighbour = new House(2, 4, 1);
neiiiighbour.setOwner("My neighbour");


class Product {
	constructor(name, price, stock) {
		this.name = name;
		this.price = price;
		this.stock = stock;
	}

	addStock(amount) {
		this.stock += amount;
	}

	getPrice() {
		return this.price;
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

class Basket {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		if (product.getStock() >= 1) {
			this.products.push(product);
			product.decreaseStock(1);
			return true;
		} else {
			return false;
		}
	}

	calcTotal() {
		return this.products
			.map(product => product.getPrice())
			.reduce((sum, price) => sum + price, 0);
	}

	printShoppingInfo() {
		console.log(`This basket has ${this.products.length} products with a total value of ${this.calcTotal()}`);
	}
}

const pelles_basket = new Basket();
const alicias_basket = new Basket();

const bananana = new Product("Bananana", 14.5, 100);
const bapple = new Product("Bapple", 5, 20);
const orange = new Product("Orange", 42, 2);

pelles_basket.addProduct(bananana);
pelles_basket.addProduct(bapple);

alicias_basket.addProduct(bananana);
alicias_basket.addProduct(orange);
alicias_basket.addProduct(bapple);

pelles_basket.printShoppingInfo();
alicias_basket.printShoppingInfo();
