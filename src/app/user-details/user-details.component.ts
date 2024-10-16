import { Component } from '@angular/core';
import { MysqlService } from '../auth-service/mysql.service';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';

interface user{
  Fullname:string,
  Username:string,
  Password:string,
  Address:String,
  City:string,
  State:string,
  Mobile:string
}

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(private service:MysqlService){
    this.getUser();
  }
  userArr:user[]=[];
  display:boolean=false;
  isDelete:boolean=false;
  mobile:any=''

  updateForm:FormGroup=new FormGroup({
    Fullname:new FormControl('',Validators.required),
    Username:new FormControl('',[Validators.email, Validators.required]),
    Password:new FormControl('',[Validators.minLength(4),Validators.required]),
    ConPassword:new FormControl('',[Validators.minLength(4),Validators.required]),
    Address:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    State:new FormControl('',Validators.required),
    Mobile:new FormControl('',Validators.required)
  })

  onEdit(i:number){
    this.display=true;
    this.updateForm.controls['Fullname'].setValue(this.userArr[i].Fullname);
    this.updateForm.controls['Username'].setValue(this.userArr[i].Username);
    this.updateForm.controls['Password'].setValue(this.userArr[i].Password);
    this.updateForm.controls['ConPassword'].setValue(this.userArr[i].Password);
    this.updateForm.controls['Address'].setValue(this.userArr[i].Address);
    this.updateForm.controls['City'].setValue(this.userArr[i].City);
    this.updateForm.controls['State'].setValue(this.userArr[i].State);
    this.updateForm.controls['Mobile'].setValue(this.userArr[i].Mobile);
  }

  citys=['Solapur','Kolapur','Nagpur','Ahmednagar','Karad','Tuljapur','Pandeypur'];
  states=['Maharashtra','Karnataka','Punjab','Gujarat','Haryana']

  getUser(){
    this.service.getUser().subscribe({
      next:(val:any)=>{
        console.log(val)
        this.userArr=val.message;
        console.log(this.userArr)
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

  onUpdate(){
    this.service.updateUser(this.updateForm.value).subscribe({
      next:(val:any)=>{
       if(val.message=="User Updated Successfully!"){
        alert(val.message)
        this.display=false
        this.getUser();
       }
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }
  onDelete(Mobile:string){
    this.isDelete=true
    this.mobile=Mobile
  }
  deleteUser(){
    this.service.deleteUser(this.mobile).subscribe({
      next:(val:any)=>{
        if(val.message=="User Deleted Successfully!"){
            alert(val.message);
            this.isDelete=false;
            this.getUser()
         }
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }
}
