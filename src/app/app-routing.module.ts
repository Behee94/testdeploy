import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'products' , component: ProductsComponent} ,
  { path: 'orders' , component: OrdersComponent} ,
  { path: 'admin/orders' , component: ManageOrdersComponent} ,
  { path: 'admin/products' , component: ManageProductsComponent} ,
  { path: 'shopping-cart' , component: ShoppingCartComponent} ,
  { path: 'login' , component: LoginComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
