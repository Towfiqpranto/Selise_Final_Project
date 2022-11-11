import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add_product/add-product/add-product.component';
import { ProductsModule } from './components/products.module';
import { ProductsRoutingModule } from './components/products-routing.module';
import{ReactiveFormsModule} from '@angular/forms'
import { UpdateProductComponent } from './components/update-product/update-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class DataTableModule { }
