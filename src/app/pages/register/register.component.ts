import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";
  firstNameInput: string = "";
  lastNameInput: string = "";
  public imgInput: FileList = <FileList> {}
  emailInput: string = "";

  constructor(private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  handleFileInput(event :any) {
    this.imgInput = event.target.files;
  }

  registerUser(){

    let file: File = this.imgInput[0];
    let formData:FormData = new FormData();
    formData.append("username", (this.usernameInput));
    formData.append("password", (this.passwordInput));
    formData.append("user_first_name", (this.firstNameInput));
    formData.append("user_last_name", (this.lastNameInput));
    formData.append("user_img", file, file.name);
    formData.append("user_email", (this.emailInput));

    this.apiServ.register(formData).subscribe({next: responseBody => {
      console.log("this is reponse")
      console.log(responseBody);
      if(responseBody.data){
        this.router.navigate(["../"]);
      }
    },
    error: badRequest => {
      this.errMessage = badRequest.error.response;
    }})
    
  }
}

  

