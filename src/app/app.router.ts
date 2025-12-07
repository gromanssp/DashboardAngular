import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule),
  },
  {path: '**', component: PageNotFoundComponent},
];

