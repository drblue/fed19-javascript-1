/**
 * break & continue
 */

let arr = [
	3, 9, "banan", 42, false
];

let points = 0;
for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] !== "number") {
		console.log(`${arr[i]} is not a number, continuing on next item in array`);
		continue;
	}

	console.log(`Adding ${arr[i]} to points`);
	points += arr[i];
}

console.log("Points are", points);
