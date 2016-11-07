import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from './../../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MeComponent } from './me/me.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    MeComponent,
    SettingsComponent
  ]
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProfileModule
    };
  }
}
