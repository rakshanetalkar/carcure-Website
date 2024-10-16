import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [NgFor,FooterComponent,LoginFooterComponent],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent {
  cards:any=[
    {imgUrl:'./assets/part1.png',h3:'Auto Spare Parts',rs:'$120.99',review:'5 Reviews',btn:'Buy Now',detail:'View Details'},
    {imgUrl:'./assets/part2.png', h3:'Auto Spare Parts',rs:'$120.99',review:'3.5 Reviews',btn:'Buy Now',detail:'View Details'},
    {imgUrl:'./assets/part3.png',h3:'Auto Spare Parts',rs:'$120.99',review:'4 Reviews',btn:'Buy Now',detail:'View Details'},
    {imgUrl:'./assets/part4.png',h3:'Auto Spare Parts',rs:'$120.99',review:'4.6 Reviews',btn:'Buy Now',detail:'View Details'},
    {imgUrl:'./assets/part5.png', h3:'Auto Spare Parts',rs:'$120.99',review:'3 Reviews',btn:'Buy Now',detail:'View Details'},
    {imgUrl:'./assets/part6.png',h3:'Auto Spare Parts',rs:'$120.99',review:'5 Reviews',btn:'Buy Now',detail:'View Details'},
  ]
}
