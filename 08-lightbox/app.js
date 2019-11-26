/**
 * Lightbox.
 *
 */

/*
Två möjliga tillvägagångssätt

1a. Hämta ut alla `a.photo`, loopa över dem och lägg till en
click-EventListener för varje element.

1b. Hämta ut `.photos`-elementet och lägg till en click-EventListener
på den. I EventListener:n, kolla om det som klickades på är
en IMG eller A-tagg.

2. Hämta ut A-taggens href och sätt på `#lightbox-wrapper img` src-attribut.

3. Lägg till klassen `show` på `#lightbox-wrapper`.

4. (Lägg till en click-EventListener på `#lightbox-wrapper` som tar bort `show`-klassen.)
*/

const lightboxWrapper = document.querySelector('#lightbox-wrapper');
const lightboxImg = document.querySelector('#lightbox-wrapper img');

// 1a.
document.querySelectorAll('a.photo').forEach(function(photo){
	photo.addEventListener('click', function(e) {
		// stop, don't follow link
		e.preventDefault();

		// console.log("you clicked on", e.target);
		// console.log("your parent is", e.target.parentElement);
		// console.log("your parents link is", e.target.parentElement.href);
		const img_src = e.target.parentElement.href;

		lightboxImg.src = img_src;
		lightboxWrapper.classList.add("show");
	});
});

// 1b.
document.querySelector('.photos').addEventListener('click', function(e) {
	e.preventDefault();

	if (e.target.tagName === "IMG") {
		// we know it's an image and not some margin, now get
		// image's parent (which is an `a`-tag) href-attribute
		const img_src = e.target.parentElement.href;

		lightboxImg.src = img_src;
		lightboxWrapper.classList.add("show");
	}
});

lightboxWrapper.addEventListener('click', function() {
	// hey lightboxWrapper, remove your "show" class
	lightboxWrapper.classList.remove("show");

	// empty lightboxImg.src
	lightboxImg.src = "";
});
