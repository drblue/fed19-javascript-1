/**
 * Document Object Model (DOM).
 *
 */

/*
let listitems = document.querySelectorAll('#list li');
listitems.forEach(function(listitem) {
	listitem.addEventListener('click', function(e) {
		e.target.remove();
	});
});
*/

let list = document.querySelector('#list');
list.addEventListener('click', function(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle('completed');
	}
});

let createButton = document.querySelector('#create');
createButton.addEventListener('click', function() {
	// let newListItem = `<li>A New Item</li>`;
	// newListItem.addEventListener(); // not workey
	// list.innerHTML += newListItem;

	let newListItem = document.createElement('li');
	newListItem.innerText = prompt('Enter text', 'A New Item');
	list.append(newListItem);
});
