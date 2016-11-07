import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { TimeEntry, TimeService, LoaderComponent, AlertComponent, GridComponent, Column } from './../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-manage-time',
  templateUrl: 'manage-time.component.html',
  styleUrls: ['manage-time.component.css']
})
export class ManageTimeComponent implements OnActivate {
  
  time: Array<TimeEntry>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;
  private currSegment: RouteSegment;

  constructor(public TimeService: TimeService, private router: Router) {}

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.isLoading = true;
    this.TimeService.getTime().subscribe(
      time => {
        this.time = time;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
  }
  
  getColumns(): Array<Column> {
    return [
      new Column('date','Date'),
      new Column('lastName','Last Name'),
      new Column('email','Email Address'),
      new Column('phoneNumber', 'Phone Number')
    ];
  }

}
