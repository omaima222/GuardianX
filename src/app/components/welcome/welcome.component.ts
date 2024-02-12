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
     error: string = "";

     constructor(private authService: AuthService) {
       console.log("hellow?")
     }

     ngOnInit() {
       console.log("hellow???????????????")
       this.authService.welcome().subscribe(
         (result: string) => {
           this.welcome = result;
           console.log(result)
         },
         (error) => {
           this.error=error;
         }
       );
     }

}
