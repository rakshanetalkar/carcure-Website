import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MysqlService } from '../auth-service/mysql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private service:MysqlService, private router:Router){
    this.actionButton='Sign Up';
  }
  message:string="";
  actionButton='Sign Up';
  isDisable:boolean=false;
  alertMessage:boolean=false
  alertValue=''
  alertIcon=''

  citys=['Solapur','Kolapur','Nagpur','Ahmednagar','Karad','Tuljapur','Pandeypur'];
  states=['Maharashtra','Karnataka','Punjab','Gujarat','Haryana']

  registerForm:FormGroup=new FormGroup({
    Fullname:new FormControl('',Validators.required),
    Username:new FormControl('',[Validators.email, Validators.required]),
    Password:new FormControl('',[Validators.minLength(4),Validators.required]),
    ConPassword:new FormControl('',[Validators.minLength(4),Validators.required]),
    Address:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    State:new FormControl('',Validators.required),
    Mobile:new FormControl('',Validators.required)
  })
  onformRegister(){
      if(this.registerForm.value.Fullname==''){
        this.message="FullName Required!!"
      }else if(this.registerForm.value.Username==''){
        this.message="UserName Required!!"
      }else if(this.registerForm.value.Address==''){
        this.message="Address Required!!"
      }else if(this.registerForm.value.City==''){
        this.message="Select City!!"
      }else if(this.registerForm.value.State==''){
        this.message="Select State!!"
      }else if(this.registerForm.value.Mobile==''){
        this.message="Mobile No. Required!!"
      }else if(this.registerForm.valid){
        if(this.registerForm.get('Password')?.value===this.registerForm.get('ConPassword')?.value){
          this.actionButton='Please Wait...'
          this.isDisable=true;
          setTimeout(() => {
            this.message="";
            this.service.uerRegister(this.registerForm.value).subscribe({
            next:(data:any)=>{
              console.log(data);
              this.isDisable=false;
              this.actionButton='Sign Up'
              this.alertMessage=true
              this.alertIcon='fa-thumbs-up'
              this.alertValue='Registered successfully!!'
              setTimeout(() => {
                this.alertMessage=false
                this.alertValue=''
                this.registerForm.reset();
                this.router.navigate(['main-page/login-page']) 
              }, 2500);         
            },error:(err:any)=>{              
              this.isDisable=false;
              this.actionButton='Sign Up'
              this.alertMessage=true
              this.alertIcon='fa-circle-xmark'
              this.alertValue='Something went wroung!!'
              setTimeout(() => {
                this.alertMessage=false
                this.alertValue=''
                this.registerForm.reset();
              }, 2500);
            }
          })
          }, 1500);
        }else{
          this.message="Password does't Match!!"
          this.registerForm.get('Password')?.setValue('')
          this.registerForm.get('ConPassword')?.setValue('')
          setTimeout(() => {
            this.message=""
          }, 1500);
        }
      }
      else{
        this.message="Enter Required Information!!"
      }
  }
  onformReset(){
    this.registerForm.reset();
    this.message="Form Canceled!"
    setTimeout(() => {
      this.message=""
    }, 2000);
  }

  loginPage(){    
    this.router.navigate(['main-page/login-page'])
  }
}
