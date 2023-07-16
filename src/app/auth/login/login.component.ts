import { Component, OnInit,ElementRef  } from '@angular/core';

import { ResponseWrapper } from './../../entity/ResponseWrapper';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service' ;
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError = false;
  isSubmitted  =  false;
  //public user = new User();
  public user={
    userId:"",
    userPassword:""

  };
  loginError: string;
  error: string;
  response:ResponseWrapper = new ResponseWrapper();
  isLoading:boolean=false;

  constructor(private authService:AuthService, private router: Router, private formBuilder: FormBuilder,private el: ElementRef) { 
    this.isError = false;
  this.isSubmitted  =  false;

  }

  ngOnInit() {
    this.authService.logout();
    this.isError = true;
    localStorage.clear();
  }

  login(){
    //console.log(JSON.parse(JSON.stringify(this.user)));
    this.isSubmitted = true;
    this.isLoading=true;
      
      this.authService.login(this.user).subscribe(data=>{
        this.response=data;
        //alert("ye alert pehele chalega"+JSON.stringify(data));
        //console.log('before delay '+JSON.stringify(this.response));
      // Do something after
      //console.log('after delay '+JSON.stringify(this.response));
      if(this.response.success===true)
      {
          //alert("login success");
          localStorage.setItem('ACCESS_TOKEN','Client');
          localStorage.setItem('userId',this.user.userId);
          this.router.navigateByUrl('/clientHome');
        }
        else{
          //alert("fail to login");
          //this.loginError = 'Username or password is incorrect.';
            this.error = this.response.error;
            this.isError = true;
            let alertDiv = this.el.nativeElement.querySelector("#alertDiv");
            let formdata = this.el.nativeElement.querySelector("form");
            formdata.reset();
            alertDiv.classList.remove('invisible');
        } 
        this.isLoading=false;        
      });
      
     
    
  }
  // delay(ms: number) {
  //   return new Promise( resolve => setTimeout(resolve, ms) );
  //     }
}
