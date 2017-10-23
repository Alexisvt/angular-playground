import 'rxjs/Rx';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { AuthorsComponent } from './authors/authors.component';
import { ContactService } from './contact.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { AgendaComponent } from './agenda/agenda.component';
import { TitleCasingPipe } from './title-casing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    AgendaComponent,
    TitleCasingPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [CoursesService, AuthorsService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
