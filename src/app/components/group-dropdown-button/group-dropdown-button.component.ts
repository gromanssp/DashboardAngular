import { Component } from '@angular/core';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-group-dropdown-button',
  templateUrl: './group-dropdown-button.component.html',
  styleUrl: './group-dropdown-button.component.scss',
  imports: [DButtonDirective, RippleDirective],
  standalone: true,
})
export class GroupDropdownButtonComponent {
  isOpen = false;

  toogleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
