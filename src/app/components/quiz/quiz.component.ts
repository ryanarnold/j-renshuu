
// Angular modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { QuizService } from '../../services/quiz.service';
import { Word } from '../../models/word.model';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit
{
  private words: Array<Word>;
  private currentWord: Word;
  private currentWordIndex: number;
  private userAnswer: string;
  private question: string;
  private currentChoices: Array<string>;
  
  constructor
  (
    private quizService: QuizService,
    private wordsService: WordsService,
    private router: Router
  )
  { }

  nextWord(answer?: string)
  {
    if (this.quizService.getFormat() == 'choice')
    {
      this.userAnswer = answer;
    }

    if (this.quizService.getDirection() == 'JE')
    {
      this.checkAnswerJE();
    }
    else
    {
      this.checkAnswerEJ();
    }
    
    this.currentWordIndex += 1;
    this.currentWord = this.words[this.currentWordIndex];
    this.userAnswer = '';

    if (this.currentWordIndex == this.words.length)
    {
      this.router.navigate(['/end']);
    }

    this.setQuestion();
  }

  checkAnswerJE()
  {
    if (this.userAnswer == this.currentWord.definition)
    {
      this.quizService.incrementCorrect();
    }
    else {
      this.quizService.incrementWrong();
    }
  }

  checkAnswerEJ()
  {
    if (this.userAnswer == this.currentWord.kana || this.userAnswer == this.currentWord.kanji)
    {
      this.quizService.incrementCorrect();
    }
    else {
      this.quizService.incrementWrong();
    }
  }

  ngOnInit()
  {
    this.wordsService.getByCategory(this.quizService.getCategories()).subscribe(words =>
    {
      this.words = words;
      this.currentWordIndex = 0;
      this.currentWord = this.words[this.currentWordIndex];
      this.userAnswer = '';

      this.setQuestion();
    });
  }

  setQuestion()
  {
    if (this.quizService.getDirection() == 'JE')
    {
      if (this.currentWord.kanji)
      {
        this.question = this.currentWord.kanji;
      }
      else
      {
        this.question = this.currentWord.kana;
      }
      if (this.quizService.getFormat() == 'choice')
      {
        this.setChoices();
      }
    }
    else
    {
      this.question = this.currentWord.definition;
      
      if (this.quizService.getFormat() == 'choice')
      {
        this.setChoices();
      }
    }
  }

  setChoices()
  {
    let chosenWord: Word;
    this.currentChoices = new Array<string>();
    let forbiddenWordIds = new Array<number>();
    forbiddenWordIds.push(this.currentWord.id);

    for (let i = 0; i < 3; i++)
    {
      while (true)
      {
        let wordIndex = Math.floor(Math.random() * this.words.length);
        chosenWord = this.words[wordIndex];

        if (!forbiddenWordIds.includes(chosenWord.id))
        {
          forbiddenWordIds.push(chosenWord.id);
          break;
        }
      }
      if (this.quizService.getDirection() == 'JE')
      {
        this.currentChoices.push(chosenWord.definition);
      }
      else {
        if (chosenWord.kanji)
        {
          this.currentChoices.push(chosenWord.kanji);
        }
        else
        {
          this.currentChoices.push(chosenWord.kana);
        }
      }
      
    }

    if (this.quizService.getDirection() == 'JE')
    {
      this.currentChoices.push(this.currentWord.definition);
    }
    else {
      if (this.currentWord.kanji)
      {
        this.currentChoices.push(this.currentWord.kanji);
      }
      else
      {
        this.currentChoices.push(this.currentWord.kana);
      }
    }
    this.currentChoices = this.shuffleStringArray(this.currentChoices);
  }

  public shuffleStringArray(array: Array<string>)
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
