import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TimeComponent } from './time.component';

import { CanDeactivateGuard } from './../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TimeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class TimeRoutingModule { }
