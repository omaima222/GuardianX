import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RegisterDto} from "../../dtos/RegisterDto";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../../style/main.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(): void{
     this.submitted = true;
     if(this.registerForm.valid){
          const registerDto: RegisterDto = {
            username : this.registerForm.value.username,
            email : this.registerForm.value.email,
            password : this.registerForm.value.password,
          }
          this.authService.register(registerDto).subscribe(
           () => {
             this.router.navigate(["welcome"])
           },
           (error) => {
             console.error('Registration error:', error);
           }
          );
          this.registerForm.reset();
          this.submitted = false;
     }
  }

}
