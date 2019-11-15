/**
 * Document Object Model (DOM).
 *
 */

let link = document.querySelector('#link1');
let href = link.getAttribute('href');

console.log(`#link1 has href-attribute '${href}'`);
link.innerText = "Have you bing:ed it?";

// change href-attribute
link.setAttribute('href', 'https://www.bing.com');
