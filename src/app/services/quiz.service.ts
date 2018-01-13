
// Angular modules
import { Injectable } from '@angular/core';

// Models
import { Category } from '../models/category.model';

@Injectable()
export class QuizService
{
  private format: string;
  private categories: Array<Category>;
  private direction: string;
  private correct: number;
  private wrong: number;
  private showFurigana: boolean;

  constructor()
  {
    this.initializeValues();
  }

  public initializeValues()
  {
    this.format = 'input';
    this.categories = new Array<Category>();
    this.direction = 'JE';
    this.correct = 0;
    this.wrong = 0;
    this.showFurigana = true;
  }

  public getFormat(): String
  {
    return this.format;
  }

  public setFormat(format: string)
  {
    this.format = format;
  }

  public getCategories(): Array<Category>
  {
    return this.categories;
  }

  public addCategory(category: Category)
  {
    this.categories.push(category);
  }

  public getDirection(): string
  {
    return this.direction;
  }

  public setDirection(direction: string)
  {
    this.direction = direction;
  }

  public getCorrect()
  {
    return this.correct;
  }

  public incrementCorrect()
  {
    this.correct += 1;
  }

  public getWrong()
  {
    return this.wrong;
  }

  public incrementWrong()
  {
    this.wrong += 1;
  }

  public setShowFurigana(show: boolean)
  {
    this.showFurigana = show;
  }

  public getShowFurigana(): boolean
  {
    return this.showFurigana;
  }
}