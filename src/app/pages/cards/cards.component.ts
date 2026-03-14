import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss',
    imports: [CodeSnippetComponent],
    standalone: true
})
export class CardsComponent {
  cardCode1 = `<div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-gray-800 dark:text-white">Card Title</div>
    <p class="text-gray-700 dark:text-gray-300 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">Action</button>
  </div>
</div>`;
}
