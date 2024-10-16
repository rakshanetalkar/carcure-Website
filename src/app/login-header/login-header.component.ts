import { Component } from '@angular/core';

@Component({
  selector: 'app-login-header',
  standalone: true,
  imports: [],
  templateUrl: './login-header.component.html',
  styles: `
  .heading{
    width:100%;
    height:50px;
    background:white;
    color:red;
    text-align:center;
    box-shadow:0px 0px 8px black;
    margin-bottom: .5%;
    margin-top:2%;
  }
  `
})
export class LoginHeaderComponent {

}
