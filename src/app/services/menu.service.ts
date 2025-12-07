import { Injectable } from '@angular/core';
import { MenuItems } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems = [
    { icon: 'fa-home', label: 'Inicio', url: 'home'},
    { icon: 'fa-layer-group', 
      label: 'Botones', 
      submenu:[ 
        {
          label: 'Botones', url: 'buttons'
        },
        {
          label: 'Grupo de botones', url: 'buttons-groups'
        }],
      isOpen: false
    },
    { icon: 'fa-edit', label: 'Formularios', url: 'forms' },
    { icon: 'fa-chart-pie', label: 'Gráficos', url: 'charts' },
    { icon: 'fa-bell', label: 'Notificaciones', url: 'notifications' },
    { icon: 'fa-address-card', label: 'Tarjetas', url: 'cards' },
    { icon: 'fa-tools', label: 'Configuraciones', url: 'tools' },
  ];

  constructor() { }
}
