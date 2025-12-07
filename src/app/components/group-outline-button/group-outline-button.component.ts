import { Component } from '@angular/core';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
  selector: 'app-group-outline-button',
  templateUrl: './group-outline-button.component.html',
  styleUrl: './group-outline-button.component.scss',
  imports: [
    DButtonDirective, 
    RippleDirective
  ],
  standalone: true,
})
export class GroupOutlineButtonComponent {}
