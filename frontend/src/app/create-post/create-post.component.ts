import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogDataService } from '../services/blog-data.service';
import { CategoryModel } from '../services/CategoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  categories:CategoryModel[]=[];
  type= localStorage.getItem('accountType');
  username= localStorage.getItem('username');
  mailid=localStorage.getItem('mailid');
  message='';
  // categories=['Travel','Food','Film','Science and Technology','Pets'];
  constructor(private fb:FormBuilder,private router:Router, private blogData:BlogDataService) { }

  ngOnInit(): void {
    this.blogData.getCategories().subscribe(res=>{
      this.categories=JSON.parse(JSON.stringify(res))
    })
  }
  createPostForm = this.fb.group({
    mailid: [this.mailid],
    username: [this.username],
    accountType: [this.type],
    title: ['', [Validators.required]],
    category:['Travel',[Validators.required]],
    postImage: ['', [Validators.required]],
    description: ['',[Validators.required]]
  })

  createPost(){
console.log(this.createPostForm.value)
this.blogData.createPost(this.createPostForm.value).subscribe(res=>{
  console.log("res.message");
  alert(res);
  this.message=res.message;
  this.router.navigate(['myblogs']);
})


  }
}
