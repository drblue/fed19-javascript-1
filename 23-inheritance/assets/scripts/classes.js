class Vehicle {
	constructor(name) {
		this.name = name;
		this.doors = 0;
		this.engine = false;
		this.wheels = 0;
		this.fuel = "Unknown";
	}

	getInfo() {
		return `Hi, I am a vehicle called ${this.name}.`;
	}
}

class Car extends Vehicle {
	constructor(name, doors, fuel, license_plate) {
		super(name);

		this.doors = doors;
		this.fuel = fuel;
		this.engine = true;
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

class MotorCycle extends Vehicle {
	constructor(name, fuel) {
		super(name);

		this.engine = true;
		this.wheels = 2;
		this.fuel = fuel;
	}

	getInfo() {
		return `Hi, I am a motorcycle called ${this.name} and I have ${this.wheels} wheels and runs on ${this.fuel} fuel.`;
	}
}
