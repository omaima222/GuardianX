import { Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {AuthenticateComponent} from "./components/authenticate/authenticate.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {authGuard} from "./guards/auth.guard";
import {ErrorComponent} from "./components/error/error.component";

export const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"authenticate", component:AuthenticateComponent},
  {path:"welcome", component:WelcomeComponent, canActivate:[authGuard]},
  {path:"error", component:ErrorComponent}
];
