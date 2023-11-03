import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Auth, authState} from '@angular/fire/auth';
import {map, Observable, take} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthsGuardService implements CanActivate {
  constructor(private auth: Auth, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return authState(this.auth).pipe(
      take(1),
      map((user) => {
        if (!!user && router.url == '/auth/login') {
          this.router.navigate(['/']); // go to app
        }
        return true;
      })
    );
  }
}
