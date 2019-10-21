import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private userSer: UserService) { }
  canActivate(): Observable<boolean> {
    return this.userSer.AppUser$.pipe(map((appUser: any) => appUser.isAdmin));
  }
}
