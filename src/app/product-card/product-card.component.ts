import { Component, OnInit, Input } from '@angular/core';
import { ProductSaveService } from '../service/product-save.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  pro: any[];
  // tslint:disable-next-line:no-input-rename
  @Input('product') p: any;
  // tslint:disable-next-line:no-input-rename
  @Input('shoppingCart') shoppingCart: any; // bech tal9a fih tous les items (sum quantity..)
  constructor(private prdSer: ProductSaveService, private cartSer: ShoppingCartService) { }

  ngOnInit() {
  }
  add() {
    this.cartSer.addToCart(this.p); // product par defaut 3andek mel awel
  }
  remove() {
    this.cartSer.removeFromCart(this.p); // product par defaut 3andek mel awel
  }
  getQuantity() {
    if (!this.shoppingCart) {return 0; }
    let item;
    item = this.shoppingCart.items[this.p.key];
    return item ? item.quantity : 0 ; // condition zeyda ahayka mel awel
  }

}
