import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

import { CanDeactivateGuard } from './../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ManageComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ManageRoutingModule { }
