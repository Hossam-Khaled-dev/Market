import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  Products :any [] = [];


  constructor(private services:ProductsService){}
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
this.services.getAllProducts().subscribe(
  (res:any)=>
  {  this.Products = res;})
  }
}
