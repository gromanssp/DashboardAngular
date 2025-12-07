import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DButtonDirective } from './d-button.directive';
import { BtnGroupDirective } from './btn-group.directive';
import { DGroupToolbarDirective } from './d-group-toolbar.directive';



@NgModule({
  declarations: [
    DGroupToolbarDirective, 
    BtnGroupDirective, 
    DButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DGroupToolbarDirective, 
    BtnGroupDirective, 
    DButtonDirective
  ]
})
export class ButtonModule { }
