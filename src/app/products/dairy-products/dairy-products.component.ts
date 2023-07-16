import { Component, OnInit, ElementRef } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.component.html',
  styleUrls: ['./dairy-products.component.css']
})
export class DairyProductsComponent implements OnInit {

  dairyProducts:any=[];
  quantity:number[]=[];
  constructor(private clientService:ClientService,private el: ElementRef,private authService:AuthService,private router:Router) { 

  }

  ngOnInit(){
    this.clientService.getDairyProducts().subscribe(data=>{ 
      //alert(JSON.stringify(data));
      this.dairyProducts=data.result;
      
      //alert(this.dairyProducts); 
    },error=>{
      alert(JSON.stringify(error));
      });    
  }

  addToCart(a,dairyProduct){
    //alert(a);
    if(this.authService.isClientLoggedIn()){
    alert(this.quantity[a]);
    if(this.quantity[a]==null || this.quantity[a]==undefined || this.quantity[a]==0 || this.quantity[a]>=10) 
    {
      alert("Please enter a proper quantity between 1 to 10 picks!");
    }
    else{
    alert(JSON.stringify(dairyProduct));
    let cartProduct={
      productId:dairyProduct.id,    
      productName:dairyProduct.name,    
      productQuantity:this.quantity[a],
      totalCost:this.quantity[a]*dairyProduct.cost,
      productCost:dairyProduct.cost,
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
