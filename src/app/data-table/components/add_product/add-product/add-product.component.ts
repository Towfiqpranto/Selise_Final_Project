import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ProductsService} from 'src/app/data-table/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private addproduct:ProductsService,private nav:Router) { }

  ngOnInit(): void {
  }
  productform=new FormGroup({
    pname:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    pcode:new FormControl(''),
    category:new FormControl(''),
    price:new FormControl(''),
    description:new FormControl(''),
    url:new FormControl(''),
    createdate:new FormControl(''),
    origin:new FormControl('')
  })

  get pname()
  {
    return this.productform.get('pname');
  }
  submit(){
    console.warn(this.productform.value)
    this.addproduct.add_Products(this.productform.value).subscribe((result)=>{
      console.warn(result)
      if(result){
        alert('add succes')
      }
      this.nav.navigateByUrl('/product')
    })
  }
}
