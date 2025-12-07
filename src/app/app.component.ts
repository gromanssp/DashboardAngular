import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      SidebarComponent,
      NavbarComponent,
      MainComponent
    ],
    standalone: true
})
export class AppComponent {
  title = 'dashboardAngular';
  expandedSidebar = false;
}
