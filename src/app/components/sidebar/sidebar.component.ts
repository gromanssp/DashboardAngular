import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItems } from '../../models/menu-items';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [
      CommonModule,
      RouterModule
    ],
    standalone: true
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded! : boolean;
  menuItems: MenuItems[] = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.menuItems.push(...this.menuService.menuItems);
  }

  toogleSubmenu(item: any) {
    if(item.submenu){
      item.isOpen = !item.isOpen;
    }
  }

  closeTabSubmenu(item: any, expanded: boolean) {
    if(expanded == false) {
      item.isOpen = false;
    } else {
      return item.url;
    }
  }

}
