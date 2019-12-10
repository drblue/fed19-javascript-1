/**
 * Higher Order Array Methods.
 *
 * .forEach()
 * .filter()
 * .map()
 * .reduce()
 * .sort()
 *
 * Method Chaining.
 *
 */

const points = [42, 3, 16, 8, 84];
const catnames = [
	"Picatso",
	"William Shakespaw",
	"Mega-bite",
	"Chairwoman Miao",
	"Notorious C.A.T"
];

const cats = [
	{ name: "Picatso", age: 8 },
	{ name: "William Shakespaw", age: 12 },
	{ name: "Mega-bite", age: 1 },
	{ name: "Chairwoman Miao", age: 17 },
	{ name: "Notorious C.A.T", age: 3 },
];

const logCatname = catname => {
	console.log(`Cat is called ${catname}`);
}

const ourOwnForEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}
// ourOwnForEach(catnames, logCatname);
ourOwnForEach(catnames, function(catname) {
	console.log(catname);
});

// catnames.forEach(function(catname, i) {
// 	console.log(`Cat at index ${i} is ${catname}`);
// });
// catnames.forEach(logCatname);
