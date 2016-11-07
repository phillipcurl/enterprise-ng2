import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { CanDeactivateGuard } from './../../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LoginRoutingModule { }
