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
 rootUserVerify(){
  var accountType= localStorage.getItem('accountType');
  if (accountType==="Rootuser"){
    return true;
  }
  else {
    return false
 }
}
adminVerify(){
  var accountType= localStorage.getItem('accountType');
  if (accountType==="Admin"){
    return true;
  }
  else {
    return false
 }
}
getToken(){
  return localStorage.getItem('token');
}
}
