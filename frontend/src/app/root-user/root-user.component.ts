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
  active="active";
  onButtonGroupClick($event: { target: any; srcElement: any; }){
    let clickedElement = $event.target || $event.srcElement;
    console.log($event);
    console.log($event.srcElement);
    if( clickedElement.nodeName === "A" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className = "active";
    }
console.log(clickedElement.className)
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
