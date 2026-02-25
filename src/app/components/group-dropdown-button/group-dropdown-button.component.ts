import { Component } from '@angular/core';
import { DButtonDirective } from '../../shared/ui/buttons/d-button.directive';
import { RippleDirective } from '../../shared/ui/ripple/ripple.directive';
import { BtnGroupDirective } from '../../shared/ui/buttons/btn-group.directive';

@Component({
  selector: 'app-group-dropdown-button',
  templateUrl: './group-dropdown-button.component.html',
  styleUrl: './group-dropdown-button.component.scss',
  imports: [BtnGroupDirective, DButtonDirective, RippleDirective],
  standalone: true,
})
export class GroupDropdownButtonComponent {
  isOpen = false;

  toogleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
