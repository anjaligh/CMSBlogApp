import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  message='';
  formdata:any;
  categoryid=localStorage.getItem('categoryId');
  editCategoryForm = {
    _id:this.categoryid,
    // mailid: [this.mailid],
    categoryDescription: '',
    categoryImage: '',
    categoryName: ''
  }
  constructor(private blogdata:BlogDataService, private router:Router) { }

  ngOnInit(): void {
this.blogdata.getSingleCategory(this.categoryid).subscribe(res=>{
  this.formdata=JSON.parse(JSON.stringify(res));
  console.log("this.formdata")
  console.log(this.formdata[0].categoryDescription)
  this.editCategoryForm.categoryDescription=this.formdata[0].categoryDescription;
  this.editCategoryForm.categoryImage=this.formdata[0].categoryImage;
  this.editCategoryForm.categoryName=this.formdata[0].categoryName;
  console.log("editcategoryForm")
  console.log(this.editCategoryForm)
})

  }
  editCategory(){
this.blogdata.editcategory(this.editCategoryForm).subscribe(res=>{
  alert(JSON.parse(JSON.stringify(res)).message);
  this.router.navigate(['/rootuser/categories'])
})
  }
}
