import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  fruits:any=[];
  vegetables:any=[];
  milkProducts:any=[];
  public quantity:number[]=[];
  public fruitQuantity:number[]=[];
  public vegetableQuantity:number[]=[];
  public milkProductQuantity:number[]=[];
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.getBannerData().subscribe(data=>{
      alert(JSON.stringify(data.result));
      for(let product of data.result)
      {
        if(product["type"]==="fruit")
        {
          this.fruits.push(product);          
        }
        else if(product["type"]==="vegetable")
        {
          this.vegetables.push(product);          
        }
        else if(product["type"]==="dairyProduct")
        {
          this.milkProducts.push(product);          
        }
      }
    });
    console.log(this.fruits);
    console.log(this.vegetables);
    console.log(this.milkProducts);
  }

}
 