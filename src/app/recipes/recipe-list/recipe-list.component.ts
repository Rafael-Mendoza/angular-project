import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Teste Name', 'Teste Recipe Desc',
     'http://cdn-image.myrecipes.com/sites/default/files/peanut_chicken_and_sugar_snap_peas_with_noodles.jpg'),
     new Recipe('A Teste Name', 'Teste Recipe Desc',
     'http://cdn-image.myrecipes.com/sites/default/files/peanut_chicken_and_sugar_snap_peas_with_noodles.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
