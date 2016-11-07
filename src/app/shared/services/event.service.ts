import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Event, ResponseHandlerService } from './../../shared';

@Injectable()
export class EventService {

  private baseUrl = 'http://localhost:3000/events';

  // There's currently a bug in Angular 2 that forces us to inject the ResponseHandlerService
  // service this way. See: https://github.com/angular/angular/issues/8519
  // @TODO: Remove this injection style once the issue has been resolved.
  constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}

  /**
   * @returns Observable
   */
  getEvents(): Observable < Event[] > {
    return this.http.get(this.baseUrl)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  getPastEvents(): Observable < Event[] > {
      return this.http.get(this.baseUrl)
        .map(this.handler.extractData)
        .mergeAll()
        .filter(event => {
          console.log(event);
        })
        .catch(this.handler.handleError);
    }
    /**
     * @param  {number|string} id
     * @returns Observable
     */
  getEvent(id: number | string): Promise<Event> {
    return this.http.get(this.baseUrl + '/' + id)
      .toPromise()
      .then(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  /**
   * @param  {Event} event
   * @returns Observable
   */
  addEvent(event: Event): Observable < Event > {
    let body = JSON.stringify(event);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.baseUrl, body, options)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  /**
   * @param  {Event} event
   * @returns Observable
   */
  updateEvent(event: Event): Observable < Event > {
    let body = JSON.stringify(event);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.put(this.baseUrl + '/' + event.id, body, options)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }

  /**
   * @param  {Event} event
   * @returns Observable
   */
  deleteEvent(id: Number) {
    // let body = JSON.stringify(event);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.delete(this.baseUrl + '/' + id, options)
      .map(this.handler.extractData)
      .catch(this.handler.handleError);
  }
}
