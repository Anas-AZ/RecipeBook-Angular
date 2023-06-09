import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean>| Promise<boolean> {
      return this.authService.user.pipe(take(1), map(user => {
      if(user) return true;
       else this.router.navigate(['/auth']);
      }))
  }
}
