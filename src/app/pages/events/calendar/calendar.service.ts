import { Injectable } from '@angular/core';
import { ThemeConfigProvider } from '../../../theme';
import { Event, EventService } from './../../../shared';

@Injectable()
export class CalendarService {
  private events: Event[];
  private constructedEvents: any[] = [];

  constructor(private _config: ThemeConfigProvider, private eventService: EventService) {
    let dashboardColors = this._config.get().colors.dashboard;
    this.eventService.getEvents().subscribe(
      events => {
        for (let event of events) {
          let newEvent = {
            title: event.title,
            start: new Date(event.date),
            color: dashboardColors.surfieGreen,
          };
          this.constructedEvents.push(newEvent);
        }
        this.events = events;
      },
      error => {
      }
    );
  }

  getData() {
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: Date.now(),
      // selectable: true,
      selectHelper: true,
      // editable: true,
      eventLimit: true,
      eventClick: function(calEvent, jsEvent, view) {
        alert('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);

      },
      eventMouseover: function(calEvent, jsEvent, view) {
        console.log('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);

      },
      events: this.constructedEvents
    };
  }
}
