import { PreviewComponent } from './dashboard/preview/preview.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', 
   component: DashboardComponent,
   children: [
      {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full'
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'preview',
        component: PreviewComponent
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', component: NotFound404Component},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}