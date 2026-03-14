import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-snippet',
  imports: [CommonModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss',
})
export class CodeSnippetComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  
  isCopied = false;

  copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.isCopied = true;
      setTimeout(() => this.isCopied = false, 2000);
    });
  }
}
