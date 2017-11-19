
export class Category
{
  public id: number;
  public descEnglish: string;
  public descJapanese: string;

  constructor(id, descEnglish, descJapanese)
  {
    this.id = id;
    this.descEnglish = descEnglish;
    this.descJapanese = descJapanese;
  }
}