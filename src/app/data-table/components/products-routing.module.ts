import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add_product/add-product/add-product.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: 'product',
    children: [
      {
        component: AddProductComponent ,
        path: 'create'
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
