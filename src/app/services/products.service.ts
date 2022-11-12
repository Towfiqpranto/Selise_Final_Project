import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

// CART API Functions  
  cartid: any = []
  items: any = []
  productitems = new BehaviorSubject<any>([])
  addcart(product: any) {
    this.cartid.push(product['id'])
    this.items.push(product)
    this.productitems.next(this.items)
    let cartitems = localStorage.getItem('cartitems')
    if (!cartitems) {
      localStorage.setItem("cartitems", JSON.stringify([product]))
      alert("Added to Cart");
    }
    else {
      let cartproducts = JSON.parse(cartitems)
      cartproducts.push(product)
      localStorage.setItem("cartitems", JSON.stringify([cartproducts]))
      alert("Added to Cart");

    }
    console.log("service cart", this.cartid)
  }
  deletecart(id: number) {
    console.warn("delete cart got ", id)
    console.warn('before items', this.items)
    this.items.map((data: any, index: any) => {
      if (id === data['id']) {
        this.items.splice(index, 1)
      }
    })
    this.productitems.next(this.items)
    console.warn("after ", this.items)
    let cartitems = localStorage.getItem('cartitems')
    if (cartitems) {
      let cartproducts: any = []
      cartproducts = JSON.parse(cartitems)
      console.warn("be cartpr", cartproducts)
      cartproducts.map((data: any, index: any) => {
        if (id === data[id]) {
          cartproducts.splice(index, 1)
        }
      })
      console.warn("af cartpr", cartproducts)
      localStorage.setItem('cartitems', JSON.stringify(this.items))
    }
  }
  getcart() {
    return this.cartid
  }
  getproductitems() {
    return this.productitems.asObservable()
  }




// PRODUCT API functions

  constructor(private http: HttpClient) { }
  add_Products(data: any) {
    return this.http.post("http://localhost:3000/product", data)
  }
  view_Products() {
    return this.http.get("http://localhost:3000/product")
  }
  delete_products(id: string) {
    return this.http.delete("http://localhost:3000/product/" + id)
  }
  get_product(id: string) {
    return this.http.get("http://localhost:3000/product/" + id)
  }
  update_product(data: any, id: string) {
    return this.http.put("http://localhost:3000/product/" + id, data)
  }
}