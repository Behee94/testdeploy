import { UserInfo } from './userInfo';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase, private authSer: AuthService) { }
  save( user: firebase.User) {
    this.db.object('/users' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  getUser(uid: string) { // return type mta3 method traga3 observable dou na3mel ppte traga3 bool
    return this.db.object('/users' + uid).valueChanges();
  }
  get AppUser$(): Observable<UserInfo> {
    return this.authSer.user$.pipe(switchMap ( user => {
      if (user) {
        return this.getUser(user.uid);
      } else {
        return of(null);
      }
    }));
}
}
