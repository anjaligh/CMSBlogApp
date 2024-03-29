import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.injector.get(AuthService)
let tokenizedReq= req.clone(
  {
setHeaders:{
  authorization:`Bearer ${authservice.getToken()}`
}
}
)
return next.handle(tokenizedReq)
  }
//   constructor(private injector:Injector) { }
//   intercept(req:any,nxt:any){
// let authservice=this.injector.get(AuthService)
// let tokenizedReq= req.clone(
//   {
// setHeaders:{
//   authorization:`Bearer ${authservice.getToken()}`
// }
// }
// )
// return nxt.handle(tokenizedReq)
//   }
}
