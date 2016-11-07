import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { CanDeactivateGuard } from './../../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AboutRoutingModule { }
