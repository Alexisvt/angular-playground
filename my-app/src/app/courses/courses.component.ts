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
  onSave($event) {
    console.log('Button was clicked', $event);
  }

  ngOnInit() {}
}
