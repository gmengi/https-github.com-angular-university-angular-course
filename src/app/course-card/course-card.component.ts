import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { COURSES } from '././courses';
import { Course } from '../model/coursee';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  @Input()
  course : Course;
  @Input() cardIndex:number;
  @Output()
  courseSelected = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }
onCourseViewed(){
  console.log("Hello I'm salehin Modasiya");
  this.courseSelected.emit(this.course);
}
}