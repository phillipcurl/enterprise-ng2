import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './../../shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AboutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AboutModule
    };
  }
}
