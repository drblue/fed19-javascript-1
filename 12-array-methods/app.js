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

/*
const points = [42, 3, 16, 8, 84];

const filteredPoints = [];
for (let i = 0; i < points.length; i++) {
	if (points[i] > 20) {
		filteredPoints.push(points[i]);
	}
}
console.log("Points before filter", points);

const filteredPoints = points.filter(function(point) {
	if (point > 20) {
		return true;
	} else {
		return false;
	}
});

console.log("Points after filter", points);
console.log("Filtered points", filteredPoints);
*/

const cats = [
	{ name: "Picatso", age: 8 },
	{ name: "William Shakespaw", age: 12 },
	{ name: "Mega-bite", age: 1 },
	{ name: "Chairwoman Miao", age: 17 },
	{ name: "Notorious C.A.T", age: 3 },
];

/*
const seniorCats = [];
for (let i = 0; i < cats.length; i++) {
	let cat = cats[i];
	if (cat.age >= 7) {
		seniorCats.push(cat);
	}
}
*/
// const seniorCats = cats.filter(cat => {
// 	return cat.age >= 7;
// });

const seniorCats = cats.filter(cat => cat.age >= 7);

console.log("Senior cats", seniorCats);
