import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dGroup]',
    standalone: true
})
export class BtnGroupDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {}
  
  ngOnInit(): void {
    const nativeEl = this.el.nativeElement;
    this.render.addClass(nativeEl, 'flex');
    this.render.setAttribute(nativeEl, 'role', 'group');

    const inputs = nativeEl.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach((input: HTMLInputElement) => {
      this.render.setStyle(input, 'display', 'none');
    });
  }
}
