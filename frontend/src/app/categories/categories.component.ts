import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { CategoryModel } from '../services/CategoryModel';
import { Router } from '@angular/router';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:CategoryModel[]=[];
  constructor(private blogData:BlogDataService, private router:Router) { }
  faPen=faPen;
  faTrashCan=faTrashCan;
  faPlusCircle=faPlusCircle;
  ngOnInit(): void {
    this.blogData.getCategories().subscribe(res=>{
      this.categories=JSON.parse(JSON.stringify(res))
    })
  }
  addCategory(){
    this.router.navigate(['/rootuser/createcategory']);
  }
  editCategory(id:any){
localStorage.setItem('categoryId',id);
this.router.navigate(['/rootuser/editcategory'])
 }
 deleteCategory(id:any){
this.blogData.deleteCategory(id).subscribe(res=>{
  alert(JSON.parse(JSON.stringify(res)).message)
  this.blogData.getCategories().subscribe(res=>{
    this.categories=JSON.parse(JSON.stringify(res))
  })
  
})
 }
}
