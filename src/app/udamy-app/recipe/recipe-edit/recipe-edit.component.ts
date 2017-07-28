import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: number;
  editMode: boolean;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['id'] !== undefined;
      }
    )
  }



}
