import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { CategoryModel } from '../services/CategoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:CategoryModel[]=[];
  constructor(private blogData:BlogDataService) { }

  ngOnInit(): void {
    this.blogData.getCategories().subscribe(res=>{
      this.categories=JSON.parse(JSON.stringify(res))
    })
  }

}
