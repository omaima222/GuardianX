import { ResolveFn } from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const welcomeResolver: ResolveFn<String> = (route, state) => {
  const authService = inject(AuthService) ;
  return authService.welcome();
};
