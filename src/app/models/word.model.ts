
import { Category } from './category.model';

export class Word
{
  public id: number;
  public definition: string;
  public kana: string;
  public kanji: string;
  public category: Category;
  public furigana: string;

  constructor
  (
    id: number,
    definition: string,
    kana: string,
    kanji: string,
    category: Category,
    furigana: string
  )
  {
    this.id = id;
    this.definition = definition;
    this.kana = kana;
    this.kanji = kanji;
    this.category = category;
    this.furigana = furigana;
  }
}