
import { PartOfSpeech } from './part-of-speech.model';
import { Category } from './category.model';

export class Word
{
  public id: number;
  public definition: string;
  public kana: string;
  public kanji: string;
  public pos: PartOfSpeech;
  public category: Category;

  constructor
  (
    id: number,
    definition: string,
    kana: string,
    kanji: string,
    pos: PartOfSpeech,
    category: Category
  )
  {
    this.id = id;
    this.definition = definition;
    this.kana = kana;
    this.kanji = kanji;
    this.pos = pos;
    this.category = category;
  }
}