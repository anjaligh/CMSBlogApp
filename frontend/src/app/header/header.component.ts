import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logoImage="assets/logo.jpg"
containername="container1";
  constructor(private bdata:BackendDataService, public auth:AuthService) { }

  ngOnInit(): void {
    var logstatus=this.auth.loggedIn();
    if(logstatus== true){
      this.containername="container2";
      console.log("container2")
    }
    if(logstatus== false){
      this.containername="container1";
      console.log("container1")
    }
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('accountType');
    localStorage.removeItem('category');
    localStorage.removeItem('mailid');
    localStorage.removeItem('username');
  }
  
}
