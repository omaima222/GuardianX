import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
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
    return this.httpClient.post<{ message : string }>(this.url + "auth/register", user)
      .pipe(
         map(response => {
           this.setToken(response.message)
           return response.message
         }),
      );
  }

  authenticate(user: AuthenticateDto): Observable<string> {
    this.removeToken();
    return this.httpClient.post<{ message : string }>(this.url + 'auth/authenticate', user)
      .pipe(
        map(response => {
          this.setToken(response.message)
          return response.message
        }),
      );
  }

  welcome(): Observable<string>{
    return this.httpClient.get<{ message: string }>(this.url+"welcome")
      .pipe(
        map(response => response.message),
        catchError(error => {
          console.error('Error fetching welcome message:', error);
          return throwError(error);
        })
      );
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

}
