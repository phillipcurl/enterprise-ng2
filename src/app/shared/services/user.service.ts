import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User, ResponseHandlerService } from './../../shared';

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:44382/api/users';

  constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}

  getUsers(): Observable < User[] > {
    return this.http.get(this.baseUrl)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  getUser(id: number) {
    return this.http.get(this.baseUrl + '/' + id)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  updateUser(user: User): Observable < User > {
    let body = JSON.stringify(user);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.put(this.baseUrl + '/' + user.id, body, options)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  getToken(email: string, password: string): Observable < any > {
    let body = 'grant_type=password&username=' + email + '&password=' + password;
    return this.http.post('http://libations-dev.homenet.org/api/token', body)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

}