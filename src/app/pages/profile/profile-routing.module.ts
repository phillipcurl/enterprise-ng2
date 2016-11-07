import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { MeComponent } from './me/me.component';
import { SettingsComponent } from './settings/settings.component';

import { CanDeactivateGuard } from './../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'me',
        component: MeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ProfileRoutingModule { }
