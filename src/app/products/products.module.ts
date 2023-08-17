import { NgModule } from '@angular/core';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
