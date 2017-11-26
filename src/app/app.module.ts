import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { CategoryButtonComponent } from './components/start/category-button/category-button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CategoriesService } from './services/categories.service';
import { WordsService } from './services/words.service';
import { QuizService } from './services/quiz.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    CategoryButtonComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule
  ],
  providers: [
    CategoriesService,
    WordsService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
