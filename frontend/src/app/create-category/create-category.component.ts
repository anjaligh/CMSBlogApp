import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  message='';
  constructor(private fb:UntypedFormBuilder, private blogData:BlogDataService, private router:Router) { }

  ngOnInit(): void {
  }
  createCategoryForm = this.fb.group({
    // mailid: [this.mailid],
    categoryDescription: ['', [Validators.required]],
    categoryImage: ['', [Validators.required]],
    categoryName: ['',[Validators.required]]
  })
  createCategory(){
    this.blogData.createCategory(this.createCategoryForm.value).subscribe(res=>{
      alert(res.message);
  console.log(res.message);
  this.message=res.message;
  this.router.navigate(['/rootuser/categories'])
    })
console.log(this.createCategoryForm.value);
  }
}
