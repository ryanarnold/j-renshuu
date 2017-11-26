
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

  constructor()
  {
    this.initializeValues();
  }

  public initializeValues()
  {
    this.format = 'choice';
    this.categories = new Array<Category>();
    this.direction = 'JE';
    this.correct = 0;
    this.wrong = 0;
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
}