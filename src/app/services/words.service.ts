
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Word } from '../models/word.model';

// Services
import { PartOfSpeechService } from './part-of-speech.service';
import { CategoriesService } from './categories.service';

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
      'pos': this.posService.getById('NOUN'),
      'category': this.categoriesService.getById(105) 
    }
  ]

  constructor
  (
    private posService: PartOfSpeechService,
    private categoriesService: CategoriesService
  )
  { }

  public getAllWords(): Array<Word>
  {
    let words = new Array<Word>();
    
    for (let w of this._words)
    {
      words.push(new Word(w['id'], w['definition'], w['kana'], w['kanji'], w['pos'], w['category']));
    }

    return words;
  }
}