/**
 * Class Recipe
 */

class Cookbook {
	constructor(title) {
		this.title = title;
		this.recipes = [];
	}

	getTitle() {
		return this.title;
	}

	addRecipe(recipe) {
		this.recipes.push(recipe);
		return this;
	}

	getRecipes() {
		return this.recipes;
	}

	getRecipesContaining(ingredient_name) {
		// loopa över varje recept
		// för varje recept, kolla om ingredienslistan inkluderar ovan ingredient_name
		// om det är sant, inkludera receptet i den slutliga listan
		return this.recipes.filter(recipe => {
			return recipe.containsIngredient(ingredient_name);
		});
	}
}


class Recipe {
	constructor(title, description = '') {
		this.title = title;
		this.description = description;
		this.ingredients = [];
		this.instructions = [];
	}

	addBasicIngredient(item) {
		this.ingredients.push(new BasicIngredient(item));
		return this;
	}

	addIngredient(qty, item) {
		this.ingredients.push(new Ingredient(qty, item));
		return this;
	}

	containsIngredient(item) {
		const ingredient = this.ingredients.find(ingredient => {
			return ingredient.item.toLowerCase() === item.toLowerCase();
		});

		return typeof ingredient !== 'undefined';
	}

	getIngredients() {
		return this.ingredients.map(ingredient => {
			return ingredient.getInfo();
		});
	}

	addInstruction(instruction) {
		this.instructions.push(instruction);
		return this;
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
