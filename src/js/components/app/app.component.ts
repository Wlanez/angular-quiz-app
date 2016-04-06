import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LandingComponent } from '../landing/landing.component';
import { QuizComponent } from '../quiz/quiz.component';
import { TestComponent } from '../quiz/test.component';

@Component({
  selector: 'app',
  styleUrls: ['./app.less'],
  templateUrl: './app.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Landing',
    component: LandingComponent,
    useAsDefault: true
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizComponent
  },
  {
    path: '/test',
    name: 'Test',
    component: TestComponent
  }
])
export class AppComponent implements OnInit {

  public ngOnInit() {
    // App was bootstrapped
  }

}
