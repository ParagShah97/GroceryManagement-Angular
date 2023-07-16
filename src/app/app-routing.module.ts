import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactusComponent} from './contactus/contactus.component'
import {AboutusComponent} from './aboutus/aboutus.component'
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {path:'contactus' , component:ContactusComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'search' , component:SearchComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
