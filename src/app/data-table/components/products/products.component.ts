import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  flag:string = 'create'
  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    console.warn(this.flag)
    this.route.events.subscribe((val:any) =>{
      if(val.url){
        if(val.url.includes('create')){
          this.flag='create'
          console.warn(this.flag)
        }
      }
    })
  }

}
