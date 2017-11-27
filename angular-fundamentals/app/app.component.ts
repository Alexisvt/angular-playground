import { Event } from '@angular/platform-browser/src/facade/browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <h1 [innerHTML]="title" ></h1>
    <h1> {{title}} </h1>
    <img [src]="logo" />
    <button (click)="handleClick()"> Change name </button>
    <input 
    type="text" 
    [ngModel]="name"
    (ngModelChange)="handleChange($event)"
     />
     <input 
     type="text" 
     [(ngModel)]="name"
      />
    <div> {{name}} </div>
    <div>
      <h2>Working with #ref variables sample</h2>
      <div>
        <button (click)="handleClickRef(lastName.value)">Get value</button>
        <input type="text" #lastName>
        <p>{{lastNm}}</p>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {
  title: string;
  logo = 'http://lorempixel.com/50/50/';
  name = 'Alexis';
  lastNm: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleClick() {
    this.name = 'Salomon';
  }

  handleClickRef(value: string) {
    this.lastNm = value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }
}
