import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-list-account',
  templateUrl: './post-list-account.component.html',
  styleUrls: ['./post-list-account.component.css']
})
export class PostListAccountComponent implements OnInit {

  page: number = 0;
  displayPage: number = this.page +1;
  user: User = <User>{};

  postList: Array<Post> = [];

  constructor(private apiServ: ApiService) { }

  async ngOnInit(): Promise<void> {

    let checkUsername = await this.apiServ.grabUsername();
    console.log("checkUsername: " + checkUsername);

    var response = await this.apiServ.getOneUser(checkUsername).toPromise();
    this.user = response.data;
    console.log(this.user.userId);


    this.getAllPosts();

  }

  triggerPosts(){
    
  }

  getAllPosts(){
    this.apiServ.getAllPostsUserPage(this.page, this.user.userId).subscribe(responseBody => {
      console.log(`Displaying post page: ${this.page} `+ responseBody.data);
      this.postList = responseBody.data;
    })

  }

  goToAccount(username: string){
    this.apiServ.storeUsername(username);

  }


  incrementPage(){
    this.page++;
    this.apiServ.getAllPostsUserPage(this.page, this.user.userId).subscribe(responseBody => {
      console.log(responseBody);
      if(responseBody.data == 0){
        this.page--;
        console.log(this.postList.length);  
      }
      else{
        this.postList = responseBody.data;
      }
    })

  }

  decrementPage(){
    this.page--;
    if(this.page < 0){
      this.page = 0;
    }
    this.apiServ.getAllPostsUserPage(this.page, this.user.userId).subscribe(responseBody => {
      console.log(responseBody);
      if(responseBody.data.lentgh == 0){
          this.page++;
        }
      else{
        this.postList = responseBody.data;
      }     
    })
  }

}
