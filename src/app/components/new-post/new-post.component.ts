import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  descriptionInput: String = "";
  postImgInput: File = <File>{};
  

  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
  }

  handleFileInput(event :any) {
    this.postImgInput = event.target.file;
  }
createPost(){

    const formData = new FormData();
    formData.append('postImg', this.postImgInput);
    formData.append('description', JSON.stringify(this.descriptionInput))

    this.apiServ.createPost(formData).subscribe(responseBody =>{
      console.log(responseBody);
    })
  }
}
