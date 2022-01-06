import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = <User>{};

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
    let checkUsername = this.apiServ.grabUsername()
    console.log("checkUsername: " + checkUsername);
    this.apiServ.getOneUser(checkUsername).subscribe(responseBody =>{
      console.log(responseBody)
      if(responseBody.data){
        this.user = responseBody.data
      }
    })
  }

}
