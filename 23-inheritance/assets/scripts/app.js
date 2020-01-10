/**
 * OOP - Object-Oriented Programming.
 *
 * Inheritance.
 *
 */

const johans_account = new Account("Johans account");
johans_account.deposit(100);
johans_account.withdraw(50);
johans_account.deposit(75);
johans_account.withdraw(40);

console.log(`Johans account has balance:`, johans_account.getBalance());
console.log(`The interest would be:`, johans_account.getInterest());


const johans_savings = new SavingsAccount("Johans savings account");
johans_savings.deposit(1000);
johans_savings.deposit(1000);
johans_savings.deposit(1000);

console.log(`Johans savings account has balance:`, johans_savings.getBalance());
console.log(`The interest at ${johans_savings.getInterestRate() * 100}% would be:`, johans_savings.getInterest());


const johans_credit = new CreditAccount("Johans credit account");
johans_credit.withdraw(14990);
johans_credit.withdraw(595);

console.log(`Johans credit account has balance:`, johans_credit.getBalance());
console.log(`The interest at ${johans_credit.getInterestRate() * 100}% would be:`, johans_credit.getInterest());
