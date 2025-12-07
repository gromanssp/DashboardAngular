import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
    selector: 'app-group-radio-button',
    templateUrl: './group-radio-button.component.html',
    styleUrl: './group-radio-button.component.scss',
    imports: [
      CommonModule,
      DButtonDirective,
      RippleDirective,
      ReactiveFormsModule,
      RouterModule
    ],
    standalone: true
})
export class GroupRadioButtonComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectedRadio: ['Radio1'],
    });
  }

  onChange(selectedValue: string): void {
    this.form.patchValue({ selectedRadio: selectedValue });
  }
}
