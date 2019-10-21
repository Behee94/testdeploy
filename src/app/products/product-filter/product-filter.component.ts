import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
 // tslint:disable-next-line:no-input-rename
 @Input('category') category;
  constructor(private catSer: CategoriesService) { 
    this.categories$ = this.catSer.getCategories();

  }

  ngOnInit() {
  }

}
