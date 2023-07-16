import { Component, OnInit,ElementRef } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits:any=[];
  quantity:number[]=[];
  totalCost:number;
  index:number=0;
  // product:any={};
  // productIsSelected=false;
  constructor(private clientService:ClientService,private el: ElementRef,private authService:AuthService,private router:Router) { 
    //this.quantity=0;
    this.totalCost=0;
    ;
  }
  
  ngOnInit() {
    
    this.clientService.getFruits().subscribe(data=>{ 
      //alert(JSON.stringify(data));
      this.fruits=data.result;
      
      //alert(this.fruits); 
    },error=>{
      alert(JSON.stringify(error));
      });

      
  } 
    
  addToCart(a,fruit){
    //alert(a);
    if(this.authService.isClientLoggedIn()){
    alert(this.quantity[a]);
    if(this.quantity[a]==null || this.quantity[a]==undefined || this.quantity[a]==0 || this.quantity[a]>=10) 
    {
      alert("Please enter a proper quantity between 1 to 10 picks!");
    }
    else{
    alert(JSON.stringify(fruit));
    let cartProduct={
      productId:fruit.id,    
      productName:fruit.name,    
      productQuantity:this.quantity[a],
      totalCost:this.quantity[a]*fruit.cost,
      productCost:fruit.cost,
      cartId:"123",
      type:"cart",
      //userid:localStorage.getItem('userId')      
    }
    this.clientService.addToCart(cartProduct).subscribe(data=>{
      alert(data.result);      
    });
    alert(JSON.stringify(cartProduct));
  }
  }
  else
  {
    if(this.authService.isAdminLoggedIn())
    {
      alert("Please Login as Client");
    }
    else{
    alert("Please Login to continue ");
    this.router.navigateByUrl("/login");
    }
  }
  }  
}
