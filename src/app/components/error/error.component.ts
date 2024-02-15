import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: '../../style/main.css'
})
export class ErrorComponent implements OnInit{
  errorCode:string | null;

  constructor(private route: ActivatedRoute) {
    this.errorCode = "203";
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.errorCode = params['errorCode'];
    })
  }
}
