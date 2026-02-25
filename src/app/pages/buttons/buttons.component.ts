import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { DButtonDirective } from '../../shared/ui/buttons/d-button.directive';
import { RippleDirective } from '../../shared/ui/ripple/ripple.directive';

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
