import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from './../../shared';
import { EventsRoutingModule } from './events-routing.module';
import { CalendarService } from './calendar/calendar.service';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailComponent } from './detail/detail.component';
import { RecapComponent } from './recap/recap.component';
import {
  FeedbackComponent,
  InfoComponent,
  ProductsComponent,
  SummaryComponent
} from './recap/components';
import { EventCardComponent } from './shared/event-card/event-card.component';

const EVENTS_COMPONENTS = [
  ListComponent,
  CalendarComponent,
  DetailComponent,
  RecapComponent,
  FeedbackComponent,
  InfoComponent,
  ProductsComponent,
  SummaryComponent,
  EventCardComponent
];

@NgModule({
  imports: [
    SharedModule,
    EventsRoutingModule
  ],
  declarations: [
    ...EVENTS_COMPONENTS,
  ],
  providers: [CalendarService]
})
export class EventsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EventsModule
    };
  }
}
