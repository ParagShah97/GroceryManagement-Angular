import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { ProviderData } from '../provider/provider-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartData:any=[]
  grandTotal:number=0;
  searchedProduct:string;
  searchedProductList:string[]=[];
  searchResult:string[]=[];
  
  constructor(private providerData:ProviderData,private router:Router, private authService:AuthService,private clientService:ClientService) { }


  ngOnInit() {
    this.clientService.getProductListForSearch().subscribe(data=>{
      //alert(JSON.stringify(data.result));
      this.searchedProductList=data.result;
    });
    
  }

  searchProduct(event:any)
  {
    if (event.target.value === '' || event.target.value.length < 3) {
      return this.searchResult = [];
    }
    this.searchResult = this.searchedProductList.filter((name) => {
      return name.toLowerCase().startsWith(event.target.value.toLowerCase());
    })
  }
  
  login()
  {
      this.router.navigateByUrl('/login');
  }

  register()
  {
      this.router.navigateByUrl('/register');
  }
  logout()
  {
    console.log(JSON.parse(JSON.stringify(localStorage)));
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  cartDetails()
  {
    if(this.authService.isLoggedIn())
    {
      this.grandTotal=0;
      this.clientService.getCartDetails().subscribe(data=>{
        this.cartData=data.result;
        localStorage.setItem("cartData",JSON.stringify(this.cartData));
        for(let c of this.cartData)
        { 
          console.log(c.totalCost);
          this.grandTotal+=parseInt(c.totalCost,10);
        }
      })
    }
  }
  
   search()
   {
     //alert(this.searchedProduct);
     this.clientService.search(this.searchedProduct).subscribe(data=>{
      //alert(JSON.stringify(data.result));
      /*if(data.result===null) 
      {
        this.isSearchResultNull=true;
        //this.router.navigateByUrl('/');
    }*/
//      else{
      this.providerData.product=data.result;
      let uri="/search";
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate([uri]));     
     // }
      
     });
     
   }


  viewHome()
  {
    if(localStorage.getItem('ACCESS_TOKEN') == 'Client')
    {
      this.router.navigateByUrl('/clientHome');
    }
    else if(localStorage.getItem('ACCESS_TOKEN') == 'Admin')
    {
      this.router.navigateByUrl('/adminHome');
    }
    else
    {
      this.router.navigateByUrl("/");
    }
  }

  check()
  {
    return this.authService.isLoggedIn();    
  }
  checkIsAdmin()
  {
    return localStorage.getItem('ACCESS_TOKEN')==='Admin';
  }

  removeFromCart(item)
  {
    alert(JSON.stringify(item['productName']));
    this.clientService.removeFromCart(item['productName']).subscribe(data=>{
       alert(data.result);
     })
  }
}
