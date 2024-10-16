import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,FooterComponent,LoginFooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router){
    if(localStorage.getItem('token')==null){
      router.navigate(['main-page/login-page'])
    }
  }  

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['main-page/login-page'])
  }
}
