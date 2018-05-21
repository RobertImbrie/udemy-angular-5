import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(
    private recipeService: RecipeService,
    private http: Http
  ) { }

  saveRecipes() {
    this.http.put('https://udemy-ng-http-510bf.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .subscribe(
        (response) => console.log(response),
        (error)    => console.log(error)
      );
  }

  fetchRecipes() {
    this.http.get('https://udemy-ng-http-510bf.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes( recipes );
        },
        (error) => console.log(error)
      );
  }
}
