import { Component, OnInit } from '@angular/core';
import { Event, EventService, DialogService } from './../../../../../shared';
import { AppState } from './../../../../../shared/services/app.service';
import { RecapState } from './../../recap-state.service';

@Component({
  selector: 'recap-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private EventService: EventService,
              public dialog: DialogService,
              public appState: AppState,
              public recapState: RecapState) {}

  ngOnInit() {
  }

  showNext() {
    this.recapState.setState('currentStep', 'feedback');
  }

  showPrevious() {
    this.recapState.setState('currentStep', 'feedback');
  }

}
