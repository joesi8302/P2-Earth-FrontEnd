import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ApiService } from 'src/app/services/api.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {

  page: number = 0;
  displayPage: number = 1;

  postList: Array<Post> = [];

  constructor(private apiServ: ApiService, private paginate: NgxPaginationModule) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.apiServ.getAllPostsPage(this.page).subscribe(responseBody => {
      console.log(responseBody);
      this.postList = responseBody.data;
      
    })

  }

  goToAccount(username: string){
    this.apiServ.storeUsername(username);

  }

  incrementPage(){
    this.page++;
    this.displayPage++;
    this.apiServ.getAllPostsPage(this.page).subscribe(responseBody => {
      console.log(responseBody);
      if(responseBody.data == 0){
        this.page--;
        this.displayPage--;
        console.log(this.postList.length);  
      }
      else{
        this.postList = responseBody.data;
      }
    })

  }

  decrementPage(){
    this.page--;
    this.displayPage--;
    if(this.page < 0){
      this.page = 0;
      this.displayPage = 1;
    }
    this.apiServ.getAllPostsPage(this.page).subscribe(responseBody => {
      console.log(responseBody);
      if(responseBody.data.lentgh == 0){
          this.page++;
          this.displayPage++;
        }
      else{
        this.postList = responseBody.data;
      }     
    })
  }

}
