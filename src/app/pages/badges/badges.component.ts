import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-badges',
  imports: [CodeSnippetComponent],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
})
export class BadgesComponent {
  badgeCode1 = `<span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Primary</span>
<span class="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Danger</span>
<span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Success</span>`;

  badgeCode2 = `<span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-md bg-gray-100 text-gray-800">
  <i class="fas fa-star text-yellow-500"></i> Featured
</span>`;
}
