
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { PartOfSpeech } from '../models/part-of-speech.model';

@Injectable()
export class PartOfSpeechService
{
  private _pos = 
  [
    {'id': 'NOUN'},
    {'id': 'ADJECTIVE'},
    {'id': 'ADVERB'},
    {'id': 'VERB'}
  ]

  public getById(id: string): PartOfSpeech
  {
    for (let p of this._pos)
    {
      if (p['id'] == id)
      {
        return new PartOfSpeech(p['id']);
      }
    }
  }
}
