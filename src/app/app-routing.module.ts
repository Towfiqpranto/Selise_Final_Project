import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './data-table/components/products/products.component';
const routes: Routes = [
  {
    path:'product',
    component:ProductsComponent
  },
  {
    path:'my-cart',
    component:CartComponent
  },
  {
    path:'',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
