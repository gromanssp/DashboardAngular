import { Component, EventEmitter, Output } from '@angular/core';
import { RippleDirective } from "../../directives/ripple.directive";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: true,
})
export class NavbarComponent {
  @Output() expanded = new EventEmitter<boolean>();
  expandSidebar = false;
  showUserMenu = false;

  toggleSidebar() {
    this.expandSidebar = !this.expandSidebar;
    this.expanded.emit(this.expandSidebar);
  }

  toogleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
}
