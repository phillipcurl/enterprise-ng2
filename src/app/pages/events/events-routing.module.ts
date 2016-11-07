import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailComponent } from './detail/detail.component';
import { RecapComponent } from './recap/recap.component';

import { CanDeactivateGuard } from './../../shared';

import { EventDetailResolve } from './event-detail-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: ':id',
        component: DetailComponent,
        resolve: {
          event: EventDetailResolve
        }
      },
      {
        path: 'recap/:id',
        component: RecapComponent,
        canDeactivate: [
          CanDeactivateGuard
        ],
        resolve: {
          event: EventDetailResolve
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    EventDetailResolve
  ]
})
export class EventsRoutingModule { }
