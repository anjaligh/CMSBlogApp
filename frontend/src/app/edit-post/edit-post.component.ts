import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../services/BlogModel';
import { CategoryModel } from '../services/CategoryModel';
import { BlogDataService } from '../services/blog-data.service';
import { UntypedFormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  // blog:BlogModel[]=[];
  categories: CategoryModel[] = [];
  type= localStorage.getItem('accountType');
  username= localStorage.getItem('username');
  mailid=localStorage.getItem('mailid');
  message='';
  // categories=['Travel','Food','Film','Science and Technology','Pets'];
  postdate= new Date();
  postid= localStorage.getItem('postid');
  formData:any;
  // title='anjali';
  // description='bla bla bla'
  // category='food1'
  editPostForm = {
    _id: [this.postid],
    mailid: [this.mailid],
    username: [this.username],
    accountType: [this.type],
    title: '',
    category:'',
    postImage: '',
    description: '',
    postdate:[this.postdate]
  };
  // editPostForm = this.fb.group({
  //   _id: [this.postid],
  //   mailid: [this.mailid],
  //   username: [this.username],
  //   accountType: [this.type],
  //   title: ['', [Validators.pattern('^[a-zA-Z ]{4,32}$')]],
  //   category:[''],
  //   postImage: [''],
  //   description: ['']
  // }) 
  constructor(private blogdata:BlogDataService, private fb:UntypedFormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.blogdata.getCategories().subscribe(res => {
      this.categories = JSON.parse(JSON.stringify(res))
    })
  //  this.postid= localStorage.getItem('postid');
  this.blogdata.getSingleBlog(this.postid).subscribe(res=>{
    this.formData=JSON.parse(JSON.stringify(res));
this.editPostForm.title=this.formData[0].title;
this.editPostForm.category=this.formData[0].category;
this.editPostForm.postImage=this.formData[0].postImage;
this.editPostForm.description=this.formData[0].description;
console.log("this.blog")
  console.log(this.editPostForm.description)
})
  }
  
  editPost(){
this.blogdata.editBlog(this.editPostForm).subscribe(res=>{
  console.log(res);
  alert(JSON.parse(JSON.stringify(res)).message);
  this.router.navigate(['allblogs'])
})
    console.log(this.editPostForm)
  }
}
