import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventService } from './../../../shared';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  events: Event[];
  currEvents: Event[];
  isLoading: boolean;
  errorMessage: string;
  activeFilter: string;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
        this.currEvents = events;
        this.showCurrent();
        this.activeFilter = 'current';
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = < any > error;
      }
    );
  }

  showCurrent() {
    // let tempEvents = this.events.filter((event) => {
    //   let eventDate = moment(event['date']);
    //   let currentDate = moment(Date.now());
    //   let futureDate = moment(Date.now()).add(50, 'years');
    //   return ((eventDate > currentDate) && (eventDate < futureDate));
    // });
    // this.activeFilter = 'current';
    // this.currEvents = this.sortChronologically(tempEvents);
  }

  showPast() {
    // let tempEvents = this.events.filter((event) => {
    //   let eventDate = moment(event['date']);
    //   let currentDate = moment(Date.now());
    //   return eventDate < currentDate;
    // });
    // this.activeFilter = 'past';
    // this.currEvents = this.sortReverseChronologically(tempEvents);
  }

  showUpcoming() {
    // let tempEvents = this.events.filter((event) => {
    //   let eventDate = moment(event['date']);
    //   let currentDate = moment(Date.now());
    //   let futureDate = moment(Date.now()).add(50, 'years');
    //   return ((eventDate > currentDate) && (eventDate > futureDate));
    // });
    // this.activeFilter = 'upcoming';
    // this.currEvents = this.sortChronologically(tempEvents);
  }

  sortChronologically(events: Event[]): Event[] {
    return events.sort((leftSide, rightSide): number => {
      if (leftSide['date'] < rightSide['date']) {
        return -1;
      }
      if (leftSide['date'] > rightSide['date']) {
        return 1;
      }
      return 0;
    });
  }

  sortReverseChronologically(events: Event[]): Event[] {
    return events.sort((leftSide, rightSide): number => {
      if (leftSide['date'] > rightSide['date']) {
        return -1;
      }
      if (leftSide['date'] < rightSide['date']) {
        return 1;
      }
      return 0;
    });
  }
}
