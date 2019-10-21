import { ShoppingCartService } from './../service/shopping-cart.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../service/categories.service';
import { ProductSaveService } from './../service/product-save.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'; // a3melha bech tna9ess mel subscribe
import { IshoppingCart } from '../service/IshoppingCart';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy, OnInit {
  products: any[];
  filterproducts: any[];
  category = ''; // lezem nafs l esm fi html queryParams
  subscribe: Subscription;
  cart$: Observable<IshoppingCart>;
  constructor(private prdSer: ProductSaveService, private catSer: CategoriesService,
    private route: ActivatedRoute, private cartSer: ShoppingCartService) { }

  async ngOnInit(): Promise<void> {
    this.subscribe = this.prdSer.get().subscribe( prod => {this.products = prod;
    console.log(prod);
  // read ll query string
  this.route.queryParamMap.subscribe(param => {
    this.category = param.get('category');
    this.filterproducts = (this.category) ?
    this.products.filter( p => p.payload.val()[2] === this.category) : this.products;
    console.log(this.products);
  });
  });
  this.cart$ = await this.cartSer.getCart();
  console.log(this.cart$);
  }
    ngOnDestroy(): void {
      this.subscribe.unsubscribe();
    }

}
