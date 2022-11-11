import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pid: any | undefined
  constructor(private route: ActivatedRoute, private product: ProductsService,private nav:Router) { }

  ngOnInit(): void {
    this.pid = (this.route.snapshot.paramMap.get('id'))
    console.warn("pid ",this.pid)
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
    pname: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    pcode: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    createdate: new FormControl(''),
    origin: new FormControl('')
  })
  update() {
    this.product.update_product(this.updateform.value,this.pid).subscribe((result) => {
      if (result) {
        alert("Update Success")
      }
      this.nav.navigateByUrl('/product')
    })
  }
}
