import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MysqlService } from '../auth-service/mysql.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  template: `
    <div class="loginPanel">
        <div class="login">
            <h2>LOGIN</h2>
            <form [formGroup]="loginForm" (ngSubmit)="onLogin()">
              <div class="inputPanel">
                <input type="email" placeholder="Username" formControlName="uname"> 
                <input type="password" placeholder="Password" formControlName="pwd">  
              </div>
              <div class="btnForgot">
                 <a href="#">Forgot Password?</a>  
              </div>
              <button>Login</button>
              <div class="btnRegister">
                <a routerLink="/register-page">Don't have an account?<strong>Register</strong></a>
              </div>
              <p class="error">{{message}}</p>
            </form>
        </div>
    </div>
  `,
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  message=''
  constructor(private router:Router,private service:MysqlService){
    if(localStorage.getItem('token')!=null){
      router.navigate(['header'])
    }
  }

  loginForm:FormGroup=new FormGroup({
    uname:new FormControl('',[Validators.email,Validators.required]),
    pwd:new FormControl('',Validators.required)
  })

  /*details=[
    {username:'a@gmail.com',password:'123'},
    {username:'raksha@gmail.com',password:'raksha@123'}
  ]*/
  onLogin(){
    if(this.loginForm.valid){
      /*let flag:boolean=false
      for (let index = 0; index < this.details.length; index++) {
        const element = this.details[index];
        if(element.username===this.loginForm.get('uname')?.value &&
           element.password===this.loginForm.get('pwd')?.value){
            flag=true
            break
           }
      }
      if (!flag) {
        this.message="Username & Password doesn't exist"
        setTimeout(() => {
          this.message='';
        }, 3000);        
        this.loginForm.reset()
      }else{
        localStorage.setItem('token',this.loginForm.get('uname')?.value)
        this.router.navigate(['header'])
      }*/
      this.service.userLogin(this.loginForm.value).subscribe({
        next:(val:any)=>{
          console.log(val)
          if(val.message=="0"){
            this.message="Username & Password doest'n match";
            setTimeout(() => {
              this.message='';
              this.loginForm.reset();
            }, 3000);
          }else if(val.message=="1"){
            localStorage.setItem('token',this.loginForm.get('uname')?.value)
            this.router.navigate(['header'])   
          }
        }, error:(err:any)=>{
          console.log(err)
        }
      })
    }
    else{
      this.message='Enter Username & Password';
      setTimeout(() => {
        this.message='';
      }, 3000);
    }
  }
}
