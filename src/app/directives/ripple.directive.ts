import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appRipple]',
    standalone: true
})
export class RippleDirective {

  constructor(
    private el: ElementRef, 
    private render: Renderer2
  ) { }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const button = this.el.nativeElement;
    const ripple = this.render.createElement('span');

    // Estilo del Ripple
    this.render.setStyle(ripple, 'position', 'absolute');
    this.render.setStyle(ripple, 'border-radius', '50%');
    this.render.setStyle(ripple, 'transform', 'scale(0)');
    this.render.setStyle(ripple, 'animation', 'ripple-animation 0.6s linear');
    this.render.setStyle(ripple, 'background', 'rgba(255, 255, 255, 0.5)');
    this.render.setStyle(ripple, 'pointer-event', 'none');

    // Posicionamiento del ripple
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x =  event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top -size / 2;

    this.render.setStyle(ripple, 'width', `${size}px`);
    this.render.setStyle(ripple, 'height', `${size}px`);
    this.render.setStyle(ripple, 'top', `${y}px`);
    this.render.setStyle(ripple, 'left', `${x}px`);

    // Añadir y limpiar el ripple
    this.render.appendChild(button, ripple);
    setTimeout(() => this.render.removeChild(button, ripple), 600);

    // Eliminar estado activo
    button.blur();
  }

}
