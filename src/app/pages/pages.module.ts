import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ToolsComponent } from './tools/tools.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RippleDirective } from '../directives/ripple.directive';
import { ButtonsGroupComponent } from './buttons-group/buttons-group.component';
import { ButtonModule } from '../directives/buttons/button.module';
import { ComponentsModule } from "../components/components.module";



@NgModule({
  declarations: [
    ButtonsComponent,
    FormsComponent,
    ChartsComponent,
    NotificationsComponent,
    ToolsComponent,
    CardsComponent,
    DashboardComponent,
    RippleDirective,
    ButtonsGroupComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    ComponentsModule
],
  exports: [
    RippleDirective
  ]
})
export class PagesModule { }
