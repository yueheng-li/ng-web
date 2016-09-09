import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/clickme" routerLinkActive="active">Click Me</a>
      <a routerLink="/little" routerLinkActive="active">little tour</a>
      <a routerLink="/book" routerLinkActive="active">book form</a>
      <a routerLink="/wiki" routerLinkActive="active">wiki search</a>
      <a routerLink="/chart" routerLinkActive="active">chart show</a>
    </nav>
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}