/**
 * OOP - Object-Oriented Programming.
 *
 * Recipes.
 *
 */

const mammas_kokbok = new Cookbook("Mammas kokbok");

/**
 * Pannkakor
 */
const pancakes = new Recipe("Pannkakor", "Pelles pompösa pannkakor");

pancakes
	.addIngredient("1", "ägg")
	.addIngredient("2 dl", "mjölk")
	.addIngredient("300 g", "mjöl")
	.addBasicIngredient("salt")
	.addInstruction("Blanda. Stek. Ät.");

mammas_kokbok.addRecipe(pancakes);

/**
 * Omelett
 */
const omelett = new Recipe("Säg Omelett!", "Omelett - rätt å slätt");

omelett
	.addIngredient("6", "ägg")
	.addIngredient("1 dl", "mjölk")
	.addBasicIngredient("salt och peppar")
	.addIngredient("2 msk", "smör")
	.addInstruction("Vispa ihop ägg, mjölk, salt och peppar lätt, så att allt precis bara blandas.")
	.addInstruction("Hetta upp en stekpanna och låt matfettet fräsa så att det får en aning färg.")
	.addInstruction("Häll i omelettsmeten. Rör med en gaffel så att lös smet kan rinna ner mot bottnen. Omeletten är klar när den fortfarande är krämig på ytan och har släppt i kanterna. Vik omeletten dubbel och servera.");

mammas_kokbok.addRecipe(omelett);


/**
 * Display recipes
 */
// mammas_kokbok.getRecipes().forEach(recipe => {
// 	document.querySelector('#recipes').innerHTML += recipe.getHTML();
// });

/**
 * Display recipes containing 'mjölk'
 */
const recipes = mammas_kokbok.getRecipesContaining('smör');

document.querySelector('#recipes').innerHTML = `<p>${recipes.length} recept</p>`;
recipes.forEach(recipe => {
	document.querySelector('#recipes').innerHTML += recipe.getHTML();
});
