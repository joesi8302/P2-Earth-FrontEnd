import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  @Input()
  user: User = <User>{};

  errMessage: string = "";
  okMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";
  firstNameInput: string = "";
  lastNameInput: string = "";
  public imgInput: FileList = <FileList> {}
  emailInput: string = "";

  checkSession: Session = <Session>{};


  constructor(private apiServ: ApiService) { }

  async ngOnInit(): Promise<void> {
    var response2 = await this.apiServ.checkSession().toPromise();
    this.checkSession = response2.data;
    console.log(this.checkSession.user_id);
    
  }

  handleFileInput(event :any) {
    this.imgInput = event.target.files;
  }

  updateUser(){

    let file: File = this.imgInput[0];
    let formData:FormData = new FormData();
    formData.append("id", JSON.stringify(this.checkSession.user_id));
    formData.append("username", this.usernameInput);
    formData.append("password", this.passwordInput);
    formData.append("user_first_name", this.firstNameInput);
    formData.append("user_last_name", this.lastNameInput);
    formData.append("user_img", file, file.name);
    formData.append("user_email", this.emailInput);

    this.apiServ.updateUser(formData).subscribe({next: responseBody => {
      console.log(responseBody.data);
      this.okMessage = responseBody.response;
    },
    error: badRequest => {
      this.errMessage = badRequest.error.response;
      console.log("This is Error MSg: " + this.errMessage);
    }})
  }

}
