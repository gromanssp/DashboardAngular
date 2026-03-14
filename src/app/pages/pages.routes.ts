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
import { ComponentsLayoutComponent } from './components-layout/components-layout.component';
import { WizardComponent } from './wizard/wizard.component';
import { CalendarComponent } from './calendar/calendar.component';

// Missing components imports
import { BadgesComponent } from './badges/badges.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalsComponent } from './modals/modals.component';
import { NavsComponent } from './navs/navs.component';
import { ProgressComponent } from './progress/progress.component';
import { TablesComponent } from './tables/tables.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

export const pagesRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'components',
    component: ComponentsLayoutComponent,
    children: [
      {path: 'buttons', component: ButtonsComponent},
      {path: 'buttons-group', component: ButtonsGroupComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'cards', component: CardsComponent},
      {path: 'badges', component: BadgesComponent},
      {path: 'collapse', component: CollapseComponent},
      {path: 'modals', component: ModalsComponent},
      {path: 'navs', component: NavsComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'tables', component: TablesComponent},
      {path: 'tooltips', component: TooltipsComponent},
      {path: '', redirectTo: 'buttons', pathMatch: 'full'}
    ]
  },
  {path: 'wizard', component: WizardComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
