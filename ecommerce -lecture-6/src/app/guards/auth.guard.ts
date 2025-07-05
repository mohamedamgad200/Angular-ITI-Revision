import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let userAuthService = inject(UserAuthService);
  let router = inject(Router);
  if (userAuthService.getUserLogged()) {
    return true;
  } else {
    router.navigateByUrl('/Login');
    return false;
  }
};
