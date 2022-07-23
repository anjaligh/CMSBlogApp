import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http:HttpClient) { }
  createPost(data:any){
    return this.http.post('http://localhost:3001/createpost',data)
  }
}
