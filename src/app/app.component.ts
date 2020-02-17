import { Component } from '@angular/core';
import { COURSES } from './courses';
import { Course } from './model/coursee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  courses = COURSES;

  oncourseSelected(coursee:Course){
    console.log('Hi I\'m Salehin too', coursee);
  }
}
