import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../services/BlogModel';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../services/CategoryModel';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blog:BlogModel[]=[];
  category: CategoryModel[] = [];
  categorycolors:[]=[];
imageUrl:String='';
categoryname:String='';
  constructor(private blogdata:BlogDataService, private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    var id= localStorage.getItem("_id")
    console.log("this.myBlog")
    this.blogdata.getSingleBlog(id).subscribe(res=>{
      this.blog=JSON.parse(JSON.stringify(res))
      console.log("this.myBlog")
      console.log(this.blog)
      this.categoryname=this.blog[0].category;
      console.log(this.blog[0].category)
      this.blogdata.getCategorydetails(this.categoryname).subscribe(res => {
        this.category = JSON.parse(JSON.stringify(res))
        this.imageUrl=this.category[0].categoryImage;
      })
    })
   
      
      
      console.log("this.imageUrl")
      console.log(this.imageUrl)
    
  }
  updatePost(id:any){
localStorage.setItem('postid',id)
this.router.navigate(['editpost'])
  }
  deleteBlog(id:any){
    alert('Are you sure to delete this Blog?')
    this.blogdata.deleteBlog(id).subscribe(res=>{
      alert(JSON.parse(JSON.stringify(res)).message)
    })
  }
}
