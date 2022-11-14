import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pid: any | undefined
  constructor(private route: ActivatedRoute, private product: ProductsService, private nav: Router) { }

  ngOnInit(): void {
    this.pid = (this.route.snapshot.paramMap.get('id'))
    console.warn("pid ", this.pid)
    this.pid && this.product.get_product(this.pid).subscribe((result) => {
      this.updateform.setValue({
        pname: result['pname'],
        pcode: result['pcode'],
        category: result['category'],
        price: result['price'],
        description: result['description'],
        url: result['url'],
        createdate: result['createdate'],
        origin: result['origin']
      })
    })
  }
  updateform = new FormGroup({
    pname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3),Validators.pattern('[a-zA-Z 0-9]+$')]),
    pcode: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(250), Validators.minLength(3)]),
    url: new FormControl(''),
    createdate: new FormControl('', [Validators.required]),
    origin: new FormControl('', [Validators.required])
  })
  update() {
    this.product.update_product(this.updateform.value, this.pid).subscribe((result) => {
      if (result) {
        alert("Update Success")
      }
      this.nav.navigateByUrl('/product')
    })
  }
}
