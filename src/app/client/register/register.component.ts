import { Component, OnInit,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from './../../services/client.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private el: ElementRef,private clientService:ClientService) { }
public isError:boolean;
public isSuccess:boolean;
public error:string;
public success:string;
  ngOnInit(): void {
    this.isError=false;
    this.isSuccess=false;
    this.success="";
    this.error="";
  }
  addRegisterData(registerForm:NgForm)
  {
    let confirmPassword = this.el.nativeElement.querySelector("#confirmPassword");
    //alert("form data is:"+JSON.stringify(registerForm.value));    
    if(registerForm.value.password!=registerForm.value.confirmPassword)
    {
      
      alert("wrong password");
      //registerForm.form['confirmPassword'].classList.add("alert-danger");
      
      confirmPassword.classList.add('alert-danger')
      return false;
    }
    else
    {
      delete registerForm.value.confirmPassword;
      //alert("form data after* is:"+JSON.stringify(registerForm.value));
      this.clientService.addRegisterData(registerForm).subscribe(data=>{
        //alert(JSON.stringify(data));
       
        if(data.success==true)
        {
          confirmPassword.classList.remove('alert-danger')
          this.isSuccess=true;
          this.isError=false;
          this.success="Please Login, registration successfull";
          registerForm.resetForm();
        }
        else{
          this.isSuccess=false;
          this.isError=true;
          this.error="Something went wrong please re-register yourself!";
          registerForm.resetForm();
        }
        registerForm.resetForm();
    });
    
  }
  /*if(this.isSuccess==true)
  {
    alert("success***")
    this.success="Please Login, registration successfull";
    let successDiv = this.el.nativeElement.querySelector("#successAlertDiv");
    successDiv.classList.remove('invisible');
  }*/
  
}}
