import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http:HttpClient) { }
  createPost(data:any):Observable<any>{
    return this.http.post('http://localhost:3001/createpost',data)
  }
  getMyBlogs(mailid:any){
    console.log("usermailService "+mailid);
    return this.http.get('http://localhost:3001/getmyblogs/'+mailid)
  }
  getSingleBlog(id:any){
    return this.http.get('http://localhost:3001/getsingleblog/'+id)
  }
  editBlog(blogdata:any){
    return this.http.put('http://localhost:3001/editblog',blogdata)
  }
}
