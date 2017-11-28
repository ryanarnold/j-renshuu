
// Angular modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

// Models
import { Category } from '../models/category.model';
import { forEach } from '@angular/router/src/utils/collection';
import { APIService } from './api.service';

@Injectable()
export class CategoriesService
{
  constructor
  (
    private api: APIService
  )
  { }

  public getAllCategories(): Observable<Array<Category>>
  {
    return this.api.httpGetMany('categories').map(this.createCategoriesFromJSONList, this);
  }

  private createCategoriesFromJSONList(jsonList: object[]): Array<Category>
  {
    let categories = new Array<Category>();

    for (let c of jsonList)
    {
      categories.push(new Category(c['id'], c['desc_english'], c['desc_japanese']));
    }

    return categories;
  }
}
