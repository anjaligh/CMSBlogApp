import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  constructor(private http:HttpClient) { }
  registerUser(userData:any):Observable<any>{
    return this.http.post('http://localhost:3001/register',userData)
  }
  loginAdmin(loginData:any):Observable<any>{
    console.log("login backenddataservice");
    return this.http.post('http://localhost:3001/login',loginData)
  }
  getUsers(){
    return this.http.get('http://localhost:3001/userslist')
  }
  getUserProfile(mailid:any){
    return this.http.get('http://localhost:3001/userprofile/'+mailid)
  }
  changePrivilage(editedUserdata:any){
    return this.http.put('http://localhost:3001/editprivilage',editedUserdata)
  }
}
