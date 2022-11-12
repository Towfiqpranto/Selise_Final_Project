import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = []
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.repeat()
  }
  repeat() {
    this.product.getproductitems().subscribe((result) => {
      this.items=result
      console.log("cart items", this.items)
    })
  }
  remove(id: number) {
    console.warn('cart', id)
    this.product.deletecart(id)
  }
}