import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-collapse',
  imports: [CodeSnippetComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss',
})
export class CollapseComponent {
  isCollapsed = false;

  collapseCode = `<button (click)="isCollapsed = !isCollapsed" class="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors font-medium">
  Toggle content
</button>
@if (!isCollapsed) {
  <div class="mt-4 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" style="animation: fade-in 0.3s ease-out;">
    Some placeholder content for the collapse component. This panel is controlled by evaluating the angular &#64;if directive locally via a boolean state.
  </div>
}`;
}
