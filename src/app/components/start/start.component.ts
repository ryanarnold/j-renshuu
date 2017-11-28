
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
    this.quizService.initializeValues();
  }

  addCategory(toggled: boolean, category: Category)
  {
    this.quizService.addCategory(category);
  }

  changeDirection(newDirection: string)
  {
    this.quizService.setDirection(newDirection);
  }

  changeShowFurigana(show: string)
  {
    if (show == 'Y')
    {
      this.quizService.setShowFurigana(true);
    }
    else
    {
      this.quizService.setShowFurigana(false);
    }
  }

  ngOnInit()
  {
    this.categoriesService.getAllCategories().subscribe(categories =>
    {
      this.categories = categories;
    });
  }
}
