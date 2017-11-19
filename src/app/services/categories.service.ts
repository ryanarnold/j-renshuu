
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
    categories.push(new Category(1, 'countries', '国'));
    categories.push(new Category(1, 'expressions', '感情表現'));
    categories.push(new Category(1, 'family', '家族'));
    categories.push(new Category(1, 'food', '食品'));
    categories.push(new Category(1, 'greetings', '挨拶'));
    categories.push(new Category(1, 'majors', '専攻'));
    categories.push(new Category(1, 'money', 'お金'));
    categories.push(new Category(1, 'numbers', '番号'));
    categories.push(new Category(1, 'occupations', '仕事'));
    categories.push(new Category(1, 'places', '位置'));
    categories.push(new Category(1, 'things', '物'));
    categories.push(new Category(1, 'words that point', '単語の趣旨'));
    return categories;
  }
}