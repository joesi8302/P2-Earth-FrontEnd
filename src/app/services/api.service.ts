import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain: string = "http://localhost:9000";

  constructor(private httpCli: HttpClient) { }

  login(user: User){
    return this.httpCli.post(`${this.domain}/session`,{
      "username": user.username,
      "password": user.password
    }, {withCredentials: true})
  }

  logout(){
    return this.httpCli.post(`${this.domain}/session`, {withCredentials: true})
  }

  checkSession(){
    return this.httpCli.get<any>(`${this.domain}/session`, {withCredentials: true})
  }

  registerUser(user: User){
    return this.httpCli.post<any>(`${this.domain}/users`, {
      "username":user.username,
      "password": user.password,
      "user_first_name": user.user_first_name,
      "user_last_name": user.user_last_name,
      "user_img": user.user_img,
      "user_email": user.user_email
    }, {withCredentials: true})
  }

  updateUser(user: User){
    return this.httpCli.post<any>(`${this.domain}/users`, {
      "username":user.username,
      "password": user.password,
      "user_first_name": user.user_first_name,
      "user_last_name": user.user_last_name,
      "user_img": user.user_img,
      "user_email": user.user_email
    }, {withCredentials: true})
  }




}
