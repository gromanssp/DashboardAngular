import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserModel } from '../../models/user-model';
import { ImgPipe } from '../../pipe/img.pipe';
import { RippleDirective } from "../../directives/ripple.directive";
import { DButtonDirective } from "../../directives/buttons/d-button.directive";
import { UserService } from '../../services/user.service';

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
    DButtonDirective
]
})
export class ProfileComponent implements OnInit {
  userModel : UserModel = {fullName: 'Jorge', email: '', password: '', google: false, img: ''};
  profileForm!: FormGroup;

  imgUp: File | undefined;
  imgTemp: any;

  constructor(
    private userService: UserService
  ) {
    
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      google: new FormControl(false),
      img: new FormControl(null),
      role: new FormControl(null),
    });
    
  }

  storeForm(): void {
    this.userService.updateUser(this.userModel).subscribe();
  }

  selectImg( img: File | undefined): void {

  }

  changeImg() {

  }
}
