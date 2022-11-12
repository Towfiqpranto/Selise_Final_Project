import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ProductsService} from 'src/app/services/products.service';
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
    pname:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3),Validators.pattern('[a-zA-Z 0-9]+$')]),
    pcode:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.maxLength(250),Validators.minLength(3)]),
    url:new FormControl(''),
    createdate:new FormControl('',[Validators.required]),
    origin:new FormControl('',[Validators.required])
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
