import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCli: HttpClient) { }


  register(username: string, password: string, firstname: string, lastname: string){
    return this.httpCli.post<any>("http://localhost:9000/user",{
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname
    })
  }

  login(username: string, password: string) : Observable<any> {
    return this.httpCli.post<any>("http://localhost:9000/session", {
      "username": username,
      "password": password
    }, {
      withCredentials: true 
    })
  }

  checkSession(){
    return this.httpCli.get<any>("http://localhost:9000/session", {
      withCredentials: true 
    })
  }

  logout(){
    return this.httpCli.delete<any>("http://localhost:9000/session", {
      withCredentials: true
    })
  }


}
