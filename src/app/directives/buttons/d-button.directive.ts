import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[dButton]',
    standalone: true
})
export class DButtonDirective implements OnInit, OnChanges {
  @Input() color: string = 'primary';
  @Input() variety?: string | null;
  @Input() active?: boolean | null;
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

  private applyCommonClasses() {
    const nativeEl = this.el.nativeElement;

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
    this.renderer.addClass(nativeEl, `shadow-${this.color}/20`);
    this.renderer.addClass(nativeEl, 'hover:shadow-lg');
    this.renderer.addClass(nativeEl, `hover:shadow-${this.color}/40`);
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
        this.renderer.addClass(nativeEl, `border-${this.color}`);
        this.renderer.addClass(nativeEl, `bg-white`);
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}`);
        this.validateLightButton(nativeEl, true);
        break;
      case 'ghost':
        this.commonRenderers(nativeEl);
        this.renderer.addClass(nativeEl, `bg-white`);
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}`);
        this.renderer.removeClass(nativeEl, `shadow-${this.color}/20`);
        this.renderer.removeClass(nativeEl, `shadow-md`);
        this.validateLightButton(nativeEl, true);
        break;
      case 'large':
        this.renderer.addClass(nativeEl, 'py-4');
        this.renderer.addClass(nativeEl, 'px-8');
        this.renderer.addClass(nativeEl, `bg-${this.color}`);
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}/80`);
        this.validateLightButton(nativeEl);
        break;
      case 'small':
        this.renderer.addClass(nativeEl, 'py-2');
        this.renderer.addClass(nativeEl, 'px-6');
        this.renderer.addClass(nativeEl, `bg-${this.color}`);
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}/80`);
        this.validateLightButton(nativeEl);
        break;
      case 'pill':
        this.renderer.removeClass(nativeEl, 'rounded-lg');
        this.commonRenderers(nativeEl);
        this.renderer.addClass(nativeEl, 'rounded-3xl');
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}/80`);
        this.validateLightButton(nativeEl);
        break;
      case 'square':
        this.renderer.removeClass(nativeEl, 'rounded-lg');
        this.commonRenderers(nativeEl);
        this.renderer.addClass(nativeEl, 'rounded-sm');
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}/80`);
        this.validateLightButton(nativeEl);
        break;
      default:
        this.commonRenderers(nativeEl);
        this.renderer.addClass(nativeEl, `hover:bg-${this.color}/80`);
        this.validateLightButton(nativeEl);
        break;
    }

    this.updateActiveState();
  }

  private commonRenderers(nativeEl: any) {
    this.renderer.addClass(nativeEl, 'py-3');
    this.renderer.addClass(nativeEl, 'px-6');
    this.renderer.addClass(nativeEl, `bg-${this.color}`);
  }

  private validateLightButton(nativeEl: any, extra?: boolean) {
    if(this.color == 'light') {
      this.renderer.addClass(nativeEl, 'text-dark');
      this.renderer.addClass(nativeEl, `hover:text-dark/40`);
    } else if(extra) {
      this.renderer.addClass(nativeEl, `text-${this.color}`);
      this.renderer.addClass(nativeEl, `hover:text-white`);
    } else {
      this.renderer.addClass(nativeEl, 'text-white');
    }
  }

  private applyClasses(isFirst: boolean, isLast: boolean, totalElements: number, isColumnLayout: boolean) {
    this.applyCommonClasses(); // Aplica las clases comunes

    const nativeEl = this.el.nativeElement;
    const toolbarElement = this.checkIfInGroupToolbar();

    ['rounded-s-lg', 'rounded-e-lg', 'rounded-t-lg', 'rounded-b-lg'].forEach(cls => {
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

    if (this.active) {
      switch (this.variety) {
        case 'outline':
        case 'ghost':
          this.renderer.removeClass(nativeEl, `bg-white`);
          this.renderer.addClass(nativeEl, `text-white`);
          this.renderer.addClass(nativeEl, `bg-${this.color}`);
          break;
        case 'large':
        case 'small':
        case 'pill':
        case 'square':
          this.renderer.removeClass(nativeEl, `bg-${this.color}`);
          this.renderer.addClass(nativeEl, `bg-${this.color}/80`);
          break;
        default:
          this.renderer.addClass(nativeEl, `bg-${this.color}/80`);
          break;
      }
    } else if(this.active == false) {
      switch (this.variety) {
        case 'outline':
        case 'ghost':
          this.renderer.removeClass(nativeEl, `text-white`);
          this.renderer.removeClass(nativeEl, `bg-${this.color}`);
          this.renderer.addClass(nativeEl, `text-${this.color}`);
          this.renderer.addClass(nativeEl, `bg-white`);
          break;
        case 'large':
        case 'small':
        case 'pill':
        case 'square':
          this.renderer.removeClass(nativeEl, `bg-${this.color}/80`);
          this.renderer.addClass(nativeEl, `bg-${this.color}`);
          break;
        default:
          this.renderer.removeClass(nativeEl, `bg-${this.color}/80`);
          break;
      }
    }
  }
}
