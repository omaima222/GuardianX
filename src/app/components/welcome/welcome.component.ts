import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: '../../style/main.css'
})
export class WelcomeComponent implements OnInit{
     welcome: string = "";

     constructor(private authService: AuthService) {}

     ngOnInit() {
       this.authService.welcome().subscribe(
         (result) => {
           this.welcome = result;
         }
       );
     }

}
