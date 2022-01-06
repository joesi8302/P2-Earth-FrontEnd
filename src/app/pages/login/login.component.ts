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

  constructor(private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.apiServ.login(this.usernameInput, this.passwordInput).subscribe((responseBody: { data: any; message: string; }) => {
      console.log(responseBody);
      if(responseBody.data){
        this.apiServ.storeUsername(responseBody.data.username)
        this.router.navigate(["account"]);
      } else{
        this.errMessage = responseBody.message;
      }


    })
    
}

checkSession(){
  this.apiServ.checkSession().subscribe((responseBody: any) => {
    console.log(responseBody);
  })
}

}
