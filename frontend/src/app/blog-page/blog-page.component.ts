import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../services/BlogModel';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blog:BlogModel[]=[];


  constructor(private blogdata:BlogDataService, private router:Router) { }

  ngOnInit(): void {
    var id= localStorage.getItem("_id")
    console.log("this.myBlog")
    this.blogdata.getSingleBlog(id).subscribe(res=>{
      this.blog=JSON.parse(JSON.stringify(res))
      console.log("this.myBlog")
      console.log(this.blog)
    })
  }
  updatePost(id:any){
localStorage.setItem('postid',id)
this.router.navigate(['editpost'])
  }
}
