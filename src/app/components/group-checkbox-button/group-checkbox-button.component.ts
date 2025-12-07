import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-group-checkbox-button',
    templateUrl: './group-checkbox-button.component.html',
    styleUrl: './group-checkbox-button.component.scss',
    standalone: true
})
export class GroupCheckboxButtonComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
    })
  }

  onCheckboxChange(controlName: string): void {
    const currentValue = this.form.get(controlName)?.value;
    this.form.get(controlName)?.setValue(currentValue);
  }
}
