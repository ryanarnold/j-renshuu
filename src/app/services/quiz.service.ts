
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

  constructor()
  {
    this.format = 'choice';
    this.categories = new Array<Category>();
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
}