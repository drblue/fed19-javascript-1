/**
 * OOP - Object-Oriented Programming.
 *
 * Inheritance.
 *
 */

const fleet = [
	new Vehicle("Generic Vehicle #001"),
	new Car("Bat-Mobile", 2, "awesomeness"),
	new MotorCycle("Bat-Cycle", "electric"),
];

fleet.forEach(vehicle => {
	console.log(vehicle.getInfo());
});
