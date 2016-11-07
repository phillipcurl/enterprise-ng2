import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Event, EventService } from './../../shared';

@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimeComponent implements OnInit {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    mode: 'internal',
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      title: {
        title: 'Title',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: EventService) {
    this.service.getEvents().subscribe(
      events => {
        this.source.load(events);
        // this.isLoading = false;
      },
      error => {
        // this.isLoading = false;
        // this.errorMessage = < any > error;
      }
    );
  }

  ngOnInit() {

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
