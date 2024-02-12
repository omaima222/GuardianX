import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: '../../style/main.css'
})
export class WelcomeComponent implements OnInit{
     welcome: string = "";

     constructor(private authService: AuthService, private route: Router) {}

     ngOnInit() {
       this.authService.welcome().subscribe(
         (result) => {
           this.welcome = result;
         }
       );
     }

     logout(){
       this.authService.removeToken();
       this.route.navigate(["/authenticate"]);
     }

}
