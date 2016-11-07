import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from './../../../shared';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  event: Event;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: { event: Event }) => {
      this.event = data.event;
      console.log('this.event: ', this.event);
    });
  }

  gotoEvents() {
    let eventId = this.event ? this.event.id : null;
    // Pass along the event id if available
    // so that the ListComponent can select that event.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the events
    this.router.navigate(['../', { id: eventId, foo: 'foo' }], { relativeTo: this.route });
  }

}
