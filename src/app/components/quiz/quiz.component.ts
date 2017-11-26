
// Angular modules
import { Component, OnInit } from '@angular/core';

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
  
  constructor
  (
    private quizService: QuizService,
    private wordsService: WordsService
  )
  { }

  nextWord()
  {
    if (this.userAnswer == this.currentWord.definition)
    {
      this.quizService.incrementCorrect();
    }
    else
    {
      this.quizService.incrementWrong();
    }

    this.currentWordIndex += 1;
    this.currentWord = this.words[this.currentWordIndex];
    this.userAnswer = '';
  }

  ngOnInit()
  {
    this.words = this.wordsService.getByCategory(this.quizService.getCategories());
    this.currentWordIndex = 0;
    this.currentWord = this.words[this.currentWordIndex];
    this.userAnswer = '';
  }

}
