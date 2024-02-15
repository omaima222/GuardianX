import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: '../../style/main.css'
})
export class WelcomeComponent implements OnInit{
     welcome: string = "";

     constructor(private authService: AuthService, private route: Router, private activeRoute: ActivatedRoute) {}

     ngOnInit() {
       this.welcome = this.activeRoute.snapshot.data['message'];
     }

     logout(){
       this.authService.removeToken();
       this.route.navigate(["/authenticate"]);
     }

}
