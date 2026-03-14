import { Injectable } from '@angular/core';
import { MenuItems } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    { icon: 'fa-home', label: 'Inicio', url: 'dashboard'},
    { icon: 'fa-layer-group', label: 'Componentes', 
      submenu: [
        { label: 'Buttons', url: 'components/buttons' },
        { label: 'Button Groups', url: 'components/buttons-group' },
        { label: 'Badges', url: 'components/badges' },
        { label: 'Cards', url: 'components/cards' },
        { label: 'Collapse', url: 'components/collapse' },
        { label: 'Forms', url: 'components/forms' },
        { label: 'Modals', url: 'components/modals' },
        { label: 'Navs', url: 'components/navs' },
        { label: 'Progress Bars', url: 'components/progress' },
        { label: 'Tables', url: 'components/tables' },
        { label: 'Tooltips', url: 'components/tooltips' }
      ],
      isOpen: false
    },
    { icon: 'fa-magic', label: 'Wizard', url: 'wizard' },
    { icon: 'fa-calendar-alt', label: 'Calendario', url: 'calendar' },
    { icon: 'fa-chart-pie', label: 'Gráficos', url: 'charts' },
    { icon: 'fa-bell', label: 'Notificaciones', url: 'notifications' },
    { icon: 'fa-tools', label: 'Configuraciones', url: 'tools' },
    { icon: 'fa-user', label: 'Perfil',
      submenu: [
        { label: 'Login', url: 'login' },
        { label: 'Registro', url: 'register' }
      ],
      isOpen: false 
    }
  ];

  constructor() { }
}
