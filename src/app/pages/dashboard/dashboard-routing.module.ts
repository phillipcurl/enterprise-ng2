import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CanDeactivateGuard } from './../../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class DashboardRoutingModule { }
