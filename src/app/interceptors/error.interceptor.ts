import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = new Router();
  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        console.error('Forbidden error occurred:', error);
        router.navigate(['/forbidden']);
      } else if (error.status === 404) {
        console.error('Not Found error occurred:', error);
        router.navigate(['/not-found']);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      return throwError(error);
      })
    )
}
