class Account {
	constructor(name) {
		this.name = name;
		this.interest = 0;
		this.transactions = [];
	}

	addTransaction(amount) {
		this.transactions.push(amount);
	}

	deposit(amount) {
		this.addTransaction(amount);
	}

	withdraw(amount) {
		this.addTransaction(-amount);
	}

	getBalance() {
		return this.getTransactions().reduce((sum, amount) => sum + amount, 0);
	}

	getInterest() {
		return this.getBalance() * this.interest;
	}

	getInterestRate() {
		return this.interest;
	}

	getTransactions() {
		return this.transactions;
	}
}

class SavingsAccount extends Account {
	constructor(name, interest = 0.05) {
		super(name);
		this.interest = interest;
	}
}

class CreditAccount extends Account {
	constructor(name, interest = 0.2) {
		super(name);
		this.interest = interest;
	}
}
