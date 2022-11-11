import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http:HttpClient) { }
  add_Products(data:any){
    return this.http.post("http://localhost:3000/product",data)
  }
  view_Products(){
    return this.http.get("http://localhost:3000/product")
  }
  delete_products(id: string){
    return this.http.delete("http://localhost:3000/product/"+id)
  }
  get_product(id:string){
    return this.http.get("http://localhost:3000/product/"+id)
  }
  update_product(data:any,id:string){
    return this.http.put("http://localhost:3000/product/"+id,data)
  }
}
