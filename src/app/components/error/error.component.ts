import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
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
