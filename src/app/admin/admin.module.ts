import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
//import { DelComponent } from './del/del.component';
import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
import { ProductsComponent } from './../admin/products/products.component';


@NgModule({
  declarations: [AdminHomeComponent,ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
