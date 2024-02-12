import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {RegisterDto} from "../dtos/RegisterDto";
import {AuthenticateDto} from "../dtos/AthenticateDto";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient){ }

  register(user:RegisterDto): Observable<string>{
    this.removeToken()
    return this.httpClient.post<string>(this.url + "auth/register", user)
      .pipe(
         tap(token => this.setToken(token))
      );
  }

  authenticate(user: AuthenticateDto): Observable<string> {
    this.removeToken();
    return this.httpClient.post<string>(this.url + 'auth/authenticate', user)
      .pipe(
        tap(token => {
          this.setToken(JSON.stringify(token))
        })
      );
  }

  welcome(): Observable<string>{
    console.log("servhello")
      return this.httpClient.get<string>(this.url + "welcome")
      .pipe(
         tap(result => console.log(result))
      );
  }


  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

}
