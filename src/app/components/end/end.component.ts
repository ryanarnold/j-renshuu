
// Angular modules
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent
{
  constructor
  (
    private quizService: QuizService
  )
  { }
}
