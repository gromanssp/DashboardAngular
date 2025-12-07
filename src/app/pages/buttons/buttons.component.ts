import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.scss',
    imports: [
        DButtonDirective,
        RippleDirective
    ],
    standalone: true
})
export class ButtonsComponent {

}
