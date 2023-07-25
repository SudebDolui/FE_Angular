import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Test Description',
      'https://assets.cntraveller.in/photos/60be1e72c7150780d0a47e3b/16:9/w_1360,h_765,c_limit/Home-cooking-recipes-self-isolatin-1366x768.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
