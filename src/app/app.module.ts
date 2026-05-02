// src/app/app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';

import { AppComponent }        from './app.component';
import { TopNavComponent }     from './components/top-nav/top-nav.component';
import { ContentComponent }    from './components/content/content.component';
import { FooterComponent }     from './components/footer/footer.component';
import { RevealDirective }     from './directives/reveal.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ContentComponent,
    FooterComponent,
    RevealDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
