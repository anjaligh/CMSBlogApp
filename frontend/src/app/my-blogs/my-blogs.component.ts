import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../services/BlogModel';
import { BlogDataService } from '../services/blog-data.service';
import { Router } from '@angular/router';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {
  myBlogs: BlogModel[] = [];
  id: any;
  faTrashCan = faTrashCan;
  faPenToSquare = faPen;
  // faTrashCan=faTrashCan;


  constructor(private blogdata: BlogDataService, private router: Router) { }

  ngOnInit(): void {
    var mailid = localStorage.getItem('mailid');
    this.blogdata.getMyBlogs(mailid).subscribe(res => {
      this.myBlogs = JSON.parse(JSON.stringify(res))
      console.log(this.myBlogs)
    })
  }
  showBlogPage(_id: any) {
    localStorage.setItem("_id", _id);
    this.router.navigate(['/blogpage']);

  }
  updatePost(id: any) {
    localStorage.setItem('postid', id)
    this.router.navigate(['editpost'])
  }
  deleteBlog(id: any) {
    alert('Are you sure to delete this Blog?')
    this.blogdata.deleteBlog(id).subscribe(res => {
      alert(JSON.parse(JSON.stringify(res)).message)
      this.router.navigate(['myblogs']);
    })
  }
  // deleteBlog(id:any){
  //   this.blogdata.deleteBlog(id).subscribe(res=>{
  //     alert(JSON.parse(JSON.stringify(res)).message)
  //     this.router.navigate(['myblogs']);
  //   })
  // }
}
