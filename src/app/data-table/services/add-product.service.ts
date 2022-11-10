import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  constructor(private http:HttpClient) { }
  add_product(data:object){
    return this.http.post("http://localhost:3000/product",data)
  }
}
