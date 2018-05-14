import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      add( item: Ingredient ) {
        this.ingredients.push( item );
      }

      delete() {
        this.ingredients.pop();
      }

      clear() {
        this.ingredients.length = 0;
      }

      getIngredients() {
          return this.ingredients.slice();
      }
}
