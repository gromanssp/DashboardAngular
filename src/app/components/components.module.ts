import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GroupRadioButtonComponent } from './group-radio-button/group-radio-button.component';
import { ButtonModule } from '../directives/buttons/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupCheckboxButtonComponent } from './group-checkbox-button/group-checkbox-button.component';
import { GroupToolbarButtonComponent } from './group-toolbar-button/group-toolbar-button.component';
import { GroupDropdownButtonComponent } from './group-dropdown-button/group-dropdown-button.component';
import { GroupOutlineButtonComponent } from './group-outline-button/group-outline-button.component';
import { GroupVerticalButtonComponent } from './group-vertical-button/group-vertical-button.component';
import { GroupVerticalDropdownButtonComponent } from './group-vertical-dropdown-button/group-vertical-dropdown-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    GroupRadioButtonComponent,
    GroupCheckboxButtonComponent,
    GroupToolbarButtonComponent,
    GroupDropdownButtonComponent,
    GroupOutlineButtonComponent,
    GroupVerticalButtonComponent,
    GroupVerticalDropdownButtonComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    GroupRadioButtonComponent,
    GroupCheckboxButtonComponent,
    GroupToolbarButtonComponent,
    GroupDropdownButtonComponent,
    GroupOutlineButtonComponent,
    GroupVerticalButtonComponent,
    GroupVerticalDropdownButtonComponent
  ]
})
export class ComponentsModule { }
