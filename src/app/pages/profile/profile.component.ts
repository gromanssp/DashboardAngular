import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserModel } from '../../models/user-model';
import { ImgPipe } from '../../pipe/img.pipe';
import { RippleDirective } from '../../shared/ui/ripple/ripple.directive';
import { DButtonDirective } from '../../shared/ui/buttons/d-button.directive';
import { UserService } from '../../services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [
    CommonModule,
    ImgPipe,
    ReactiveFormsModule,
    RippleDirective,
    DButtonDirective,
  ],
})
export class ProfileComponent implements OnInit {
  currentUser!: UserModel;
  profileForm!: FormGroup;

  imgUp: File | undefined;
  imgTemp: any;
  imgLn: string = 'assets/img/sociales/linkedin-96.png';
  imgFb: string = 'assets/img/sociales/facebook-96.png';

  constructor(
    private userService: UserService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    // load User from Storage or default value
    this.userService.userModel != null
      ? (this.currentUser = this.userService.userModel)
      : (this.currentUser = {
          fullName: 'Jorge',
          email: '',
          password: '',
          google: false,
          img: '',
        });

    this.profileForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.min(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  storeForm(): void {
    if (this.profileForm.invalid) {
      this.toast.danger('Form Invalid');
    }
    const updatedUser: UserModel = {
      ...this.currentUser, // conserva id y campos no editables
      ...this.profileForm.value, // sobrescribe lo editable
    };
    console.log(updatedUser);
    this.userService.updateUser(updatedUser).subscribe({
      next: (_) => {},
      error: (err) =>
        this.toast.danger(err.error.errors.message, err.error.mensaje),
    });
  }

  selectImg(img: File | undefined): void {}

  changeImg() {}
}
