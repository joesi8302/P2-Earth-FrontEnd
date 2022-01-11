import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = <User>{};
  checkSession: Session = <Session>{};
  currentAccount: Boolean = false;

  constructor(private apiServ: ApiService) { }

  async ngOnInit(): Promise<void> {
    let checkUsername = await this.apiServ.grabUsername();
    console.log("checkUsername: " + checkUsername);

    var response = await this.apiServ.getOneUser(checkUsername).toPromise();
    this.user = response.data;
    console.log(this.user.userId);

    var response2 = await this.apiServ.checkSession().toPromise();
    this.checkSession = response2.data;
    console.log(this.checkSession.user_id);

    if(this.checkSession.user_id == this.user.userId){
      this.currentAccount = true;
    }
    else{
      this.currentAccount = false;
    }
    console.log((this.checkSession.user_id == this.user.userId))

    // await this.apiServ.getOneUser(checkUsername).subscribe(responseBody =>{
    //   console.log(responseBody)
    //   if(responseBody.data){
    //     this.user = responseBody.data
    //   }
    // })
    // await this.apiServ.checkSession().subscribe(responseBody => {
    //   if(responseBody.data){
    //     console.log(responseBody);
    //     this.checkSession = responseBody.data;

    //     if(this.checkSession.user_id == this.user.user_id){
    //       this.currentAccount = true;
    //     }
    //     else{
    //       this.currentAccount = false;
    //     }
    //   }
    // })

    

  }

}
