import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(
    private recipeService: RecipeService,
    private http: Http,
    private authService: AuthService
  ) { }

  saveRecipes() {
    const token = this.authService.getToken();

    this.http.put('https://udemy-ng-http-510bf.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .subscribe(
        (response) => console.log(response),
        (error)    => console.log(error)
      );
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://udemy-ng-http-510bf.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
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

  getToken() {
    return firebase
  }
}
