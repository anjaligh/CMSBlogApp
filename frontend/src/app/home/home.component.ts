import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../services/CategoryModel';
import { BlogModel } from '../services/BlogModel';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angularTests';
  categories: CategoryModel[] = [];
  allBlogs:BlogModel[]=[];
  constructor(private blogData: BlogDataService, private router:Router) { }

  ngOnInit(): void {

    this.blogData.getCategories().subscribe(res => {
      this.categories = JSON.parse(JSON.stringify(res))
    })
    this.blogData.getAllBlogs().subscribe(res => {
      this.allBlogs = JSON.parse(JSON.stringify(res))
      console.log(this.allBlogs)
    })
  }
  showBlogPage(_id: any) {
    localStorage.setItem("_id", _id);
    this.router.navigate(['/blogpage']);

  }
}


