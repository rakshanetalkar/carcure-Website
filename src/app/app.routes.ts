import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { PartsComponent } from './parts/parts.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'/main-page',pathMatch:'full'},
    {path:'main-page',component:MainPageComponent,
        children:[{path:'admin-login',component:AdminLoginComponent},
                  {path:'login-page',component:LoginPageComponent}]},
    {path:'admin-home',component:AdminHomeComponent,
        children:[{path:'user-details',component:UserDetailsComponent}]},
        
    {path:'register-page',component:RegisterPageComponent},
    {path:'header',component:HeaderComponent,
        children:[{path:'home',component:HomeComponent},
                {path:'cars',component:CarsComponent},
                {path:'about',component:AboutComponent},
                {path:'parts',component:PartsComponent},
                {path:'footer',component:FooterComponent},
                {path:'login-footer',component:LoginFooterComponent}]},
        
    
    {path:'**',component:ErrorPageComponent}
];
