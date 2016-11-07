import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { User, UserService, LoaderComponent, AlertComponent, GridComponent, Column } from './../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-manage-users',
  templateUrl: 'manage-users.component.html',
  styleUrls: ['manage-users.component.css'],
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]

})
export class ManageUsersComponent implements OnActivate {

  users: Array<User>;
  editedUsers: Array<User>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;
  private currSegment: RouteSegment;

  constructor(public UserService: UserService, private router: Router) {}

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.isLoading = true;
    this.UserService.getUsers().subscribe(
      users=> {
        this.users = users;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
    
  }
  
  saveObject(user){
    this.UserService.updateUser(user).subscribe(
      user => {
        this.editedUsers.push(user);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }
  
  getColumns(): Array<Column> {
    return [
      new Column('firstName','First Name'),
      new Column('lastName','Last Name'),
      new Column('email','Email Address'),
      new Column('phoneNumber', 'Phone Number')
    ];
  }

}
