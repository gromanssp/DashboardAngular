import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router, RouterLink } from '@angular/router';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private toast: NgToastService,
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      agree: new FormControl(false, Validators.required),
    });

    this.registerForm.setValue({
      fullName: 'Jorge',
      email: 'jorge@test.com',
      password: '123456',
      confirmPassword: '123456',
      agree: false,
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.toast.danger('Invalid Form', 'Invalid Form');
      return;
    }

    if (!this.registerForm.value.agree) {
      this.toast.danger(
        'The Conditions must be true',
        'You dont acept the conditions'
      );
    } else {
      const user = new UserModel(
        this.registerForm.value.fullName,
        this.registerForm.value.email,
        this.registerForm.value.password
      );
      this._userService.addUser(user).subscribe({
        next: () => this.router.navigate(['login']),
        error: (err) => {
          const mensaje =
            err?.error?.message || err?.error?.mensaje || 'Error inesperado';

          return this.toast.danger(mensaje, 'Error');
        },
      });
      // .subscribe(_ => this.router.navigate(['login']));
      // this.toast.success('Success');
    }
  }
}
