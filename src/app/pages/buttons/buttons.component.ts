import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.scss',
    standalone: true
})
export class ButtonsComponent {

}
