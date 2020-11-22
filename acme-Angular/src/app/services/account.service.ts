import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: User;

  readonly URL_API = "http://localhost:5000/acme/api/auth/";

  constructor(private http: HttpClient) {
    this.user = new User();
   }
  
  signup(user: User){    
    return this.http.post(this.URL_API+'signup', user);
  }

  signin(user: User){
    return this.http.post<{token:  string}>(this.URL_API+'signin', user );
  }

}
