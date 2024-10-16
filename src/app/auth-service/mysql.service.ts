import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor(private http:HttpClient) { }

  uerRegister(formdata:any):Observable<any>{
    return this.http.post('http://localhost/carcure/signup.php',formdata);
  }

  userLogin(formdata:any):Observable<any>{
    return this.http.post('http://localhost/carcure/login.php',formdata);
  }

  getUser():Observable<any>{
    return this.http.get('http://localhost/carcure/getUser.php');
  }

  updateUser(formdata:any):Observable<any>{
    return this.http.post('http://localhost/carcure/updateUser.php',formdata);
  }

  deleteUser(mobile:any):Observable<any>{
    return this.http.delete('http://localhost/carcure/deleteUser.php?Mobile='+mobile)
  }
}
