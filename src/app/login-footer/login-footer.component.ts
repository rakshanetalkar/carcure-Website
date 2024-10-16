import { Component } from '@angular/core';

@Component({
  selector: 'app-login-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="copyright">
        <p>&copy; rakshanetalkar All Right Reserved</p>
    </div>
  `,
  styles: `
  .copyright p{
    padding:10px;
    text-align: center;
    font-size:18px;
    background: black;
    color: white;
}
  `
})
export class LoginFooterComponent {

}
