import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [
      RouterOutlet
    ],
    standalone: true
})
export class MainComponent {

}
