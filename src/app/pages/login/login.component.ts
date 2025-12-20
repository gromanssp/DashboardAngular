import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../../models/user-model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(public router: Router, public _usuarioService: UserService, private toast: NgToastService) {  }

  ngOnInit() {
    const email = localStorage.getItem("email") || "";
    let rememberMe = false;
    
    if (email.length > 1) {
      rememberMe = true;
    }

    this.loginForm = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      remember: new FormControl(rememberMe)
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.toast.danger('Invalid Form', 'Invalid Form')
      return;
    }

    const usuario = new UserModel('', this.loginForm.value.email, this.loginForm.value.password);

    this._usuarioService
      .login(usuario, this.loginForm.value.recuerdame)
      .subscribe((_) => this.router.navigate(["dashboard"]));
  }
}
