import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email:string="";
  otp:string="";
  form: FormGroup = new FormGroup({});
  constructor(private router:Router,private clientService:ClientService,private authService:AuthService,private fb:FormBuilder) { 
    this.form = fb.group({
      otp:['',[Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: this.authService.ConfirmedValidator('password', 'confirm_password')
    })
  }
  public waitForOtp=false;  // true
  public otpReceived=true;  // false
  public resendOtp=false;
  ngOnInit(): void {
  }

  resendOTP()
  {
    this.resendOtp=true;
    this.authService.sendOtp(this.email).subscribe(data=>{
      //alert("sendOtp");
      this.resendOtp=false;            
    });
    
  }

  sendOTP()
  {    
    //alert("kuch hua");
    /*this.authService.sendOtp(this.email).subscribe(data=>{
      //alert("sendOtp");
      this.waitForOtp=false;
      this.otpReceived=true;
    });*/
  }
  update(form)
  {
    alert("update function chala");    
    delete form.value.confirm_password;
    alert(JSON.stringify(form.value));
    this.authService.resetPassword(this.email,form.value).subscribe(data=>{
      alert("password ho gya change");      
    });
  }
  get f(){
    return this.form.controls;
  }
  
}
