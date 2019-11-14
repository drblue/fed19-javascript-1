/**
 * FUNCTIONS
 *
 * Callbacks in 🔫⚔️.
 */

const student_list = document.querySelector('.students');

let students = ["Adam", "Thomas", "Max", "Sven", "Bengt"];

let html = ``;

students.forEach(student => {
	html += `<li>${student}</li>`;
});

student_list.innerHTML = html;
