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
	new Bicycle("Bicycle #001"),
];

fleet.forEach(vehicle => {
	if (vehicle.hasEngine()) {
		console.log(vehicle.getInfo() + " BRUMMMM!");
	} else {
		console.log(vehicle.getInfo());
	}
});
