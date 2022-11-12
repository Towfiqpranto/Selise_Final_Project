import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private products:ProductsService) { }
  totalitems=0
  ngOnInit(): void {
    this.products.getproductitems().subscribe((result)=>{
      this.totalitems=result.length
    })
  }

}
