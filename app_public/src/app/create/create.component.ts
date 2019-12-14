import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [RecipeServiceService]
})
export class CreateComponent implements OnInit {

    public newRecipe: Recipe ={
        name : '',
        author : '',
        ingredients: '',
        cookingTime: '',
        rating: '',
        imageLink: ''
    };
  constructor(private recipeServiceService: RecipeServiceService) { }

  ngOnInit() {
  }
  
  public createNewRecipe(newRecipe: Recipe): void {
    this.recipeServiceService.createRecipe(newRecipe);
  }
  
  pageContent = {
	  header: {
		  title: 'Create New Recipe',
		  body: 'Input the details here if you want to add a new recipes.'
  }
  };

}
