import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DButtonDirective } from '../../shared/ui/buttons/d-button.directive';
import { RippleDirective } from '../../shared/ui/ripple/ripple.directive';
import { BtnGroupDirective } from '../../shared/ui/buttons/btn-group.directive';

@Component({
    selector: 'app-group-radio-button',
    templateUrl: './group-radio-button.component.html',
    styleUrl: './group-radio-button.component.scss',
    imports: [
      CommonModule,
      BtnGroupDirective,
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
