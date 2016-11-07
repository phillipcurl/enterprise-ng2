import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { TimeEntry, ResponseHandlerService } from './../../shared';

@Injectable()
export class TimeService {
  
   private baseUrl = 'http://localhost:3000/time';
   
   constructor(public http: Http, @Inject(forwardRef(() => ResponseHandlerService)) private handler: ResponseHandlerService) {}


   getTime(): Observable<TimeEntry[]> {
    return this.http.get(this.baseUrl)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }
  
  updateTime(time: TimeEntry): Observable<TimeEntry>{
    let body = JSON.stringify(time);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + '/' + time.id, body, options)
                    .map(this.handler.extractData)
                    .catch(this.handler.handleError);
  }

}
