import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AnimComponent } from './anim/anim.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoriesService } from './service/categories.service';
import { ProductSaveService } from './service/product-save.service';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { TickerComponent } from './ticker/ticker.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    OrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    AnimComponent,
    DialogLoginComponent,
    ProductFormComponent,
    TickerComponent,
    ProductCardComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    DataTablesModule


  ],
  providers: [AuthGuardService, AuthService, UserService, CategoriesService, ProductSaveService, DataService ],
  bootstrap: [AppComponent],
  entryComponents: [DialogLoginComponent]
})
export class AppModule { }
