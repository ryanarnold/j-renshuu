
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Category } from '../models/category.model';

@Injectable()
export class QuizService
{
  private format: string;

  constructor()
  {
    this.format = 'choice';
  }

  public getFormat(): String
  {
    return this.format;
  }

  public setFormat(format: string)
  {
    this.format = format;
  }
}