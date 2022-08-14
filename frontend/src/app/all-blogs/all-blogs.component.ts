import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { CategoryModel } from '../services/CategoryModel';
import { BlogModel } from '../services/BlogModel';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryBlogs: BlogModel[] = [];
  blogsCategory = 'Food';
  faSearch = faSearch;
  constructor(private blogData: BlogDataService,public auth:AuthService,private router:Router ) { }

  ngOnInit(): void {
    this.blogData.getCategories().subscribe(res => {
      this.categories = JSON.parse(JSON.stringify(res))
    })
    this.blogData.findCategory(this.blogsCategory).subscribe(res => {
      console.log(res);
      this.categoryBlogs = JSON.parse(JSON.stringify(res))
    })
  }


  findCategory(category: any) {
    localStorage.setItem('blogsCategory', category);
    this.blogsCategory = category;
    this.blogData.findCategory(category).subscribe(res => {
      console.log(res);
      this.categoryBlogs = JSON.parse(JSON.stringify(res))
    })
  }

  showBlogPage(_id: any) {
    localStorage.setItem("_id", _id);
    this.router.navigate(['/blogpage']);

  }
  // deleteBlog(id:any){
  //   alert('Are you sure wants to delete this Blog?')
  //   this.blogData.deleteBlog(id).subscribe(res=>{
  //     alert(JSON.parse(JSON.stringify(res)).message)
  //     this.blogData.findCategory(this.blogsCategory).subscribe(res => {
  //       console.log(res);
  //       this.categoryBlogs = JSON.parse(JSON.stringify(res))
  //     })
  //   })
  // }
}
