import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http:HttpClient) { }
  createPost(data:any):Observable<any>{
    let headers={
      'Authorization':"Bearer "+localStorage.getItem('token')
    }
    return this.http.post('http://localhost:3001/createpost',data,{headers:headers})
  }
  createCategory(data:any):Observable<any>{
    console.log("servicedata")
    console.log(data)
    let headers={
      'Authorization':"Bearer "+localStorage.getItem('token')
    }
    return this.http.post('http://localhost:3001/createcategory',data,{headers:headers})
  }
  getCategories(){
    return this.http.get('http://localhost:3001/getcategories')
  }
  getCategorydetails(categoryname:any){
    return this.http.get('http://localhost:3001/getcategorydetails/'+categoryname)
  }
  getMyBlogs(mailid:any){
    console.log("usermailService "+mailid);
    return this.http.get('http://localhost:3001/getmyblogs/'+mailid)
  }
  getAllBlogs(){
    return this.http.get('http://localhost:3001/getallblogs')
  }
  getSingleBlog(id:any){
    return this.http.get('http://localhost:3001/getsingleblog/'+id)
  }
  getSingleCategory(id:any){
    console.log('getsinglecategory')
    console.log(id)
    return this.http.get('http://localhost:3001/getsinglecategory/'+id)
  }
  editcategory(categorydata:any){
    return this.http.put('http://localhost:3001/editcategory',categorydata)
  }
  deleteCategory(id:any){
    return this.http.delete("http://localhost:3001/removecategory/"+id)
  }
  editBlog(blogdata:any){
    return this.http.put('http://localhost:3001/editblog',blogdata)
  }
  deleteBlog(id:any){
    return this.http.delete("http://localhost:3001/remove/"+id)
  }
  findCategory(category:any){
    console.log("category "+category);
    return this.http.get('http://localhost:3001/findcategory/'+category)
  }
  postComment(comment:any){
    console.log("servicedata")
    console.log(comment)
    let headers={
      'Authorization':"Bearer "+localStorage.getItem('token')
    }
    return this.http.post('http://localhost:3001/postcomment',comment,{headers:headers})
  }
  getComments(blogid:any){
    return this.http.get('http://localhost:3001/getcomments/'+blogid)
  }
}
