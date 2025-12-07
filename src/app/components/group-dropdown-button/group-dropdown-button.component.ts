import { Component } from '@angular/core';

@Component({
    selector: 'app-group-dropdown-button',
    templateUrl: './group-dropdown-button.component.html',
    styleUrl: './group-dropdown-button.component.scss',
    standalone: true
})
export class GroupDropdownButtonComponent {
  isOpen = false;

  toogleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
