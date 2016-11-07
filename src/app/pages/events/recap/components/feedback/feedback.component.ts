import { Component, OnInit } from '@angular/core';
import { Event, EventService, DialogService } from './../../../../../shared';
import { RecapState } from './../../recap-state.service';


@Component({
  selector: 'recap-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  rebates: number;
  percentLikes: number;
  display: string;
  newComment: string;
  userComments = (<any>[]);

  constructor(private EventService: EventService,
              public dialog: DialogService,
              public recapState: RecapState) {}

  ngOnInit() {
    this.newComment = '';
  }

  addComment(): boolean {
    // this.nameListService.add(this.newName);
    if (this.newComment.length > 0) {
      this.userComments.push(this.newComment);
      this.newComment = '';
    }
    return false;
  }

  add(value: string): void {
    if (value.length > 0) {
      this.userComments.push(value);
    }
  }

  showNext() {
    this.recapState.setRecap('rebates', this.rebates);
    this.recapState.setRecap('percentLikes', this.percentLikes);
    this.recapState.setRecap('display', this.display);
    this.recapState.setRecap('comments', this.userComments);
    this.recapState.setState('currentStep', 'summary');
  }

  showPrevious() {
    this.recapState.setState('currentStep', 'products');
  }

}
