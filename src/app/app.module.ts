import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { CategoryButtonComponent } from './components/start/category-button/category-button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CategoriesService } from './services/categories.service';
import { WordsService } from './services/words.service';
import { QuizService } from './services/quiz.service';
import { EndComponent } from './components/end/end.component';
import { APIService } from './services/api.service';

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
  },
  {
    path: 'end',
    component: EndComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    CategoryButtonComponent,
    QuizComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    WordsService,
    QuizService,
    APIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
