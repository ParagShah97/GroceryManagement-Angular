import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { DairyProductsComponent } from './dairy-products/dairy-products.component';

@NgModule({
  declarations: [FruitsComponent, VegetablesComponent, DairyProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
