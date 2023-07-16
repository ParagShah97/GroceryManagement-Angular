import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AdminHomeComponent } from './admin-home/admin-home.component';
//import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  //{path:"adminHome",component:AdminHomeComponent},  
  //{path:"productsOption",component:ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
