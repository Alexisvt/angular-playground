import { Component, OnInit } from '@angular/core';

import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  title: string;
  authorList: string[];
  imageUrl = 'https://unsplash.it/200/300';
  colSpan = 2;

  constructor(service: AuthorsService) {
    this.authorList = service.getAuthors();
    this.title = `${this.authorList.length} Authors`;
  }

  ngOnInit() {}
}
