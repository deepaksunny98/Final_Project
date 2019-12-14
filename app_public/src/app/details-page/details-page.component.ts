import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [RecipeServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private recipeServiceService: RecipeServiceService,
    private route: ActivatedRoute
  ) { }

newRecipe: Recipe;
  ngOnInit(): void {
    this.route.params.pipe(
    switchMap((params: Params) => {
        return this.recipeServiceService.getSingleRecipe(params['recipeid'])
    }))
    .subscribe((newRecipe: Recipe) => {
        this.newRecipe = newRecipe;
        this.pageContent.header.title = newRecipe.name;
        this.pageContent.header.body = "Details for selected recipe";
    });
  }
  pageContent = {
    header : {
        title : 'Details Page',
        body : ''
    }
  };


}