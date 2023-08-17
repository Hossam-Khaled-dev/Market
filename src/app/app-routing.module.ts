import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { CartComponent } from './carts/components/cart/cart.component';


const routes: Routes = [
  { path: 'Products', component: AllProductComponent },
  { path: 'Carts', component: CartComponent },
  {path:"**", redirectTo: "Products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
