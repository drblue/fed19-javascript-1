/**
 * Document Object Model (DOM).
 *
 */

let checkbox = document.querySelector('#okToSellEmail');
checkbox.addEventListener('click', function(e) {
	// checkbox.checked = true;
	console.log(this);

	setTimeout(function() {
		// this.checked = true;
		e.target.checked = true;
		// checkbox.checked = true;
	}, 1000);
});

/*
let lis = document.querySelectorAll('li');
lis.forEach(li => {
	li.addEventListener('click', function(e) {
		console.log("You clicked something?", e.target.innerText);
	});
});
*/
