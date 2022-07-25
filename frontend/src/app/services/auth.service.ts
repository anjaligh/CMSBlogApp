import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  userVerify(){
    var accountType= localStorage.getItem('accountType');
    if (accountType==="User"){
      return true;
    }
    else {
      return false
   }
 }
}
