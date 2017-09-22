import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    onIngredientAdded = new EventEmitter<Ingredient>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Butter', 10)
    ];
    getIngredients() {
        return this.ingredients.slice(); // return a copy of property
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}