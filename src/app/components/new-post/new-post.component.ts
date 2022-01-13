import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PostListAccountComponent } from '../post-list-account/post-list-account.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  descriptionInput: String = "";
  // postImgInput: File = <File>{};
  public postImgInput: FileList = <FileList> {}
  

  constructor(private apiServ: ApiService, private list : PostListAccountComponent) {  }

  ngOnInit(): void {
  }

  handleFileInput(event :any) {
    this.postImgInput = event.target.files;
  }

async createPost(){

  console.log(this.postImgInput);

    // const formData = new FormData();
    // for(const file of this.postImgInput) {
    //   formData.append('postImg', file, file.name);
    // }

    // formData.append('description', JSON.stringify(this.descriptionInput))

    // this.apiServ.createPost(formData).subscribe(responseBody =>{
    //   console.log(responseBody);
    // })

    if(this.postImgInput.length > 0) {
        let file: File = this.postImgInput[0];
        let formData:FormData = new FormData();
        formData.append("postImg", file, file.name);
        formData.append("description", JSON.stringify(this.descriptionInput));
        
        var response = await this.apiServ.createPost(formData).subscribe(responseBody =>{
          console.log(responseBody);
          if(responseBody.data){
            this.list.getAllPosts();
          }
        })
      }

      

  }
}
