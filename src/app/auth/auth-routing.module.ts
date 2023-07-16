import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
import { ProductsComponent } from './../admin/products/products.component';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './../auth/login/login.component';
import { AdminLoginComponent } from './../auth/admin-login/admin-login.component';
import {ClientHomeComponent} from './../client/client-home/client-home.component';
import {FruitsComponent} from './../products/fruits/fruits.component'
import { VegetablesComponent } from './../products/vegetables/vegetables.component';
import { DairyProductsComponent } from './../products/dairy-products/dairy-products.component';
import { ForgotPasswordComponent } from './../client/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'adminHome' , component:AdminHomeComponent, canActivate:[AuthGuard]},
  {path:'products' , component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'login' , component:LoginComponent},
  {path:'adminLogin' , component:AdminLoginComponent},
  {path:'clientHome' , component:ClientHomeComponent},
  {path:'fruits' , component:FruitsComponent},
  {path:'vegetables' , component:VegetablesComponent},
  {path:'dairyProducts' , component:DairyProductsComponent},
  {path:'forgotPassword' , component:ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
