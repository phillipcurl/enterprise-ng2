import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DialogService, EventService, Event } from './../../../shared';
import { RecapState } from './recap-state.service';

@Component({
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss'],
  providers: [ RecapState ],
})
export class RecapComponent implements OnInit {

  event: Event;
  initialEvent: String;
  isLoading: Boolean;
  errorMessage: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private eventService: EventService,
    private recapState: RecapState
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.recapState.setState('isDirty', false);
    this.recapState.setState('currentStep', 'info');
    this.route.data.forEach((data: { event: Event }) => {
      this.initialEvent = data.event.toString();
      this.event = data.event;
      this.isLoading = false;
    });
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no event or the event is unchanged
    if (!this.event || this.event.toString() === this.initialEvent) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoEvents() {
    let eventId = this.event ? this.event.id : null;
    // Pass along the event id if available
    // so that the eventListComponent can select that event.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: eventId, foo: 'foo' }], { relativeTo: this.route });
  }

}
