import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
  selector: 'app-progress',
  imports: [CodeSnippetComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  progressCode1 = `<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-4 mb-4">
  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
</div>
<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-4">
  <div class="bg-green-500 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full" style="width: 70%"> 70%</div>
</div>`;
}
