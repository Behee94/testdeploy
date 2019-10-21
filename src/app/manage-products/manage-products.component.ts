import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSaveService } from '../service/product-save.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnDestroy , OnInit {
  products: any[];
  filterproducts: any[];
  subscribe: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private prdSer: ProductSaveService) {
     this.subscribe = this.prdSer.get().subscribe(prd => {this.filterproducts = this.products = prd;
      this.dtTrigger.next(); });
   }

  filter(mot: string) {
    if ( mot) {
      this.filterproducts = this.products.filter( p => p.payload.val()[0].toLowerCase().includes(mot.toLocaleLowerCase()));
    } else {
      this.filterproducts = this.products;
    }

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe(); }

}
