import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import {auth} from 'firebase/app';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable <firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
   // afAuth.authState.subscribe( user => this.user = user);
      this.user$ = afAuth.authState;
    console.log(this.user$);
   }

  logout() {
    this.afAuth.auth.signOut();
  }
  log() {
   // let returnUrl;
   // returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   // localStorage.setItem('returnUrl', returnUrl); // na3mlou save fi browser
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
