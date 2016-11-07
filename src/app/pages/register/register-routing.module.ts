import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

// import { CanDeactivateGuard } from './../../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RegisterComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RegisterRoutingModule { }
