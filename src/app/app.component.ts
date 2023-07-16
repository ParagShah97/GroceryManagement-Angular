import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderData } from './provider/provider-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groceryManagement-app';
  constructor(public router: Router){
    
  }

}
