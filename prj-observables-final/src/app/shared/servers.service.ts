import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(
    private recipeService: RecipeService,
    private http: Http
  ) { }

  saveRecipes() {
    this.http.put( 'https://udemy-ng-http-510bf.firebaseio.com/recipes.json', this.recipeService.getRecipes() )
      .subscribe(
        (response) => console.log(response),
        (error)    => console.log(error)
      );
  }

  fetchRecipes() {
    this.http.get( 'https://udemy-ng-http-510bf.firebaseio.com/recipes.json' )
      .subscribe(
        (response: Response) => {
          this.recipeService.resetRecipes( response.json() );
        },
        (error) => console.log(error)
      );
  }
}
