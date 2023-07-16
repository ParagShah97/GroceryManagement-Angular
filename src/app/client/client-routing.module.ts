import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {PurchaseComponent} from './purchase/purchase.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'register' , component:RegisterComponent},
  {path:'purchase' , component:PurchaseComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
