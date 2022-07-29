import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogDataService } from '../services/blog-data.service';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  message='';
  constructor(private fb:FormBuilder, private blogData:BlogDataService) { }

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
      alert("res.message");
  console.log(res.message);
  this.message=res.message;
    })
console.log(this.createCategoryForm.value);
  }
}
