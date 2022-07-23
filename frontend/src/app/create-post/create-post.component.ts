import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  type= localStorage.getItem('accountType');
  username= localStorage.getItem('username');
  mailid=localStorage.getItem('mailid')
  categories=['Travel','Food','Film','Science and Technology','Pets'];
  constructor(private fb:FormBuilder, private blogData:BlogDataService) { }

  ngOnInit(): void {
  }
  createPostForm = this.fb.group({
    mailid: [this.mailid],
    username: [this.username],
    accountType: [this.type],
    title: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{4,32}$')]],
    category:['',[Validators.required]],
    postImage: ['', [Validators.required]],
    description: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]{4,10000}$')]]
  })

  createPost(){
console.log(this.createPostForm.value)
this.blogData.createPost(this.createPostForm.value).subscribe(res=>{
  console.log(res);
})


  }
}
