/**
 * break & continue
 */

let arr = [
	3, -1, 9, 42
];

let points = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 0) {
		console.log(`${arr[i]} is less than 0, won't subtract points`);
		continue;
	}

	console.log(`Adding ${arr[i]} to points`);
	points += arr[i];
}

console.log("Points are", points);
