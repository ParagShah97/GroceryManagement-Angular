import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseWrapper } from './../entity/ResponseWrapper';
import { HttpClient } from '@angular/common/http';
import { User } from "./../entity/User";
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  serverUrl:string="http://localhost:8080/";


  public ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    } 
  }

  public sendOtp(userId)
  {
    return  this.httpClient.get<any>(this.serverUrl+"client/forgotPassword/"+userId);
  }

  public resetPassword(formData,userId)
  {
    return  this.httpClient.post<any>(this.serverUrl+"client/resetPassword"+userId,formData);
  }
  
  public login(userInfo: any):Observable<any>{
    //alert(JSON.stringify(userInfo)+" login method is called in service");
        return  this.httpClient.post<any>(this.serverUrl+"client/login",userInfo);
  }

  public adminLogin(userInfo: any):Observable<any>{
    alert(JSON.stringify(userInfo)+" login method is called in service");
        return  this.httpClient.post<any>(this.serverUrl+"admin/login",userInfo);
  }

  public isLoggedIn():boolean{
    return (localStorage.getItem('ACCESS_TOKEN') !== null);
  }

  public isClientLoggedIn():boolean{
    return (localStorage.getItem('ACCESS_TOKEN') === 'Client');
  }

  public isAdminLoggedIn():boolean{
    return (localStorage.getItem('ACCESS_TOKEN') === 'Admin');
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.clear();
    sessionStorage.clear();
  }
}
