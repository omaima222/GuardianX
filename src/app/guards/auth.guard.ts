import {CanActivateFn, Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const token = localStorage.getItem('token');
  console.log("hei???????")
  if(token){
    console.log("jiizef  ",token)
    return true;
  }else {
    router.navigate(['authenticate'])
    return false;
  }

};
