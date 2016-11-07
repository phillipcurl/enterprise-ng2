import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { MomentModule } from 'angular2-moment';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {
  ThemeConfig,
  ThemeConfigProvider
} from './../theme';

import {
  // GridComponent,
  BackTopComponent,
  CardComponent,
  CheckboxComponent,
  ContentTopComponent,
  FullCalendarComponent,
  MenuComponent,
  MenuItemComponent,
  MsgCenterComponent,
  MultiCheckboxComponent,
  PictureUploaderComponent,
  PageTopComponent,
  SidebarComponent
} from './components';

import {
  ScrollPosition,
  SlimScroll,
  ThemeRun
} from './directives';

import {
  AppPicturePipe,
  KameleonPicturePipe,
  ProfilePicturePipe
} from './pipes';

import {
  ResponseHandlerService,
  DialogService,
  UserService,
  EventService,
  ImageLoaderService,
  ThemePreloader,
  ThemeSpinner
} from './services';

import { CanDeactivateGuard } from './guards';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const SHARED_COMPONENTS = [
  // GridComponent,
  BackTopComponent,
  CardComponent,
  CheckboxComponent,
  ContentTopComponent,
  FullCalendarComponent,
  MenuComponent,
  MenuItemComponent,
  MsgCenterComponent,
  MultiCheckboxComponent,
  PageTopComponent,
  PictureUploaderComponent,
  SidebarComponent
];

const SHARED_DIRECTIVES = [
  ScrollPosition,
  SlimScroll,
  ThemeRun
];

const SHARED_PIPES = [
  AppPicturePipe,
  KameleonPicturePipe,
  ProfilePicturePipe
];

const SHARED_SERVICES = [
  AUTH_PROVIDERS,
  CanDeactivateGuard,
  ResponseHandlerService,
  DialogService,
  UserService,
  EventService,
  ImageLoaderService,
  ThemePreloader,
  ThemeSpinner
];

const SHARED_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES
  ],
  exports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    Ng2SmartTableModule,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ThemeConfigProvider,
        ThemeConfig,
        ...SHARED_VALIDATORS,
        ...SHARED_SERVICES
      ],
    };
  }
}
