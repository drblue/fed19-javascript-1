/**
 * Document Object Model (DOM).
 *
 */

let div_error = document.querySelector('div.error');
console.log(div_error.classList);
// div_error.classList.add('alert');
// div_error.classList.remove('alert');
div_error.classList.toggle('alert'); // adds the class if it does not exist. removes the class if it exists.
