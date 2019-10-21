import { UserInfo } from './../service/userInfo';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../service/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductSaveService } from '../service/product-save.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  userInfoForm: any;
  imageUrl: string;
  cat: string;
  price: string;
  title: string;
  new = {};
  id;
  prod;
  submit = false;
  constructor(private catSer: CategoriesService, private prdSer: ProductSaveService, private router: Router,
    private fb: FormBuilder, private activeRoute: ActivatedRoute) {
    this.categories$ = catSer.getCategories();
    console.log(this.categories$);
    this.userInfoForm = this.fb.group({
      titre: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prix: ['', Validators.compose([Validators.required,  CustomValidators.min(0)])],
      categorie: ['', Validators.compose([Validators.required])],
      url: ['', Validators.compose([Validators.required, CustomValidators.url])],
    });
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.prdSer.getByID(this.id).pipe(take(1)).subscribe(p => {console.log(p[0]);
        this.title = p[0];
        this.price = p[1];
        this.cat = p[2];
        this.imageUrl = p[3]; } );
    }
  }

  ngOnInit() {
  }
  save() {
   // this.prdSer.create(product);
   this.submit = true;
   this.new = [
    this.title,
    this.price,
    this.cat,
    this.imageUrl
  ];
   if (this.id) {
     this.prdSer.update(this.id, this.new);
   } else {
    this.prdSer.create(this.new);
   }
   this.router.navigateByUrl('/admin/products');
  }
  delete() {
    if (confirm('are you sure ?')) {
    this.prdSer.delete(this.id);
  }
  this.router.navigateByUrl('/admin/products');
  }

}
