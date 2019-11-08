/**
 * loose vs strict comparison
 */

let points = 25;
console.log("points", points);

// loose comparison (different data types can still be equal)
console.log("points == 25", points == 25);
console.log("points == '25'", points == '25');
console.log("points != 25", points != 25);
console.log("points != '25'", points != '25');

// strict comparison (compares both value and data type)
console.log("points === 25", points === 25);
console.log("points === '25'", points === '25');
console.log("points !== 25", points !== 25);
console.log("points !== '25'", points !== '25');
