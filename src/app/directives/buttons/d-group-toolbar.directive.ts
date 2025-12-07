import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dGroupToolbar]',
    standalone: true
})
export class DGroupToolbarDirective implements AfterViewInit{

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement;

    const children = nativeEl.querySelectorAll(':scope > * > *');
    
    this.renderer.addClass(nativeEl, 'flex');
    this.renderer.setAttribute(nativeEl, 'role', 'group');

    children.forEach((child: HTMLElement) => {
      // Busca clases que coincidan con el patrón px-{n}
      const pxClass = Array.from(child.classList).find((cls) => this.isPxClass(cls));

      if (pxClass) {
        this.renderer.removeClass(child, pxClass); // Quita la clase original
        this.renderer.addClass(child, 'px-4'); // Añade la nueva clase
      }
    });
  }

  private isPxClass(className: string): boolean {
    return /^px-\d+$/.test(className);
  }
}
