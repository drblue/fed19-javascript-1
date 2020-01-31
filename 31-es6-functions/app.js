/**
 * ES6 functions.
 *
 * Symbols
 */

const myFirstSymbol = Symbol('I am a symbol');
const mySecondSymbol = Symbol('I am a symbol');
console.log('myFirstSymbol:', myFirstSymbol);
console.log('mySecondSymbol:', mySecondSymbol);

// 🤯
const user = { name: "Cowboy Coder" };
user.noob_level = 1;
user['experience level'] = 0; // KIDS - DON'T DO THIS AT HOME!
user['is-admin'] = false;

user[Symbol('name')] = 'Mr Cowboy 🤠';
user[Symbol('name')] = 'Ms Cowgirl 🤠';


console.log(user);
