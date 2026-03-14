import { Component } from '@angular/core';
import { CodeSnippetComponent } from '../../shared/components/code-snippet/code-snippet.component';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss',
    imports: [CodeSnippetComponent],
    standalone: true
})
export class FormsComponent {
  formCode1 = `<form class="w-full max-w-sm">
  <div class="mb-4">
    <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 leading-tight focus:outline-none focus:ring focus:border-blue-500" id="username" type="text" placeholder="Username">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 mb-3 leading-tight focus:outline-none focus:ring focus:border-blue-500" id="password" type="password" placeholder="******************">
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring" type="button">
      Sign In
    </button>
  </div>
</form>`;
}
