// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:   PC
// @Last modified time: 2016-05-13T21:26:21-04:00

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ResponseHandlerService {

  constructor() {}
  
  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }
  
  handleError(error: any) {
    // TODO: use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
