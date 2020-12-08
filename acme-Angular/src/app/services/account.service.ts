import { Rate } from './../models/Rate';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: User;

  //isLogged = false;

  readonly URL_API = "http://localhost:3000/acme/api/auth/";

  constructor(private http: HttpClient) {
    this.user = new User();
   }
  
  signup(user: User){    
    return this.http.post(this.URL_API+'signup', user);
  }

  signin(user: User){
    return this.http.post<{token:  string}>(this.URL_API+'signin', user );
  }
  
  verifyToken(){
    let token = localStorage.getItem('token'); 
    return this.http.post<{token: string}>(this.URL_API+'verifyToken', {
      token
    } );
  }

}
