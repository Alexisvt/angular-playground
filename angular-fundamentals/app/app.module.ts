import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
