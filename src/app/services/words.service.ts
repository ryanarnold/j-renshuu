
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Word } from '../models/word.model';

// Services
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';

@Injectable()
export class WordsService
{
  private _words =
  [
    {
      'id': 1001,
      'definition': 'good morning',
      'kana': 'おはよう',
      'kanji': '',
      'category': this.categoriesService.getById(105) 
    },
    {
      'id': 1002,
      'definition': 'good morning (polite)',
      'kana': 'おはようございます',
      'kanji': '',
      'category': this.categoriesService.getById(105) 
    },
    {
      'id': 1003,
      'definition': 'good afternoon',
      'kana': 'こんにちは',
      'kanji': '',
      'category': this.categoriesService.getById(105) 
    },
    {
      'id': 1004,
      'definition': 'good evening',
      'kana': 'こんばんは',
      'kanji': '',
      'category': this.categoriesService.getById(105) 
    },
    {
      'id': 1005,
      'definition': 'goodbye',
      'kana': 'さようなら',
      'kanji': '',
      'category': this.categoriesService.getById(105) 
    }
  ]

  constructor
  (
    private categoriesService: CategoriesService
  )
  { }

  public getAllWords(): Array<Word>
  {
    let words = new Array<Word>();
    
    for (let w of this._words)
    {
      words.push(new Word(w['id'], w['definition'], w['kana'], w['kanji'], w['category']));
    }

    return words;
  }

  public getByCategory(categories: Array<Category>): Array<Word>
  {
    let words = new Array<Word>();

    for (let c of categories)
    {
      for (let w of this._words)
      {
        if (c['descEnglish'] == w['category']['descEnglish'])
        {
          words.push(new Word(w['id'], w['definition'], w['kana'], w['kanji'], w['category']));
        }
      }
    }

    words = this.shuffleWordsArray(words);

    return words;
  }

  private shuffleWordsArray(array: Array<Word>)
  {
    let j, x, i;

    for (i = array.length - 1; i > 0; i--)
    {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }

    return array;
  }
}