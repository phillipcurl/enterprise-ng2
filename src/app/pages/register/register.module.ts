import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './../../shared';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegisterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RegisterModule
    };
  }
}
