/**
 * OOP - Object-Oriented Programming.
 *
 * Recipes.
 *
 */

const pancakes = new Recipe("Pannkakor", "Pelles pompösa pannkakor");

pancakes.addIngredient("1", "ägg");
pancakes.addIngredient("2 dl", "mjölk");
pancakes.addIngredient("300 g", "mjöl");
pancakes.addBasicIngredient("salt");

pancakes.addInstruction("Ring en livlina.");

document.querySelector('#recipes').innerHTML += pancakes.getHTML();


const omelett = new Recipe("Säg Omelett!", "Omelett - rätt å slätt");
omelett.addIngredient("6", "ägg");
omelett.addIngredient("1 dl", "mjölk");
omelett.addBasicIngredient("salt och peppar");
omelett.addIngredient("2 msk", "smör");

omelett.addInstruction("Vispa ihop ägg, mjölk, salt och peppar lätt, så att allt precis bara blandas.");
omelett.addInstruction("Hetta upp en stekpanna och låt matfettet fräsa så att det får en aning färg.");
omelett.addInstruction("Häll i omelettsmeten. Rör med en gaffel så att lös smet kan rinna ner mot bottnen. Omeletten är klar när den fortfarande är krämig på ytan och har släppt i kanterna. Vik omeletten dubbel och servera.");

document.querySelector('#recipes').innerHTML += omelett.getHTML();
