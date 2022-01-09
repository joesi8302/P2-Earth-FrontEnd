import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  pageNumber: number = 1;

  postList: Array<Post> = [];

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.apiServ.getAllPosts(this.pageNumber).subscribe(responseBody => {
      console.log(responseBody);
      this.postList = responseBody.data;
    })

  }

  goToAccount(username: string){
    this.apiServ.storeUsername(username);

  }

}
