import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;
  constructor() {}
  onClicked() {
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit() {}
}
