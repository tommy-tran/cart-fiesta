import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mac and Cheese', 'Simply a test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
