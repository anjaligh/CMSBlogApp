import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../services/CategoryModel';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angularTests';
  categories: CategoryModel[] = [];
  constructor(private blogData: BlogDataService) { }

  ngOnInit(): void {
    this.blogData.getCategories().subscribe(res => {
      this.categories = JSON.parse(JSON.stringify(res))
    })
  }

}
