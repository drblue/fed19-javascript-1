class Vehicle {
	constructor(name) {
		this.name = name;
		this.doors = 0;
		this.engine = false;
		this.wheels = 0;
		this.fuel = "Unknown";
	}

	hasEngine() {
		return this.engine;
	}

	getInfo() {
		return `Hi, I am a vehicle called ${this.name}.`;
	}
}

class Bicycle extends Vehicle {
	constructor(name) {
		super(name);

		this.wheels = 2;
	}
}

class MotorVehicle extends Vehicle {
	constructor(name) {
		super(name);

		this.engine = true;
	}
}

class Car extends MotorVehicle {
	constructor(name, doors, fuel, license_plate) {
		super(name);

		this.doors = doors;
		this.fuel = fuel;
		this.wheels = 4;
		this.license_plate = license_plate;
	}

	getInfo() {
		return `Hi, I am a car called ${this.name} and I have ${this.doors} doors, ${this.wheels} wheels and runs on ${this.fuel} fuel.`;
	}

	getLicensePlate() {
		return this.license_plate;
	}
}

class MotorCycle extends MotorVehicle {
	constructor(name, fuel) {
		super(name);

		this.wheels = 2;
		this.fuel = fuel;
	}

	getInfo() {
		return `Hi, I am a motorcycle called ${this.name} and I have ${this.wheels} wheels and runs on ${this.fuel} fuel.`;
	}
}
