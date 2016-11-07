import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'app',
        component: PagesComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
          },
          {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule'
          },
          {
            path: 'events',
            loadChildren: './events/events.module#EventsModule'
          },
          {
            path: 'time',
            loadChildren: './time/time.module#TimeModule'
          },
          {
            path: 'brands',
            loadChildren: './brands/brands.module#BrandsModule'
          },
          {
            path: 'manage',
            loadChildren: './manage/manage.module#ManageModule'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PagesRoutingModule { }
