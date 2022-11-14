import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  items: any
  constructor(private product: ProductsService, private nav: Router) { }

  ngOnInit(): void {
    this.product.view_Products().subscribe((result) => {
      this.items = result
    })
  }
  productform = new FormGroup({
    pname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3), Validators.pattern('[a-zA-Z 0-9]+$')]),
    pcode: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(250), Validators.minLength(3)]),
    url: new FormControl(''),
    createdate: new FormControl('', [Validators.required]),
    origin: new FormControl('', [Validators.required]),
    disable: new FormControl(false),
    quantity: new FormControl(1),
  })

  get pname() {
    return this.productform.get('pname');
  }
  submit() {
    let flag = 0
    this.items.forEach((element: any) => {
      if ((element.pname === this.productform.value.pname) && (element.pcode === this.productform.value.pcode)) {
        flag = 1
        alert("Same name and code. Can't add product")
      }
    })
    if (flag === 0) {
      this.product.add_Products(this.productform.value).subscribe((result) => {
        console.warn(result)
        if (result) {
          alert('add succes')
        }
        this.nav.navigateByUrl('/product')
      })
    }
  }
}