
// Angular modules
import { Component, OnInit } from '@angular/core';

// Services
import { CategoriesService } from '../../services/categories.service'
import { Category } from '../../models/category.model';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  private categories: Array<Category>;
  
  constructor
  (
    private categoriesService: CategoriesService
  )
  {
  }

  ngOnInit()
  {
    this.categories = this.categoriesService.getAllCategories();
  }

}
