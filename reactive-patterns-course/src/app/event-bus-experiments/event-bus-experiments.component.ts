import { Component, OnInit } from '@angular/core';
import { LESSONS_LIST_AVAILABLE, globalEventBus, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../shared/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css'],
})
export class EventBusExperimentsComponent implements OnInit {
  ngOnInit() {
    console.log('Top level component broadcasted all lessons ...');

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }
}
