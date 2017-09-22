import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Mac and Cheese', 'Simply a test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}