import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ToolsComponent } from './tools/tools.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsGroupComponent } from './buttons-group/buttons-group.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const pagesRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'buttons-groups', component: ButtonsGroupComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
