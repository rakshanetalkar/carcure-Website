import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgFor,FooterComponent,LoginFooterComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  boxs:any=[
    {imgUrl:'./assets/c1.png',head:'MG Hector'},
    {imgUrl:'./assets/c2.png', head:'Mahindra XUV300'},
    {imgUrl:'./assets/c3.png',head:'Tata Punch'},
    {imgUrl:'./assets/c4.png', head:'Mahindra Thar'},
    {imgUrl:'./assets/c5.png',head:'BMW M4'},
    {imgUrl:'./assets/c6.png', head:'Hyundai Exter'},
  ]
}
