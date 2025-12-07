import { Component } from '@angular/core';
import { GroupOutlineButtonComponent } from '../../components/group-outline-button/group-outline-button.component';
import { GroupToolbarButtonComponent } from '../../components/group-toolbar-button/group-toolbar-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupCheckboxButtonComponent } from '../../components/group-checkbox-button/group-checkbox-button.component';
import { GroupDropdownButtonComponent } from '../../components/group-dropdown-button/group-dropdown-button.component';
import { GroupRadioButtonComponent } from '../../components/group-radio-button/group-radio-button.component';
import { GroupVerticalDropdownButtonComponent } from '../../components/group-vertical-dropdown-button/group-vertical-dropdown-button.component';
import { BtnGroupDirective } from '../../directives/buttons/btn-group.directive';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { DGroupToolbarDirective } from '../../directives/buttons/d-group-toolbar.directive';
import { GroupVerticalButtonComponent } from '../../components/group-vertical-button/group-vertical-button.component';

@Component({
    selector: 'app-buttons-group',
    templateUrl: './buttons-group.component.html',
    styleUrl: './buttons-group.component.scss',
    imports: [
      CommonModule,
      GroupOutlineButtonComponent,
      GroupCheckboxButtonComponent,
      GroupDropdownButtonComponent,
      GroupRadioButtonComponent,
      GroupVerticalButtonComponent,
      GroupVerticalDropdownButtonComponent,
      GroupToolbarButtonComponent,
      BtnGroupDirective, 
      DButtonDirective
    ],
    standalone: true
})
export class ButtonsGroupComponent {
  activeButton1 = true;
  isActiveCheckbox1 = true;
  isActiveCheckbox2 = false;
  isActiveCheckbox3 = false;

  toogleButton() {
    this.activeButton1 = !this.activeButton1;
  }

  toogleCheckbox1() {
    this.isActiveCheckbox1 = !this.isActiveCheckbox1;
  }

  toogleCheckbox2() {
    this.isActiveCheckbox2 = !this.isActiveCheckbox2;
  }
  toogleCheckbox3() {
    this.isActiveCheckbox3 = !this.isActiveCheckbox3;
  }
}
