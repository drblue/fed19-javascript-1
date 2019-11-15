/**
 * Document Object Model (DOM).
 *
 */

let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

paragraphs.forEach((paragraph) => {
	console.log("Hello I am a paragraph", paragraph);
	console.log("innerText", paragraph.innerText);
	console.log("innerHTML", paragraph.innerHTML);
	paragraph.innerHTML = `<em>${paragraph.innerHTML}</em>`;
});
