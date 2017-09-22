import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.onIngredientAdded.subscribe(
      (ingredient : Ingredient) => {
        this.shoppingListService.addIngredient(ingredient);
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );

    this.shoppingListService.onIngredientsAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.shoppingListService.getIngredients();
      }
    )
  }



}
