import { Component, Injector, inject } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  template: `
    <header style="margin-bottom: 20px; display: flex; flex-direction: column">
      <a routerLink="/root">Root Injector</a>
      <a routerLink="/lazy">Lazy Module Injector</a>
      <a routerLink="/node">Node Injector</a>
    </header>
    App Component
    <div style="border: 1px solid red; padding: 10px">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
