/**
 * Class Recipe
 */
class Recipe {
	constructor(title, description = '') {
		this.title = title;
		this.description = description;
		this.ingredients = [];
		this.instructions = [];
	}

	addBasicIngredient(item) {
		this.ingredients.push(new BasicIngredient(item));
	}

	addIngredient(qty, item) {
		this.ingredients.push(new Ingredient(qty, item));
	}

	getIngredients() {
		return this.ingredients.map(ingredient => {
			return ingredient.getInfo();
		});
	}

	addInstruction(instruction) {
		this.instructions.push(instruction);
	}

	getInstructions() {
		return this.instructions;
	}

	getHTML() {
		return `
			<div class="recipe">
				<h2>${this.title}</h2>
				<p>${this.description}</p>

				<h3>Ingredients</h3>
				<ul class="ingredients">
					<li>${this.getIngredients().join('</li><li>')}</li>
				</ul>

				<h3>Instructions</h3>
				<ol class="instructions">
					<li>${this.getInstructions().join('</li><li>')}</li>
				</ol>
			</div>
		`;
	}
}

class BasicIngredient {
	constructor(item) {
		this.item = item;
	}

	getInfo() {
		return this.item;
	}
}

class Ingredient extends BasicIngredient {
	constructor(qty, item) {
		super(item);
		this.qty = qty;
	}

	getInfo() {
		return `${this.qty} ${this.item}`;
	}
}
