import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './../../shared';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [
    SharedModule,
    ManageRoutingModule
  ],
  declarations: [
    ManageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ManageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ManageModule
    };
  }
}
