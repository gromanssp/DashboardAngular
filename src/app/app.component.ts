import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgToastComponent, TOAST_POSITIONS } from 'ng-angular-popup';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    NgToastComponent,
    BreadcrumbsComponent
],
    standalone: true
})
export class AppComponent {
  title = 'dashboardAngular';
  TOAST_POSITIONS = TOAST_POSITIONS;
  expandedSidebar = false;
}
