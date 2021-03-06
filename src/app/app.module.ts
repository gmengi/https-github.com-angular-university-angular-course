import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CourseCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
