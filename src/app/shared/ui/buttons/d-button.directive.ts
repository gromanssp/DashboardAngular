import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { btnClase, ButtonSize, ButtonVariety } from './button.types';

@Directive({
    selector: '[dButton]',
    standalone: true
})
export class DButtonDirective implements OnInit, OnChanges {
  @Input() color: string = 'primary';
  @Input() variety: ButtonVariety = 'filled';
  @Input() active?: boolean | null;
  @Input() size: ButtonSize = 'md';
  isInButtonGroup = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostBinding('class.active') get isActive() {
    return this.active;
  }

  @HostListener('click')
  onClick() {
    const parent = this.el.nativeElement.parentElement;
    const labels = parent.querySelectorAll('label[cFormCheckLabel]');
    labels.forEach((label: HTMLElement) => {
      label.classList.remove('active');
    });
    this.renderer.addClass(this.el.nativeElement, 'active');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('active' in changes) {
      this.updateActiveState();
    }
  }

  ngOnInit(): void {
    const nativeEl = this.el.nativeElement;
    const parent = nativeEl.parentElement;
  
    // Verifica si el padre tiene el atributo role con el valor `group`
    this.isInButtonGroup = parent?.getAttribute('role') === 'group';
  
    if (this.isInButtonGroup) {

      const groupParent = this.el.nativeElement.closest('[dGroup]');
      if (!groupParent) {
        this.applyCommonClasses();
        return;
      }

      const visibleChildren = Array.from(groupParent.querySelectorAll('label, button'))
        .filter((child: any) => child.closest('[dGroup]') === groupParent);

        const isFirst = visibleChildren.length > 0 && visibleChildren[0] === nativeEl;
        const isLast = visibleChildren.length > 0 && visibleChildren[visibleChildren.length - 1] === nativeEl;

      const isColumnLayout = nativeEl.parentElement.classList.contains('flex-col');

      this.applyClasses(isFirst, isLast, visibleChildren.length, isColumnLayout);
    } else {
      this.applyCommonClasses(); // Aplica las clases generales si no está en un grupo
    }
  }

  // Mapa de configuracion css para cargan en tailwind
  private colorMap: Record<string, Record<btnClase, string>> = {
    primary: {
      bg:         'bg-primary',
      bgMuted:    'bg-primary/80',
      text:       'text-primary',
      border:     'border-primary',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-primary/20',
      hoverShadow:'hover:shadow-primary/40',
      hoverBg:    'hover:bg-primary',
      hoverBg80:  'hover:bg-primary/80'
    },
    secondary: {
      bg:         'bg-secondary',
      bgMuted:    'bg-secondary/80',
      text:       'text-secondary',
      border:     'border-secondary',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-secondary/20',
      hoverShadow:'hover:shadow-secondary/40',
      hoverBg:    'hover:bg-secondary',
      hoverBg80:  'hover:bg-secondary/80'
    },
    success: {
      bg:         'bg-success',
      bgMuted:    'bg-success/80',
      text:       'text-success',
      border:     'border-success',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-success/20',
      hoverShadow:'hover:shadow-success/40',
      hoverBg:    'hover:bg-success',
      hoverBg80:  'hover:bg-success/80'
    },
    danger: {
      bg:         'bg-danger',
      bgMuted:    'bg-danger/80',
      text:       'text-danger',
      border:     'border-danger',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-danger/20',
      hoverShadow:'hover:shadow-danger/40',
      hoverBg:    'hover:bg-danger',
      hoverBg80:  'hover:bg-danger/80'
    },
    warning: {
      bg:         'bg-warning',
      bgMuted:    'bg-warning/80',
      text:       'text-warning',
      border:     'border-warning',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-warning/20',
      hoverShadow:'hover:shadow-warning/40',
      hoverBg:    'hover:bg-warning',
      hoverBg80:  'hover:bg-warning/80'
    },
    info: {
      bg:         'bg-info',
      bgMuted:    'bg-info/80',
      text:       'text-info',
      border:     'border-info',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-info/20',
      hoverShadow:'hover:shadow-info/40',
      hoverBg:    'hover:bg-info',
      hoverBg80:  'hover:bg-info/80'
    },
    light: {
      bg:         'bg-light',
      bgMuted:    'bg-light/80',
      text:       'text-light',
      border:     'border-light',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-light/20',
      hoverShadow:'hover:shadow-light/40',
      hoverBg:    'hover:bg-light',
      hoverBg80:  'hover:bg-light/80'
    },
    dark: {
      bg:         'bg-dark',
      bgMuted:    'bg-dark/80',
      text:       'text-dark',
      border:     'border-dark',
      bgWhite:    'bg-white',
      textWhite:  'text-white',
      shadow:     'shadow-dark/20',
      hoverShadow:'hover:shadow-dark/40',
      hoverBg:    'hover:bg-dark',
      hoverBg80:  'hover:bg-dark/80'
    },
  };

  private applyCommonClasses() {
    const nativeEl = this.el.nativeElement;
    const c = this.colorMap[this.color];

    // Clases comunes a todos los botones
    this.renderer.addClass(nativeEl, 'select-none');
    this.renderer.addClass(nativeEl, 'relative');
    this.renderer.addClass(nativeEl, 'overflow-hidden');
    this.renderer.addClass(nativeEl, 'text-center');
    this.renderer.addClass(nativeEl, 'align-middle');
    this.renderer.addClass(nativeEl, 'font-sans');
    this.renderer.addClass(nativeEl, 'text-xs');
    this.renderer.addClass(nativeEl, 'font-bold');
    this.renderer.addClass(nativeEl, 'uppercase');
    this.renderer.addClass(nativeEl, 'shadow-md');
    this.renderer.addClass(nativeEl, 'transition-all');
    this.renderer.addClass(nativeEl, 'disabled:pointer-events-none');
    this.renderer.addClass(nativeEl, 'disabled:opacity-50');
    this.renderer.addClass(nativeEl, 'disabled:shadow-none');
    this.renderer.addClass(nativeEl, c.shadow);
    this.renderer.addClass(nativeEl, 'hover:shadow-lg');
    this.renderer.addClass(nativeEl, c.hoverShadow);
    this.renderer.addClass(nativeEl, 'focus:opacity-[0.85]');
    this.renderer.addClass(nativeEl, 'focus:shadow-none');
    this.renderer.addClass(nativeEl, 'active:shadow-none');

    if(!this.isInButtonGroup) {
      this.renderer.addClass(nativeEl, 'rounded-lg');
    }
    
    switch (this.variety) {
      case 'outline':
        this.renderer.addClass(nativeEl, 'py-[10px]');
        this.renderer.addClass(nativeEl, 'px-[22px]');
        this.renderer.addClass(nativeEl, 'border-2');
        this.renderer.addClass(nativeEl, c.border);
        this.renderer.addClass(nativeEl, `bg-white`);
        this.renderer.addClass(nativeEl, c.hoverBg);
        this.validateLightButton(nativeEl, c.text, true);
        break;
      case 'ghost':
        this.commonRenderers(nativeEl, c.bg);
        this.renderer.addClass(nativeEl, `bg-white`);
        this.renderer.addClass(nativeEl, c.hoverBg);
        this.renderer.removeClass(nativeEl, c.shadow);
        this.renderer.removeClass(nativeEl, `shadow-md`);
        this.validateLightButton(nativeEl, c.text, true);
        break;
      case 'pill':
        this.renderer.removeClass(nativeEl, 'rounded-lg');
        this.commonRenderers(nativeEl, c.bg);
        this.renderer.addClass(nativeEl, 'rounded-3xl');
        this.renderer.addClass(nativeEl, c.hoverBg80);
        this.validateLightButton(nativeEl, c.text);
        break;
      case 'square':
        this.renderer.removeClass(nativeEl, 'rounded-lg');
        this.commonRenderers(nativeEl, c.bg);
        this.renderer.addClass(nativeEl, 'rounded-sm');
        this.renderer.addClass(nativeEl, c.hoverBg80);
        this.validateLightButton(nativeEl, c.text);
        break;
      default:
        this.commonRenderers(nativeEl, c.bg);
        this.renderer.addClass(nativeEl, c.hoverBg80);
        this.validateLightButton(nativeEl, c.text);
        break;
    }

    this.updateActiveState();
  }

  private commonRenderers(nativeEl: any, bg: string) {
    this.renderer.addClass(nativeEl, 'py-3');
    this.renderer.addClass(nativeEl, 'px-6');
    this.renderer.addClass(nativeEl, bg);
  }

  private validateLightButton(nativeEl: any, textColor: string, extra?: boolean) {
    if(this.color == 'light') {
      this.renderer.addClass(nativeEl, 'text-dark');
      this.renderer.addClass(nativeEl, `hover:text-dark/40`);
    } else if(extra) {
      this.renderer.addClass(nativeEl, textColor);
      this.renderer.addClass(nativeEl, `hover:text-white`);
    } else {
      this.renderer.addClass(nativeEl, 'text-white');
    }
  }

  private applyClasses(isFirst: boolean, isLast: boolean, totalElements: number, isColumnLayout: boolean) {
    this.applyCommonClasses(); // Aplica las clases comunes

    const nativeEl = this.el.nativeElement;
    const toolbarElement = this.checkIfInGroupToolbar();

    [ 
      'rounded-s-lg',
      'rounded-e-lg', 
      'rounded-t-lg', 
      'rounded-b-lg'
    ].forEach(cls => {
      this.renderer.removeClass(nativeEl, cls);
    });
    
    if (isColumnLayout) {
      if (isFirst) {
        this.renderer.addClass(nativeEl, 'rounded-t-lg'); // Borde superior redondeado
      }
      if (isLast) {
        this.renderer.addClass(nativeEl, 'rounded-b-lg'); // Borde inferior redondeado
      }
    } else { 
      // Clases específicas para el primer y último botón
      if (isFirst) {
        this.renderer.addClass(nativeEl, 'rounded-s-lg');
        if(totalElements === 3 && !toolbarElement){
          this.renderer.addClass(nativeEl, 'border-e-2');
        }
      }
      if (isLast) {
        this.renderer.addClass(nativeEl, 'rounded-e-lg');
        if(totalElements === 3 && !toolbarElement){
          this.renderer.addClass(nativeEl, 'border-s-2');
        }
      }
    }
  }

  private checkIfInGroupToolbar(): boolean {
    let currentElement: HTMLElement | null = this.el.nativeElement;

    while (currentElement) {
      // Verifica si tiene el atributo de la directiva dGroupToolbar
      if (currentElement.hasAttribute('dGroupToolbar')) {
        console.log('Este botón está dentro de un dGroupToolbar.');
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }

  private updateActiveState() {
    const nativeEl = this.el.nativeElement;
    const c = this.colorMap[this.color];

    if (this.active) {
      switch (this.variety) {
        case 'outline':
        case 'ghost':
          this.renderer.removeClass(nativeEl, `bg-white`);
          this.renderer.addClass(nativeEl, `text-white`);
          this.renderer.addClass(nativeEl, c.bg);
          break;
        case 'pill':
        case 'square':
          this.renderer.removeClass(nativeEl, c.bg);
          this.renderer.addClass(nativeEl, c.bgMuted);
          break;
        default:
          this.renderer.addClass(nativeEl, c.bgMuted);
          break;
      }
    } else if(this.active == false) {
      switch (this.variety) {
        case 'outline':
        case 'ghost':
          this.renderer.removeClass(nativeEl, `text-white`);
          this.renderer.removeClass(nativeEl, c.bg);
          this.renderer.addClass(nativeEl, c.text);
          this.renderer.addClass(nativeEl, `bg-white`);
          break;
        case 'pill':
        case 'square':
          this.renderer.removeClass(nativeEl, c.bgMuted);
          this.renderer.addClass(nativeEl, c.bg);
          break;
        default:
          this.renderer.removeClass(nativeEl, c.bgMuted);
          break;
      }
    }
  }
}
