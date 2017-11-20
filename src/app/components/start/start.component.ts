
// Angular modules
import { Component, OnInit } from '@angular/core';

// Services
import { CategoriesService } from '../../services/categories.service'
import { Category } from '../../models/category.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  private categories: Array<Category>;
  
  constructor
  (
    private categoriesService: CategoriesService,
    private quizService: QuizService
  )
  {
  }

  ngOnInit()
  {
    this.categories = this.categoriesService.getAllCategories();
  }
}
