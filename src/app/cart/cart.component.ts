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
    })
  }
  remove(item: any) {
    console.log('id',typeof(item.id))
    this.product.deletecart(item.id)
    item.disable=false
    item.quantity=1
    item.total=item.price
    this.product.update_product(item,item.id.toString()).subscribe()
  }
}