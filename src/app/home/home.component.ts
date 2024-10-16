import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,LoginFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
