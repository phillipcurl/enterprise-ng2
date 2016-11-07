import { Component, Input } from '@angular/core';
import { Event } from './../../../../shared';

@Component({
  selector: 'event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.scss']
})
export class EventCardComponent {
  @Input() event: Event;
  @Input() isDetail: Boolean;
}
