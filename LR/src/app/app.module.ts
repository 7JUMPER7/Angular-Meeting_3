import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex4Component } from './ex4/ex4.component';

@NgModule({
  declarations: [		
    AppComponent,
      Ex1Component,
      Ex4Component
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
