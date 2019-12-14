import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [RecipeServiceService]
})
export class UpdateComponent implements OnInit {

  constructor(
  private recipeServiceService: RecipeServiceService,
  private route: ActivatedRoute) { }

    newRecipe: Recipe;
    
  ngOnInit(): void {
    this.route.params.pipe(
    switchMap((params: Params) => {
        return this.recipeServiceService.getSingleRecipe(params['recipeid'])
    }))
    .subscribe((newRecipe: Recipe) => {
      debugger
        this.newRecipe = newRecipe;
        this.pageContent.header.title = newRecipe.name;
        this.pageContent.header.body = "Details for selected recipe";
    });
  }
  pageContent = {
    header : {
        title : '',
        body : ''
    }
  };
  
  public updateRecipe(id: string): void{
    debugger
    this.recipeServiceService.updateThisRecipe(id, this.newRecipe);
  }

}
