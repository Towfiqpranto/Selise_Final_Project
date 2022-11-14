import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productlist: any | undefined
  constructor(private product: ProductsService, private route: Router) { }

  ngOnInit(): void {
    this.view()
  }
  view() {
    this.product.view_Products().subscribe((result) => {
      this.productlist = result
      this.productlist.forEach((element: any) => {
        Object.assign(element, { total: element.price })
      });
    })
  }

  cart(data: any) {
    this.product.addcart(data)
    data.disable=true
    this.product.update_product(data,data.id.toString()).subscribe()
  }
  quantity(value: string, id: any) {
    if (value === 'plus') {
      this.productlist.forEach((element: any) => {
        if (element.id == id) {
          if (element.quantity < 11) {
            element.quantity = element.quantity + 1
            element.total = element.quantity * element.price
          }
        }
      })
    }
    if (value === 'minus') {
      this.productlist.forEach((element: any) => {
        if (element.id == id) {
          if (element.quantity > 1) {
            element.quantity = element.quantity - 1
            element.total = element.quantity * element.price
          }
        }
      })
    }
  }
}
