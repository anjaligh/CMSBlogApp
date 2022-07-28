import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root-user',
  templateUrl: './root-user.component.html',
  styleUrls: ['./root-user.component.css']
})
export class RootUserComponent implements OnInit {
logoImage="assets/logo.jpg"
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
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
