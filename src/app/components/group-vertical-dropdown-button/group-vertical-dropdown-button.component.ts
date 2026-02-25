import { Component } from '@angular/core';
import { DButtonDirective } from '../../shared/ui/buttons/d-button.directive';
import { RippleDirective } from '../../shared/ui/ripple/ripple.directive';
import { BtnGroupDirective } from '../../shared/ui/buttons/btn-group.directive';

@Component({
  selector: 'app-group-vertical-dropdown-button',
  templateUrl: './group-vertical-dropdown-button.component.html',
  styleUrl: './group-vertical-dropdown-button.component.scss',
  imports: [BtnGroupDirective, DButtonDirective, RippleDirective],
  standalone: true,
})
export class GroupVerticalDropdownButtonComponent {
  isDropdownOpen: { [key: string]: boolean } = {};

  toggleDropdown(direction: string) {
    this.isDropdownOpen[direction] = !this.isDropdownOpen[direction];
    // Cierra los otros dropdowns y abre el seleccionado
    Object.keys(this.isDropdownOpen).forEach((key) => {
      if (key !== direction) {
        this.isDropdownOpen[key] = false;
      }
    });
  }
}
