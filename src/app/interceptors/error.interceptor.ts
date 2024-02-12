import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = new Router();
  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        console.error('Forbidden error occurred:', error);
        router.navigate(['/error'], { queryParams : {errorCode : 403}});
      } else if (error.status === 404) {
        console.error('Not Found error occurred:', error);
        router.navigate(['/error'], { queryParams : {errorCode : 404}});
      } else if (error.status === 400) {
        router.navigate(['/error'], { queryParams : {errorCode : 400}});
        console.error('A validation error occurred:', error);
      }else {
        router.navigate(['/error']);
        console.error('An unexpected error occurred:', error);
      }
      return throwError(error);
      })
    )
}
