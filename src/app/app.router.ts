import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then(m => m.pagesRoutes),
  },
  {path: '**', component: PageNotFoundComponent},
];

