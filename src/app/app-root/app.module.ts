/*
 * Import standard ng2 modules. Many common and necessary modules are included
 * via the SharedModule, which is explained in more detail below.
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*
 * Import the SharedModule. This module contains both common Angular modules
 * that would be included in each module we define, and global components that
 * we'd like to make available to the entire app (eg. the alert component). With
 * this strategy, it makes setting up modules much easier and more consistent.
 * For details on the difference, between AppModule-specific components and
 * global components, continue reading.
 */
import { SharedModule } from './../shared/shared.module';
import { PagesModule } from './../pages/pages.module';

/*
 * Import the App routes
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppState, InteralStateType, GlobalState } from './../shared';

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

/*
 * Define our main app module
 */
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule,
    SharedModule.forRoot(),
    PagesModule
  ],
  declarations: [
    AppComponent
    // ...APP_COMPONENTS
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
