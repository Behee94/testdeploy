import { ShoppingCartService } from './../service/shopping-cart.service';
import { UserService } from './../service/user.service';
import { UserInfo } from './../service/userInfo';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { IshoppingCart } from '../service/IshoppingCart';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appUser: UserInfo;
  cart$: Observable<IshoppingCart>;
  constructor(private ser: AuthService, private userSer: UserService, private cartSer: ShoppingCartService) {
    this.userSer.AppUser$.subscribe(newAppUser => this.appUser = newAppUser);
    // console.log(this.appUser);

   }
   async ngOnInit() {
    this.cart$ = await this.cartSer.getCart();
  }

  logout() {
    this.ser.logout();
  }

}
