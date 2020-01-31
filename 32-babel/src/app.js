const getUser = () => {
	return {
		username: "jn",
		name: "Johan Nordström",
		level: 1337,
	};
}

class User {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class Admin extends User {
	constructor(name, title) {
		super(name);
		this.title = title;
	}

	getTitle() {
		return this.title;
	}
}
