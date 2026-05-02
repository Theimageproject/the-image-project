// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector:  'app-root',
  template:  `
    <app-top-nav></app-top-nav>
    <main>
      <app-content></app-content>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main { display: block; }
  `],
})
export class AppComponent {
  title = 'the-image-project';
}
