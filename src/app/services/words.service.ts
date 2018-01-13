
// Angular modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

// Models
import { Word } from '../models/word.model';

// Services
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';
import { APIService } from './api.service';

@Injectable()
export class WordsService
{
  private categories: Array<Category>;

  constructor
  (
    private categoriesService: CategoriesService,
    private api: APIService
  )
  { }

  /**
   * Returns an Observable of all the words available.
   * @returns Observable
   */
  public getAllWords(): Observable<Array<Word>>
  {
    return this.api.httpGetMany('words').map(this.createWordsFromJSONList, this);
  }

  /**
   * Returns an Observable of all words with the given categories.
   * @param categories - an Array of categories
   */
  public getByCategory(categories: Array<Category>): Observable<Array<Word>>
  {
    this.categories = categories;
    return this.api.httpGetMany('words').map(this.filterByCategory, this);
  }

  /**
   * Filters the generic jsonList object array and returns an Array of words with a given category.
   * @param jsonList - generic object array
   */
  private filterByCategory(jsonList: object[]): Array<Word>
  {
    let words = new Array<Word>();

    for (let c of this.categories)
    {
      for (let w of jsonList)
      {
        if (c.descEnglish == w['category']['desc_english'])
        {
          words.push(new Word(w['id'], w['definition'], w['kana'], w['kanji'], w['category'], w['furigana']));
        }
      }
    }

    words = this.shuffleWordsArray(words);

    return words;
  }

  private createWordsFromJSONList(jsonList: object[]): Array<Word>
  {
    let words = new Array<Word>();
    
    for (let w of jsonList)
    {
      words.push(new Word(w['id'], w['definition'], w['kana'], w['kanji'], w['category'], w['furigana']));
    }

    return words;
  }

  public shuffleWordsArray(array: Array<Word>)
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