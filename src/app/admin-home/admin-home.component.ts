// import { Component } from '@angular/core';
// import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-admin-home',
//   standalone: true,
//   imports: [RouterLink,RouterOutlet,RouterLinkActive],
//   templateUrl: './admin-home.component.html',
//   styleUrl: './admin-home.component.css'
// })
// export class AdminHomeComponent {
//   constructor(private router:Router){
//     if(localStorage.getItem('token')==null){
//       router.navigate(['main-page/admin-login'])
//     }
//   }

//   logout(){
//     localStorage.removeItem('token')
//     this.router.navigate(['main-page/admin-login'])
//   }
// }
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('token') == null) {
        this.router.navigate(['main-page/admin-login']);
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.router.navigate(['main-page/admin-login']);
    }
  }
}

