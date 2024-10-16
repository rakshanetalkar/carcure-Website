import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,FooterComponent,LoginFooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  cards:any=[
    {imgUrl:'./assets/b1.png',info:'Accurate Diagnosis Guaranteed'},
    {imgUrl:'./assets/b2.png', info:'One Year Warranty'},
    {imgUrl:'./assets/b3.png',info:'Excellent Customer Service'},
  ]
}
