import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  storedUsername: String = "";

  constructor(private httpCli: HttpClient) { }


  register(formData:FormData) : Observable<any> {
    return this.httpCli.post<any>("http://localhost:9000/users", formData)
  }

  login(username: string, password: string) : Observable<any> {
    return this.httpCli.post<any>("http://localhost:9000/session", {
      "username": username,
      "password": password
    }, {
      withCredentials: true 
    })
  }

  checkSession() : Observable<any>{
    return this.httpCli.get<any>("http://localhost:9000/session", {
      withCredentials: true 
    })
  }

  logout(){
    return this.httpCli.delete<any>("http://localhost:9000/session", {
      withCredentials: true
    })
  }

  getOneUser(username: String) : Observable<any>{
    return this.httpCli.get<any>(`http://localhost:9000/users/${username}`, {withCredentials: true})
  }

  updateUser(formData : FormData) : Observable<any>{
    return this.httpCli.put<any>(`http://localhost:9000/users`, formData)
  }

  resetPassword(formData : FormData) : Observable<any>{
    return this.httpCli.put<any>(`http://localhost:9000/users/reset`, formData)
  }

  storeUsername(username: String){
    this.storedUsername = username;
    console.log(this.storedUsername);
  }

  grabUsername(){
    console.log("returned" + this.storedUsername);
    return this.storedUsername;
  }

  // createPost(postImg: File, description: String){
  //   return this.httpCli.post<any>(`http://localhost:9000/posts`,{ 
  //     "postImg": postImg,
  //     "description": description
  //   }, 
  //   {withCredentials: true,
  //    headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })})
  // }

  createPost(formData : FormData) : Observable<any>{
    return this.httpCli.post<any>(`http://localhost:9000/posts`, formData, 
    {withCredentials: true
     })
  }

  // headers: new HttpHeaders({ "Content-Type": "multipart/form-data" 


  getAllPosts() : Observable<any>{
    return this.httpCli.get<any>(`http://localhost:9000/posts` ,{ withCredentials: true }) 
  }

  getAllUserPosts(username: String) : Observable<any>{
    return this.httpCli.get<any>(`http://localhost:9000/posts/` ,{ withCredentials: true }) 
  }

  getAllPostsPage(page: number) : Observable<any>{
    return this.httpCli.get<any>(`http://localhost:9000/pagedposts/${page}` ,{ withCredentials: true }) 
  }

  getAllPostsUserPage(page: number, userId: number) : Observable<any>{
    return this.httpCli.get<any>(`http://localhost:9000/pagedposts/${page}/${userId}` ,{ withCredentials: true }) 
  }
  


}
