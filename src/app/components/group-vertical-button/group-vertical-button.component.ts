import { Component } from '@angular/core';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-group-vertical-button',
  templateUrl: './group-vertical-button.component.html',
  styleUrl: './group-vertical-button.component.scss',
  imports: [DButtonDirective, RippleDirective],
  standalone: true,
})
export class GroupVerticalButtonComponent {}
