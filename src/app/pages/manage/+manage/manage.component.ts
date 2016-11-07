// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:  PC
// @Last modified time: 2016-05-13T21:26:21-04:00

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { ManageUsersComponent } from './+manage-users';
import { ManageEventsComponent } from './+manage-events';
import { ManageTimeComponent } from './+manage-time';
import { ManageBrandsComponent } from './+manage-brands';
import { ManageLocationsComponent } from './+manage-locations';
import { ManageClientsComponent } from './+manage-clients';
import { ManageCampaignsComponent } from './+manage-campaigns';
import { UserService } from './../shared';

@Component({
  moduleId: module.id,
  selector: 'app-manage',
  templateUrl: 'manage.component.html',
  styleUrls: ['manage.component.css'],
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/', component: ManageUsersComponent },
  {path: '/users', component: ManageUsersComponent },
  {path: '/events', component: ManageEventsComponent},
  {path: '/time', component: ManageTimeComponent},
  {path: '/brands', component: ManageBrandsComponent},
  {path: '/locations', component: ManageLocationsComponent},
  {path: '/clients', component: ManageClientsComponent},
  {path: '/campaigns', component: ManageCampaignsComponent}
  
 
  // , useAsDefault: true}, // coming soon
  // { path: '/:id', component: EventDetailComponent }
])

export class ManageComponent implements OnInit {
  isClassVisible: boolean = false;
  
  constructor() {}

  ngOnInit() {}
}
