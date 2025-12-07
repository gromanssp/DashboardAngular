import { Component } from '@angular/core';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';
import { BtnGroupDirective } from '../../directives/buttons/btn-group.directive';

@Component({
    selector: 'app-group-toolbar-button',
    templateUrl: './group-toolbar-button.component.html',
    styleUrl: './group-toolbar-button.component.scss',
    imports: [
        BtnGroupDirective,
        DButtonDirective,
        RippleDirective
    ],
    standalone: true
})
export class GroupToolbarButtonComponent {

}
