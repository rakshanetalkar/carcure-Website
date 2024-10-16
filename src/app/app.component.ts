import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Project6';
}

/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { PartsComponent } from './parts/parts.component';
import { FooterComponent } from './footer/footer.component';

/*    ******  Types of Component  ******    */
/*import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,CarsComponent,
    AboutComponent,PartsComponent,FooterComponent,
    LoginHeaderComponent,LoginPageComponent,LoginFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Project6';
}
*/