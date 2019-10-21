import { AuthGuardService } from './service/auth-guard.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: 'products' , component: ProductsComponent, canActivate: [AuthGuardService]} ,
  { path: '' , component: ProductsComponent} ,
  { path: 'orders' , component: OrdersComponent, canActivate: [AuthGuardService]} ,
  { path: 'admin/orders' , component: ManageOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]} ,
  { path: 'admin/products' , component: ManageProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]} ,
  { path: 'admin/products/new' , component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]} ,
  { path: 'admin/products/:id' , component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]} ,
  { path: 'shopping-cart' , component: ShoppingCartComponent} ,
  { path: 'login' , component: LoginComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
