import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ekszerek:any
  constructor(private base:BaseService){
    this.base.getEkszerek().subscribe(
      (e)=>this.ekszerek=e
    )
  }


}
