import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {AuthenticateDto} from "../../dtos/AthenticateDto";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './authenticate.component.html',
  styleUrl: '../../style/main.css'
})
export class AuthenticateComponent {

  authenticateFrom: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private route: Router) {
    this.authenticateFrom = this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }


  onSubmit(): void{
    this.submitted = true;
    if(this.authenticateFrom.valid){
      const authenticateDto: AuthenticateDto = {
        username : this.authenticateFrom.value.username,
        password : this.authenticateFrom.value.password,
      }
      this.authService.authenticate(authenticateDto).subscribe(
        (message: string) => {
          this.route.navigate(["welcome"])
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
      this.authenticateFrom.reset();
      this.submitted = false;
    }
  }
}
