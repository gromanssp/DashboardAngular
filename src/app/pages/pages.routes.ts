import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ToolsComponent } from './tools/tools.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonsGroupComponent } from './buttons-group/buttons-group.component';

export const pagesRoutes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'buttons-groups', component: ButtonsGroupComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'tools', component: ToolsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
