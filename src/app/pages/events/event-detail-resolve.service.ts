import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';

import {
  Event,
  EventService
} from './../../shared';

@Injectable()
export class EventDetailResolve implements Resolve < Event > {
  constructor(private es: EventService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise < Event > | boolean {
    let id = +route.params['id'];

    return this.es.getEvent(id)
      .then(event => {
        if (event) {
          return event;
        } else {
          // id not found
          console.log('did not find events');
          this.router.navigate(['/events']);
          return false;
        }
      });
  }
}
