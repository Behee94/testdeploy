import { take, map } from 'rxjs/operators';
import { RouterStateSnapshot } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { IshoppingCart } from './IshoppingCart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-cart').push({ // na3mlelha push fi firebase
      dateCreated: new Date().getTime()
    });
  }
  // tget kol les cards li mawjoudin 3andi
  public async getCart(): Promise<Observable<IshoppingCart>> { // bech nagem naffichi eli fi navbar qty
    let cartID;
    cartID = await this.getOrCreateCartID();
    return this.db.object('/shopping-cart/' + cartID).valueChanges().pipe(map(cart => new IshoppingCart((cart as any).items)));
  }
  private async getOrCreateCartID() { // for check ID
    let cartID;
    cartID = localStorage.getItem('cartID');
    if (cartID) { return cartID; }
    let result;
    result = await this.create();
    localStorage.setItem('cartID', result.key);
    return result.key;
  }
  getItem(cartID: string, productID: string) {
    return this.db.object('/shopping-cart/' + cartID + '/items/' + productID);
  }
  async addToCart(product) {
    this.updateCart(product, 1);
  }
  async removeFromCart(product) {
    this.updateCart(product, -1);
  }
  async updateCart(product, quantityState) {
    let cartID;
    cartID = await this.getOrCreateCartID();
    let item$;
    item$ = this.getItem(cartID, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      if (item.payload.exists()) {
        item$.update({ quantity: item.payload.val().quantity + quantityState });
      } else {
        item$.update({ product: {
          title: product.payload.val()[0],
          price: product.payload.val()[1],
          category: product.payload.val()[2],
          imageUrl: product.payload.val()[3]}
          , quantity: 1 });
      }
    });
  }
}
