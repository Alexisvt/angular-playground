import { Component, OnInit } from '@angular/core';
import {
  globalEventBus,
  LESSONS_LIST_AVAILABLE,
  ADD_NEW_LESSON,
} from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/lesson';

@Component({
  selector: 'lesson-counter',
  templateUrl: './lesson-counter.component.html',
  styleUrls: ['./lesson-counter.component.css'],
})
export class LessonCounterComponent {
  lessonsCounter = 0;

  constructor() {
    console.log('lesson list component is registered as observer ..');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => (this.lessonsCounter += 1),
    });
  }

  notify(data: Lesson[]) {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }
}
