import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  add( item ) {
    console.log(item);
    this.ingredients.push( new Ingredient(item.name, item.amount) );
  }

  delete() {
    this.ingredients.pop();
  }

  clear() {
    this.ingredients = [];
  }

  constructor() { }

  ngOnInit() {
  }

}
