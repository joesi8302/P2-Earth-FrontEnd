import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-list-account',
  templateUrl: './post-list-account.component.html',
  styleUrls: ['./post-list-account.component.css']
})
export class PostListAccountComponent implements OnInit {

  p: number = 1;

  postList: Array<Post> = [];

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.apiServ.getAllUserPosts(this.apiServ.grabUsername()).subscribe(responseBody => {
      console.log(responseBody);
      this.postList = responseBody.data;
    })

  }

}
