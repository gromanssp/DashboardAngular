import { Component } from '@angular/core';

@Component({
    selector: 'app-buttons-group',
    templateUrl: './buttons-group.component.html',
    styleUrl: './buttons-group.component.scss',
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
