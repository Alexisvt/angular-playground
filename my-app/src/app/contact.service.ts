import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContactService {
  private _serviceUrl = 'http://localhost:63145/api/Contact/GetAllContacts';

  constructor(private _http: Http) {}

  getContacts() {
    return this._http.get(this._serviceUrl).map(this.extractResponse);
  }

  private extractResponse(response: Response) {
    const body = response.json();
    return body || {};
  }
}
