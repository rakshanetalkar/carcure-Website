import { Component } from '@angular/core';
import { ReactiveFormsModule,Validators,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  message=''
  constructor(private router:Router){
    if(localStorage.getItem('token')!=null){
      router.navigate(['admin-home'])
    }
  }

  loginForm:FormGroup=new FormGroup({
    uname:new FormControl('',[Validators.email,Validators.required]),
    pwd:new FormControl('',Validators.required)
  })

  details=[
    {username:'admin@gmail.com',password:'admin@123'},
    {username:'raksha@gmail.com',password:'123'}
  ]
  onLogin(){
    if(this.loginForm.valid){
      let flag:boolean=false
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
        /*this.message="Login Successfully !!"
        setTimeout(() => {
          this.message='';
        }, 3000);*/
        localStorage.setItem('token',this.loginForm.get('uname')?.value)
        this.router.navigate(['admin-home'])
      }
    }
    else{
      this.message='Enter Username & Password';
      setTimeout(() => {
        this.message='';
      }, 3000);
    }
  }
}
