import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http, Response } from '@angular/http';

@Injectable()
export class RecipeServiceService {

  private recipesUrl = 'http://localhost:3000/api/recipes';
  
  constructor(private http: Http) {}
    // get("/api/recipes")
    getRecipes(): Promise<void | Recipe[]> {
      return this.http.get(this.recipesUrl)
                 .toPromise()
                 .then(response => response.json() as Recipe[])
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      console.log("error");
    }
    
    getSingleRecipe(recipeId: String): Promise<void | Recipe>{
        return this.http.get(this.recipesUrl + '/'+ recipeId)
                    .toPromise()
                    .then(response => response.json() as Recipe)
                    .catch(this.handleError);
    }
    
    createRecipe(newRecipe: Recipe): Promise<void | Recipe>{
        return this.http.post(this.recipesUrl, newRecipe)
                    .toPromise()
                    .then(response => response.json() as Recipe)
                    .catch(this.handleError);
    }
    
    updateThisRecipe(recipeId: String, newRecipe: Recipe): Promise<void | Recipe>{
      debugger
        return this.http.put(this.recipesUrl+ '/'+ recipeId, newRecipe)
                    .toPromise()
                    .then(response => response.json() as Recipe)
                    .catch(this.handleError);
    }
    
    deleteRecipe(recipeId)
    {
        return this.http.delete(this.recipesUrl + '/'+ recipeId)
                    .toPromise()
                    .then(response => response.json() as Recipe)
                    .catch(this.handleError);
    }
    
}

