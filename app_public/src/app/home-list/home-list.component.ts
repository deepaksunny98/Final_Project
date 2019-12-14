import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [RecipeServiceService]
})

export class HomeListComponent implements OnInit {

  recipes: Recipe[]

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
     this.recipeService
      .getRecipes()
      .then((recipes: Recipe[]) => {
        this.recipes = recipes.map(recipe => {
          return recipe;
        });
      });
  }
  
  deleteThisRecipe(id){
    this.recipeService.deleteRecipe(id)
        .then((recipe: Recipe) => {
            this.recipeService
            .getRecipes()
                    .then((recipes: Recipe[]) => {
                        this.recipes = recipes.map(recipe => {
                            return recipe;
                    });
            });
        })
  }
}
