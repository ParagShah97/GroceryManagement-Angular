import { Component, OnInit } from '@angular/core';
import { ProviderData } from '../provider/provider-data';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  quantity:number;
  productSearchedData:any;
  isError:boolean=false;
  isSearchResultNull:boolean=false;
  constructor(private router:Router,private providerData:ProviderData,private authService:AuthService,private clientService:ClientService) {
    this.quantity=0;
   }

  ngOnInit(){
    this.isSearchResultNull=false;
    //alert("search::::"+JSON.stringify(this.providerData.product));
    this.productSearchedData=this.providerData.product;
    if(this.productSearchedData===null)
    {
      this.isSearchResultNull=true;
    }

  }
  addToCart(){
    //alert(a);
    if(this.authService.isClientLoggedIn()){
    //alert(this.quantity);
    if(this.quantity==null || this.quantity==undefined || this.quantity==0 || this.quantity>=10 || this.productSearchedData.name === "" || this.productSearchedData.name === undefined) 
    {
      this.isError=true;
      //alert("Please enter a proper quantity between 1 to 10 picks or choose suitable product!");
    }
    else{
    let cartProduct={
      productId:this.productSearchedData.id,    
      productName:this.productSearchedData.name,    
      productQuantity:this.quantity,
      totalCost:this.quantity*this.productSearchedData.productCost,
      productCost:this.productSearchedData.productCost,
      cartId:"123",
      type:"cart",
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
