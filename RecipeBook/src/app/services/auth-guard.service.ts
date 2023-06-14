import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate{

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot,
//      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
//       return this.authService.user.pipe(take(1), map(user => {
//         const isAuth = user ? true : false;
//       if(isAuth) {
//         return true;
//       }
//        return this.router.createUrlTree(['/auth']);
//       }))
//   }
// }

export const AuthGuardService : CanActivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean|UrlTree> => {
    const router = inject(Router);
    const authService = inject(AuthService);
  return authService.user.pipe(map( user => {
    const isAuth = !!user;
    if(isAuth) {
        return true;
    }
    return router.createUrlTree(['/auth']);
  }));
};
