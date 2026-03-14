import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-tooltips',
  imports: [CodeSnippetComponent],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.scss',
})
export class TooltipsComponent {
  tooltipCode1 = `<div class="relative flex flex-col items-center group">
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Hover me
  </button>
  <div class="absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex">
    <div class="relative z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-gray-900 shadow-lg rounded-md">
      Tooltip content
    </div>
    <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-900"></div>
  </div>
</div>`;
}
