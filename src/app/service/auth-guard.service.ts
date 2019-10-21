import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(router, state: RouterStateSnapshot) {
    return this.authService.user$.pipe(map (
      user => {
        if (user) {return true; } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        console.log(state.url);
        return false;
      }
    }
    ));
  }}
