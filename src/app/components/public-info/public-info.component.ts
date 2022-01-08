import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.css']
})
export class PublicInfoComponent implements OnInit {

  @Input()
  user: User = <User>{};

  constructor() { }

  ngOnInit(): void {
  }

}
