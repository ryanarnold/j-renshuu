
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Category } from '../models/category.model';

@Injectable()
export class CategoriesService
{
  public getAllCategories()
  {
    let categories = new Array<Category>();
    categories.push(new Category(1, 'food', '食品'));
    return categories;
  }
}