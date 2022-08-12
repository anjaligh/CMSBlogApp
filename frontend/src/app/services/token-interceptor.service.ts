import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){
let authservice=this.injector.get(AuthService)
let tokenizedReq= req.clone(
  {
setHeaders:{
  authorization:`Bearer ${authservice.getToken()}`
}
}
)
return nxt.handle(tokenizedReq)
  }
}
