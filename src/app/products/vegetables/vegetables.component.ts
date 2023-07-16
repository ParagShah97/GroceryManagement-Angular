import { Component, OnInit, ElementRef } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables:any=[];
  quantity:number[]=[];
  constructor(private clientService:ClientService,private el: ElementRef,private authService:AuthService,private router:Router) { 

  }

  ngOnInit(){
    this.clientService.getVegetables().subscribe(data=>{ 
      //alert(JSON.stringify(data));
      this.vegetables=data.result;
      
      //alert(this.vegetables); 
    },error=>{
      alert(JSON.stringify(error));
      });
  }

  addToCart(a,vegetable){
    //alert(a);
    if(this.authService.isClientLoggedIn()){
    alert(this.quantity[a]);
    if(this.quantity[a]==null || this.quantity[a]==undefined || this.quantity[a]==0 || this.quantity[a]>=10) 
    {
      alert("Please enter a proper quantity between 1 to 10 picks!");
    }
    else{
    alert(JSON.stringify(vegetable));
    let cartProduct={
      productId:vegetable.id,    
      productName:vegetable.name,    
      productQuantity:this.quantity[a],
      totalCost:this.quantity[a]*vegetable.cost,
      productCost:vegetable.cost,
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
 