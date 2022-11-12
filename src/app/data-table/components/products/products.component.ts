import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  flag = false
  quanid : any | undefined
  productlist: any | undefined
  key: any = []
  value: any = []
  constructor(private product: ProductsService,private route:Router) {
  }

  ngOnInit(): void {
    this.view()
  }
  viewlist() {
    this.flag = !this.flag
  }
  delete(id: string) {
    this.product.delete_products(id).subscribe((result) => {
      if (result) {
        alert("Delete Success")
      }
      this.view()
    })
  }
  view() {
    this.product.view_Products().subscribe((result) => {
      this.productlist = result
      console.warn(result)
    })
  }
  cart(data: any) {
    this.product.addcart(data)
    this.route.navigateByUrl('/my-cart')
    //console.log((document.getElementById("quantity") as HTMLInputElement).value)
  }
 /* func(){
    console.log(this.quantityform.get('quantity')?.value)
  }
  console.warn("recent"+this.flag)
  this.route.events.subscribe((val:any) =>{
    if(val.url){
      if(val.url.includes('create')){
        this.flag='create'
        console.warn(this.flag)
      }
    }
  })*/
}
