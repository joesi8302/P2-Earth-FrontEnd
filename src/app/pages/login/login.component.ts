import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";
  serviceUsername: any;

  constructor(private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServ.checkSession().subscribe({ next: responseBody =>{
      if(responseBody.data){
        this.router.navigate(["/account"]);
      }
      else{
        this.router.navigate(["/"])
      }
    },
    error: badRequest => {

    }});
  }

  login(){
    this.apiServ.login(this.usernameInput, this.passwordInput).subscribe({next: responseBody => {
      console.log(responseBody);
      if(responseBody.data){
        this.apiServ.storeUsername(responseBody.data.username);
        this.router.navigate(["account"]);
      }

    },
    error: badRequest => {
      this.errMessage = badRequest.error.response;
    }})
    
}


}
