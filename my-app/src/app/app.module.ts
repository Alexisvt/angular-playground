import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, AuthorsComponent],
  imports: [BrowserModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
