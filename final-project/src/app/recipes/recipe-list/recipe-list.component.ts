import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'eggs', 'delicious egg yes boy', 'http://williamsonhospitality.com/blog/wp-content/uploads/2011/08/fried-egg.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
