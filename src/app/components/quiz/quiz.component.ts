
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
  
  constructor
  (
    private quizService: QuizService,
    private wordsService: WordsService
  )
  { }

  nextWord()
  {
    this.currentWordIndex += 1;
    this.currentWord = this.words[this.currentWordIndex];
  }

  ngOnInit()
  {
    this.words = this.wordsService.getByCategory(this.quizService.getCategories());
    this.currentWordIndex = -1;
    this.nextWord();
  }

}
