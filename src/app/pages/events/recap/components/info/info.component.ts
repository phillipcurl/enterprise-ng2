import { Component, OnInit } from '@angular/core';
import { Event, EventService, DialogService } from './../../../../../shared';
import { RecapState } from './../../recap-state.service';

@Component({
  selector: 'recap-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent implements OnInit {
  employeeName: string;
  recapDate: string;
  employeeHours: number;
  storeNum: number;
  storeName: string;
  storeAddress: string;
  storeContact: string;
  demoLocation: string;
  demoCompany: string;
  distributor: string;
  storeTraffic: string;

  constructor(private EventService: EventService,
              public dialog: DialogService,
              public recapState: RecapState) {}

  ngOnInit() {
    this.employeeName = this.recapState.recap.employeeName;
    this.recapDate = this.recapState.recap.recapDate;
    this.employeeHours = this.recapState.recap.employeeHours;
    this.storeNum = this.recapState.recap.storeNum;
    this.storeName = this.recapState.recap.storeName;
    this.storeAddress = this.recapState.recap.storeAddress;
    this.storeContact = this.recapState.recap.storeContact;
    this.demoLocation = this.recapState.recap.demoLocation;
    this.demoCompany = this.recapState.recap.demoCompany;
    this.distributor = this.recapState.recap.distributor;
    this.storeTraffic = this.recapState.recap.storeTraffic;
  }

  showNext() {
    this.recapState.setRecap('employeeName', this.employeeName);
    this.recapState.setRecap('recapDate', this.recapDate);
    this.recapState.setRecap('employeeHours', this.employeeHours);
    this.recapState.setRecap('storeNum', this.storeNum);
    this.recapState.setRecap('storeName', this.storeName);
    this.recapState.setRecap('storeAddress', this.storeAddress);
    this.recapState.setRecap('storeContact', this.storeContact);
    this.recapState.setRecap('demoLocation', this.demoLocation);
    this.recapState.setRecap('demoCompany', this.demoCompany);
    this.recapState.setRecap('distributor', this.distributor);
    this.recapState.setRecap('storeTraffic', this.storeTraffic);
    this.recapState.setState('currentStep', 'products');
  }

}
