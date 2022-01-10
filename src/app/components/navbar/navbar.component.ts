import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  serviceUsername: String = "";

  constructor(private httpCli: HttpClient, private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServ.checkSession().subscribe(responseBody =>{
      if(responseBody.data){
        this.serviceUsername = responseBody.data.username;
      }
    })
  }

  logout(){

    return this.apiServ.logout().subscribe(responseBody => {
      this.router.navigate([("../")])
    })
    
  }

  personalAccount(){
    this.apiServ.storeUsername(this.serviceUsername);
  }

}
