import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  data;
  constructor(private _contactService: ContactService) {
    this._contactService
      .getContacts()
      .subscribe(r => (this.data = JSON.stringify(r)));
  }

  ngOnInit() {}
}
