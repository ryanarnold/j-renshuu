
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Category } from '../models/category.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class CategoriesService
{
  private _categories = 
  [
    {
      'id': 101,
      'descEnglish': 'countries',
      'descJapanese': '国'
    },
    {
      'id': 102,
      'descEnglish': 'expressions',
      'descJapanese': '感情表現'
    },
    {
      'id': 103,
      'descEnglish': 'family',
      'descJapanese': '家族'
    },
    {
      'id': 104,
      'descEnglish': 'food',
      'descJapanese': '食品'
    },
    {
      'id': 105,
      'descEnglish': 'greetings',
      'descJapanese': '挨拶'
    },
    {
      'id': 106,
      'descEnglish': 'majors',
      'descJapanese': '専攻'
    },
    {
      'id': 107,
      'descEnglish': 'money',
      'descJapanese': 'お金'
    },
    {
      'id': 108,
      'descEnglish': 'numbers',
      'descJapanese': '番号'
    },
    {
      'id': 109,
      'descEnglish': 'occupations',
      'descJapanese': '仕事'
    },
    {
      'id': 110,
      'descEnglish': 'places',
      'descJapanese': '位置'
    },
    {
      'id': 111,
      'descEnglish': 'things',
      'descJapanese': '物'
    },
    {
      'id': 112,
      'descEnglish': 'words that point',
      'descJapanese': '単語の趣旨'
    }
  ]

  public getAllCategories(): Array<Category>
  {
    let categories = new Array<Category>();

    for (let c of this._categories)
    {
      categories.push(new Category(c['id'], c['descEnglish'], c['descJapanese']));
    }

    return categories;
  }

  public getById(id: number): Category
  {
    for (let c of this._categories)
    {
      if (c['id'] == id)
      {
        return new Category(c['id'], c['descEnglish'], c['descJapanese']);
      }
    }
  }
}
