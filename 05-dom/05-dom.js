/**
 * Document Object Model (DOM).
 *
 */

let div_error = document.querySelector('div.error');
div_error.children; // children of div.error. N.B.! Is a HTMLCollection and not a NodeList!
div_error.parentElement; // div.container
div_error.parentElement.parentElement; // body
div_error.previousElementSibling; // p.error
div_error.previousElementSibling.previousElementSibling; // p
div_error.nextElementSibling; // null
