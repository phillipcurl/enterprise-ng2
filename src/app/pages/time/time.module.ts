import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './../../shared';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';

@NgModule({
  imports: [
    SharedModule,
    TimeRoutingModule
  ],
  declarations: [
    TimeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TimeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TimeModule
    };
  }
}
