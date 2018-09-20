import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/lesson';
import {
  globalEventBus,
  LESSONS_LIST_AVAILABLE,
  ADD_NEW_LESSON,
} from '../event-bus-experiments/event-bus';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css'],
})
export class LessonListComponent {
  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list component is registered as observer ..');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
        });
      },
    });
  }

  notify(data: Lesson[]) {
    console.log('Lessons list component received data ..');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson ...');
    lesson.completed = !lesson.completed;
  }
}
