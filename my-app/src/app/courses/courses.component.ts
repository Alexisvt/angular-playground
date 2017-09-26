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
  emailText: string;
  objPipeSample = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };
  sampleText = 'Veniam minim id nulla proident dolore minim cupidatat magna. Amet aliqua eu proident velit quis adipisicin.';
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

  onKeyUp(emailElement) {
    console.log(emailElement.value);
  }

  onKeyUpTwoWay() {
    console.log(this.emailText);
  }

  ngOnInit() {}
}
