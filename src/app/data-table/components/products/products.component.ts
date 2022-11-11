import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  flag = false
  productlist: any | undefined
  key: any = []
  value: any = []
  constructor(private product: ProductsService) {
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

  /*console.warn("recent"+this.flag)
  this.route.events.subscribe((val:any) =>{
    if(val.url){
      if(val.url.includes('create')){
        this.flag='create'
        console.warn(this.flag)
      }
    }
  })*/
}
