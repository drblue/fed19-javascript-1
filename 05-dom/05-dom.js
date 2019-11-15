/**
 * Document Object Model (DOM).
 *
 */

let submit_button = document.querySelector('#submit');
submit_button.addEventListener('click', function(event) {
	event.preventDefault();

	let password = document.querySelector('#password');
	alert(`Your password is ${password.value} 😁`);
});

/*
let lis = document.querySelectorAll('li');
lis.forEach(li => {
	li.addEventListener('click', function(e) {
		console.log("You clicked something?", e.target.innerText);
	});
});
*/
