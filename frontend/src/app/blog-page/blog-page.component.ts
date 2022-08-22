import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../services/BlogModel';
import { CommentModel } from '../services/CommentModel';
import { BlogDataService } from '../services/blog-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '../services/CategoryModel';
import { AuthService } from '../services/auth.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPen, faComment,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blog: BlogModel[] = [];
  category: CategoryModel[] = [];
  comments: CommentModel[] = [];
  categorycolors: [] = [];

  username = localStorage.getItem('username');
  blogtitle = localStorage.getItem('blogtitle');
  mailid = localStorage.getItem('mailid');
  blogid = localStorage.getItem("_id")

  commentbox = false;
  creator=false;
  commentpic="/assets/user.png";
  message = '';
  imageUrl: String = '';
  categoryname: String = '';
  faTrashCan = faTrashCan;
  faPenToSquare = faPen;
  faComment = faComment;
  faPaperPlane=faPaperPlane;
  commentdate = new Date();

  constructor(private blogdata: BlogDataService, private router: Router, public auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    var id = localStorage.getItem("_id")
    console.log("this.myBlog")
    this.blogdata.getSingleBlog(id).subscribe(res => {
      this.blog = JSON.parse(JSON.stringify(res))
      console.log("this.myBlog")
      console.log(this.blog)
      if(this.mailid== this.blog[0].mailid){
        this.creator= true;
      }
      this.blogdata.getComments(id).subscribe(res => {
        this.comments = JSON.parse(JSON.stringify(res))
        console.log(this.comments)
      })

        this.categoryname = this.blog[0].category;
        console.log(this.blog[0].category)
        this.blogdata.getCategorydetails(this.categoryname).subscribe(res => {
          this.category = JSON.parse(JSON.stringify(res))
          this.imageUrl = this.category[0].categoryImage;
        })
      })

    }

  commentForm = this.fb.group({
      mailid: [this.mailid],
      username: [this.username],
      blogid: [this.blogid],
      comment: ['', [Validators.required]],
      commentdate: [this.commentdate]
    })
  updatePost(id: any) {
      localStorage.setItem('postid', id)
    this.router.navigate(['editpost'])
    }
  deleteBlog(id: any) {
      alert('Are you sure to delete this Blog?')
    this.blogdata.deleteBlog(id).subscribe(res => {
        alert(JSON.parse(JSON.stringify(res)).message)
      })
      this.router.navigate(['allblogs'])
    }
  addComment() {
      this.commentbox = true;
    }

  postComment() {
    var id = localStorage.getItem("_id")
      console.log("this.commentForm.value")
    console.log(this.commentForm.value)
    this.blogdata.postComment(this.commentForm.value).subscribe(res => {
        console.log("res.message");
        // alert(JSON.parse(JSON.stringify(res)).message);
        this.message = JSON.parse(JSON.stringify(res)).message;
        this.blogdata.getComments(id).subscribe(res => {
          this.comments = JSON.parse(JSON.stringify(res))
          console.log(this.comments)
        })
      })
      this.commentbox = false;
    }
}