import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {ResponseWrapper } from './../entity/ResponseWrapper';
import { Observable } from 'rxjs';
import { NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userUrl:string="http://localhost:8080/admin"
  constructor(private httpClient:HttpClient) { 

  }
  
  getProducts():Observable<ResponseWrapper>
  {
    console.log("hello service");
    return this.httpClient.get<ResponseWrapper>(this.userUrl+"/getAllStorage");
    
  }
  addProductData(AddProductForm:NgForm){        
    return this.httpClient.post<any>(this.userUrl+"/addStorage",(AddProductForm.value));
    }    
    deleteProductData(DeleteProductForm)
    {
      return this.httpClient.post<any>(this.userUrl+"/removeStorage",(DeleteProductForm.value));
    }
}
