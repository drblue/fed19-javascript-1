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

class ProductList {
	constructor() {
		this.productlist = [];
	}

	addProduct(product) {
		this.productlist.push(product);
		return this;
	}

	getProducts() {
		return this.products;
	}

	getProductsInStock() {
		return this.productlist.filter(product => product.stock > 1);
	}

	getProductByName(name) {
		return this.productlist.find(product => product.name === name);
	}
}


class Basket {
	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	addProduct(product) {
		product.decreaseStock();
		this.products.push(product);
		return this;
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

const productlist = new ProductList();
productlist.addProduct(new Product("Bananana", 14.5, 100))
	.addProduct(new Product("Bapple", 5, 20))
	.addProduct(new Product("Orange", 42, 2));

pelles_basket
	.addProduct(bananana)
	.addProduct(bapple)
	.addProduct(orange);

pelles_basket.addProduct(bananana)
.addProduct(bapple)
.addProduct(orange);


alicias_basket.addProduct(bananana);
alicias_basket.addProduct(orange);
alicias_basket.addProduct(bapple);

console.log("Pelles basket", pelles_basket.getProducts());
console.log("Alicias basket", alicias_basket.getProducts());



pelles_basket.printShoppingInfo();
alicias_basket.printShoppingInfo();
