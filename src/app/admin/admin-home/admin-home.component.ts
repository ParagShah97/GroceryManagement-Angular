import { Component, OnInit } from '@angular/core';
import {AdminService} from './../../services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers:[AdminService]
})
export class AdminHomeComponent implements OnInit {
//storage:Storage[]=[];
storage:any[]=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(){
    this.adminService.getProducts().subscribe(data=>{
      alert(JSON.stringify(data));
      this.storage=<any[]>data.result;
      console.log(this.storage);  
    },error=>{
      alert(JSON.stringify(error));
      });
  }

}
