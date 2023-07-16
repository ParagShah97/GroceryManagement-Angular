import { Component, OnInit,ElementRef  } from '@angular/core';
//import { ResponseWrapper } from './../../entity/ResponseWrapper';
import { FormBuilder,FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service' ;
//import { NgForm} from '@angular/forms';

@Component({ 
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  isError = false;
  isSubmitted  =  false;
  loginError: string;
  error: string;
  response:any;
  constructor(private authService:AuthService, private router: Router, private formBuilder: FormBuilder,private el: ElementRef) {
    this.isError = false;
  this.isSubmitted  =  false;

   }


  ngOnInit(){
      this.authService.logout();
      this.isError = true;
      localStorage.clear();    
  }
  adminLogin(adminLoginForm:NgForm){
    //console.log(JSON.parse(JSON.stringify(this.user)));
    this.isSubmitted = true;

    (async () => { 
      
      this.authService.adminLogin(adminLoginForm.value).subscribe(data=>{
       this.response=data;
        alert("ye alert pehele chalega"+JSON.stringify(data));
      });
      console.log('before delay '+JSON.stringify(this.response));

      await this.delay(2000);

      // Do something after
      console.log('after delay '+JSON.stringify(this.response));

      if(this.response.success===true)
        {
            alert("login success");
            localStorage.setItem('ACCESS_TOKEN','Admin');
            this.router.navigateByUrl('/adminHome');
          }
          else{
            alert("fail to login");
            //this.loginError = 'Username or password is incorrect.';
              this.error = this.response.error;
              this.isError = true;
              let alertDiv = this.el.nativeElement.querySelector("#alertDiv");
              let formdata = this.el.nativeElement.querySelector("form");
              formdata.reset();
              alertDiv.classList.remove('invisible');
          }    
  })();
    
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  

}
