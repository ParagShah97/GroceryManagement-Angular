import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  userUrl:string="http://localhost:8080/client"
  userUrl2:string="http://localhost:8080/admin"
  constructor(private httpClient:HttpClient) { }

  addRegisterData(registerForm:NgForm){        
    return this.httpClient.post<any>(this.userUrl+"/addClient",(registerForm.value));
    } 
  getFruits()
  {
    return this.httpClient.get<any>(this.userUrl2+"/getAllFruits");
  }
  getVegetables()
  {
    return this.httpClient.get<any>(this.userUrl2+"/getAllVegetables"); 
  }
  getDairyProducts()
  {
    return this.httpClient.get<any>(this.userUrl2+"/getAllDairyProducts"); 
  }
  addToCart(cartProduct)
  {
    return this.httpClient.post<any>(this.userUrl+"/addToCart/"+localStorage.getItem('userId'),cartProduct);
  }
  getCartDetails()
  {
    return this.httpClient.get<any>(this.userUrl+"/getCartDetails/"+localStorage.getItem('userId'));
  }
  getClient()
  {
    return this.httpClient.get<any>(this.userUrl+"/getClient/"+localStorage.getItem('userId'));
  }
  purchase()
  {
    return this.httpClient.post<any>(this.userUrl+"/cartPurchase/"+localStorage.getItem('userId'),{});
  }
  search(searchedProduct)
  {
    return this.httpClient.get<any>(this.userUrl+"/search/"+searchedProduct);
  }
  removeFromCart(cartProduct)
  {
    return this.httpClient.get<any>(this.userUrl+"/removeFromCart/"+localStorage.getItem('userId')+"/"+cartProduct);
  }
  getProductListForSearch()
  {
    return this.httpClient.get<any>(this.userUrl+"/getSearchProductList");
  }
  getBannerData()
  {
    return this.httpClient.get<any>(this.userUrl+"/getBannerData");
  }
}
