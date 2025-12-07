import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DButtonDirective } from '../../directives/buttons/d-button.directive';
import { RippleDirective } from '../../directives/ripple.directive';
import { BtnGroupDirective } from '../../directives/buttons/btn-group.directive';

@Component({
  selector: 'app-group-checkbox-button',
  templateUrl: './group-checkbox-button.component.html',
  styleUrl: './group-checkbox-button.component.scss',
  imports: [BtnGroupDirective, DButtonDirective, RippleDirective, ReactiveFormsModule],
  standalone: true,
})
export class GroupCheckboxButtonComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkbox1: [false],
      checkbox2: [false],
      checkbox3: [false],
    });
  }

  onCheckboxChange(controlName: string): void {
    const currentValue = this.form.get(controlName)?.value;
    this.form.get(controlName)?.setValue(currentValue);
  }
}
