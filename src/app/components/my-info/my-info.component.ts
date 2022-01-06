import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
    
  }

}
