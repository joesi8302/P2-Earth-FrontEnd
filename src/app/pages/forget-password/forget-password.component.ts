import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  successMessage: string = "";
  errMessage: string = "";
  emailInput: string = "";


  constructor(private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  forgotPassword(){

    console.log(this.emailInput);

    let formData:FormData = new FormData();
    formData.append("email", JSON.stringify(this.emailInput));

    this.apiServ.resetPassword(formData).subscribe(responseBody => {
      console.log(responseBody)
      
    })
  }

}
