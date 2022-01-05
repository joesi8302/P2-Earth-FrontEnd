import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  errMessage: string = "";
  usernameInput: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
