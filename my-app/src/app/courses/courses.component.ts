import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  courses: string[];
  isActive: boolean;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.isActive = true;
  }
  onSave($event: Event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }
  onClickedDiv() {
    console.log('Div was clicked');
  }

  onKeyUpUgly($event) {
    if ($event.keyCode === 13) {
      console.log(' ENTER was pressed');
    }
  }
  onKeyUpPretty() {
    console.log(' ENTER was pressed');
  }

  ngOnInit() {}
}
