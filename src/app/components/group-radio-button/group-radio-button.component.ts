import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-group-radio-button',
    templateUrl: './group-radio-button.component.html',
    styleUrl: './group-radio-button.component.scss',
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
