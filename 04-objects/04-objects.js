/**
 * OBJECTS
 *
 * this
 */

let my_cat = {
	name: "Mr Fluffles",
	age: 7,
	legs: 4,
	speak: () => {
		// with arrow functions, `this` will reference the context of the caller
		// with normal functions, `this` will be bound to the context of the object
		console.log("this from within my_cat", this);
		console.log("My name is", this.name);
	}
};

let speak = () => {
	// do something
}
speak();

console.log("this from the global context", this);
my_cat.speak();
