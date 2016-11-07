import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../shared';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
